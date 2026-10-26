import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  Camera, 
  ExternalLink,
  Users,
  Code2,
  GraduationCap
} from 'lucide-react';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface ScrollStoryShowcaseProps {
  onOpenWindow: (id: WindowId) => void;
}

interface StorySlide {
  step: string;
  category: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  tags: string[];
  ctaLabel?: string;
  ctaAction?: () => void;
  metrics: { label: string; value: string }[];
  floatingBadge: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    color: string;
  };
  glowColor: string;
}

export const ScrollStoryShowcase: React.FC<ScrollStoryShowcaseProps> = ({ onOpenWindow }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const isSeekingRef = useRef(false);
  const pendingTimeRef = useRef<number | null>(null);
  const alphaBufferRef = useRef<Uint8Array | null>(null);
  const tempBlurRef = useRef<Uint8Array | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].showcase;

  // Mouse parallax position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 420, damping: 36, restDelta: 0.001 });

  const slideIcons = [
    <GraduationCap size={16} className="text-blue-400" />,
    <Users size={16} className="text-emerald-400" />,
    <Code2 size={16} className="text-indigo-400" />,
    <Camera size={16} className="text-amber-400" />
  ];

  const slideColors = [
    {
      badge: 'border-blue-500/30 bg-zinc-900/95 text-blue-300',
      glow: 'from-blue-600/25 via-indigo-600/15 to-transparent'
    },
    {
      badge: 'border-emerald-500/30 bg-zinc-900/95 text-emerald-300',
      glow: 'from-emerald-600/25 via-teal-600/15 to-transparent'
    },
    {
      badge: 'border-indigo-500/30 bg-zinc-900/95 text-indigo-300',
      glow: 'from-indigo-600/25 via-blue-600/15 to-transparent'
    },
    {
      badge: 'border-amber-500/30 bg-zinc-900/95 text-amber-300',
      glow: 'from-amber-600/25 via-orange-600/15 to-transparent'
    }
  ];

  const slides: StorySlide[] = t.slides.map((s, idx) => ({
    ...s,
    ctaAction: idx === 1 
      ? () => window.open('https://medication-project-tau.vercel.app', '_blank')
      : idx === 2
      ? () => {
          const el = document.getElementById('projects-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      : idx === 3
      ? () => {
          const el = document.getElementById('hobbies-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      : undefined,
    floatingBadge: {
      ...s.floatingBadge,
      icon: slideIcons[idx],
      color: slideColors[idx].badge
    },
    glowColor: slideColors[idx].glow
  }));

  // Step change sound and indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = slides.length;
    const step = Math.min(total - 1, Math.floor(latest * total));
    if (step !== activeStep) {
      setActiveStep(step);
      sound.playClick(1000 + step * 80, 0.02);
    }
  });

  // Real-time chroma keying to remove green screen from video frame
  const renderFrameToCanvas = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;

    const width = video.videoWidth;
    const height = video.videoHeight;
    if (!width || !height) return;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    const frame = ctx.getImageData(0, 0, width, height);
    const data = frame.data;
    const len = data.length;

    // Fast, lightweight chroma key with despill and soft edge falloff
    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const maxRB = r > b ? r : b;
      const diff = g - maxRB;

      if (diff > 16) {
        if (diff >= 48) {
          data[i + 3] = 0; // Pure transparent green background
        } else {
          // Feathered semi-transparent edge
          const factor = (diff - 16) / 32;
          data[i + 3] = Math.round(data[i + 3] * (1 - factor));
          data[i + 1] = maxRB; // Despill fringe green tint
        }
      } else if (g > maxRB) {
        // Subtle despill on skin/hair boundaries
        data[i + 1] = maxRB;
      }
    }

    ctx.putImageData(frame, 0, 0);
    setIsCanvasReady(true);
  }, []);

  const applySeek = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const clampedTime = Math.min(Math.max(time, 0), video.duration - 0.03);

    // If browser is still busy seeking previous frame, queue the latest requested timestamp
    if (isSeekingRef.current) {
      pendingTimeRef.current = clampedTime;
      return;
    }

    if (Math.abs(video.currentTime - clampedTime) < 0.01) {
      return;
    }

    isSeekingRef.current = true;
    video.currentTime = clampedTime;
  }, []);

  // Listen for video events and sync with scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      renderFrameToCanvas();
      isSeekingRef.current = false;
      if (pendingTimeRef.current !== null) {
        const nextTime = pendingTimeRef.current;
        pendingTimeRef.current = null;
        applySeek(nextTime);
      }
    };

    const handleLoadedData = () => {
      video.pause();
      renderFrameToCanvas();
      const currentProgress = smoothProgress.get();
      if (video.duration) {
        applySeek(currentProgress * video.duration);
      }
    };

    const handleError = () => {
      setHasVideoError(true);
      setIsCanvasReady(false);
    };

    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedData);
    video.addEventListener('error', handleError);

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    // Attach requestVideoFrameCallback for continuous paint whenever browser decodes a frame
    let rVFCId: number | null = null;
    let isMounted = true;
    const onFrame = () => {
      if (!isMounted) return;
      renderFrameToCanvas();
      if ('requestVideoFrameCallback' in video) {
        rVFCId = (video as any).requestVideoFrameCallback(onFrame);
      }
    };

    if ('requestVideoFrameCallback' in video) {
      rVFCId = (video as any).requestVideoFrameCallback(onFrame);
    }

    return () => {
      isMounted = false;
      if (rVFCId !== null && 'cancelVideoFrameCallback' in video) {
        (video as any).cancelVideoFrameCallback(rVFCId);
      }
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [smoothProgress, applySeek, renderFrameToCanvas]);

  // Scrub video playback frame based on scroll progress
  useMotionValueEvent(smoothProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;
    const targetTime = progress * video.duration;
    applySeek(targetTime);
  });

  // Stable, smooth perspective tilt that harmonizes with the video's natural rotation without wobbling
  const photoRotateY = useTransform(smoothProgress, [0, 1], [-2, 2]);
  const photoRotateX = useTransform(smoothProgress, [0, 1], [1, -1]);
  const photoScale = useTransform(smoothProgress, [0, 0.5, 1], [1.22, 1.25, 1.22]);
  const photoTranslateZ = useTransform(smoothProgress, [0, 1], [0, 15]);

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / (slides.length - 1)) * totalHeight;
    sound.playClick(1200);
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const currentSlide = slides[activeStep];

  return (
    <div 
      ref={containerRef} 
      className="relative h-[420vh] bg-slate-100/50 text-slate-100"
      style={{ perspective: '1400px' }}
    >
      {/* Sticky Stage Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-3 sm:p-8 overflow-hidden">
        
        {/* Main Cinema Viewport Container (Black Card Theme) */}
        <div 
          ref={stageRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-7xl h-[90vh] sm:h-[86vh] rounded-3xl border border-zinc-800/90 bg-zinc-950 text-zinc-100 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none"
        >
          {/* Dynamic Ambient Glow behind the photo */}
          <div 
            className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr ${currentSlide.glowColor} blur-[120px] pointer-events-none transition-all duration-700`}
          />

          {/* Top Stage Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 z-20">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50 animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase font-bold">
                {t.badge}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <span className="text-blue-400 font-bold">{currentSlide.step}</span>
              <span>/</span>
              <span>0{slides.length}</span>
            </div>
          </div>

          {/* Center Stage: Split Screen with 3D Rotating Person Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-2 z-10">
            
            {/* Left Narrative Column */}
            <motion.div 
              key={`text-${activeStep}`}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-4 pl-0 sm:pl-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-blue-300">
                <Sparkles size={12} className="text-blue-400" />
                <span>{currentSlide.category}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                  {currentSlide.titlePrimary}
                </h3>
                <h4 className="text-base sm:text-xl font-bold text-blue-400 tracking-tight leading-snug">
                  {currentSlide.titleSecondary}
                </h4>
              </div>

              <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentSlide.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button if available */}
              {currentSlide.ctaLabel && currentSlide.ctaAction && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      sound.playClick();
                      currentSlide.ctaAction!();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center space-x-2 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
                  >
                    <span>{currentSlide.ctaLabel}</span>
                    <ArrowUpRight size={14} />
                  </button>
                  {activeStep === 1 && (
                    <div className="text-[11px] font-medium text-zinc-400 mt-1.5 pl-1">
                      You can continue as guest
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Right Column: 3D Rotating Person Cutout with Parallax */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[56vh] sm:h-[65vh] lg:h-[70vh]">
              
              {/* 3D Rotating Avatar Stage */}
              <motion.div
                style={{
                  rotateY: photoRotateY,
                  rotateX: photoRotateX,
                  scale: photoScale,
                  z: photoTranslateZ,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  x: mousePos.x * 20,
                  y: mousePos.y * 16,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative flex items-center justify-center w-full h-full"
              >
                {/* Subtle soft backdrop blur circle */}
                <div className="absolute w-80 sm:w-[460px] h-80 sm:h-[460px] rounded-full bg-gradient-to-tr from-blue-900/25 via-indigo-900/15 to-transparent blur-3xl -z-10" />

                {/* THE PERSON (Chroma-Keyed Real-Time Canvas with Fallback Image) */}
                <div className="relative group max-h-full flex items-end justify-center">
                  {/* Hidden Source Video */}
                  <video
                    ref={videoRef}
                    src="/videos/profile-scroll.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="hidden pointer-events-none"
                  />

                  {/* Real-Time Chroma-Keyed Canvas (Green Screen Removed, Zero Flickering, Fast Smooth Blend) */}
                  <canvas
                    ref={canvasRef}
                    className={`max-h-[58vh] sm:max-h-[66vh] lg:max-h-[72vh] w-auto object-contain transition-opacity duration-300 pointer-events-none ${
                      isCanvasReady && !hasVideoError ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                    style={{
                      filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.18)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.9))',
                      maskImage: 'linear-gradient(to bottom, black 84%, transparent 99%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 99%)',
                    }}
                  />

                  {/* Fallback Static Image (Shown when video is loading, errored, or canvas not ready) */}
                  {(!isCanvasReady || hasVideoError) && (
                    <img
                      src="/profile.png"
                      alt="Wipaporn Wikornmetkul"
                      className="max-h-[58vh] sm:max-h-[66vh] lg:max-h-[72vh] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition-all duration-300"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
                      }}
                    />
                  )}

                  {/* Soft floor shadow */}
                  <div className="absolute -bottom-2 w-4/5 h-10 bg-black/80 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Floating 3D Badge 1: Stage Role */}
                <motion.div
                  key={`badge-${activeStep}`}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`absolute -bottom-2 sm:bottom-4 -left-2 sm:left-4 z-30 p-3 sm:p-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl flex items-center space-x-3 ${currentSlide.floatingBadge.color}`}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="p-2 rounded-xl bg-zinc-800/90 border border-zinc-700/60 shadow-xs">
                    {currentSlide.floatingBadge.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {currentSlide.floatingBadge.title}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-medium">
                      {currentSlide.floatingBadge.subtitle}
                    </div>
                  </div>
                </motion.div>

                {/* Floating 3D Badge 2: Key Metric */}
                <motion.div
                  key={`metric-${activeStep}`}
                  initial={{ opacity: 0, y: -15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="absolute top-2 sm:top-6 -right-2 sm:right-6 z-30 p-3 rounded-2xl border border-zinc-800 bg-zinc-900/95 backdrop-blur-xl shadow-2xl text-right font-mono"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                    {currentSlide.metrics[0].label}
                  </div>
                  <div className="text-sm font-bold text-blue-400 mt-0.5">
                    {currentSlide.metrics[0].value}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* Left Vertical Stepper (01, 02, 03, 04) */}
          <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-5 z-20">
            {slides.map((s, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={s.step}
                  onClick={() => scrollToStep(index)}
                  className="flex items-center space-x-2.5 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center">
                    <span 
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-500 shadow-sm shadow-blue-500/80 scale-125' 
                          : 'bg-zinc-700 group-hover:bg-zinc-500'
                      }`} 
                    />
                    {isActive && (
                      <span className="absolute w-4 h-4 rounded-full border border-blue-400/50 animate-ping" />
                    )}
                  </div>

                  <span 
                    className={`font-mono text-xs transition-colors duration-200 hidden sm:inline ${
                      isActive 
                        ? 'text-blue-400 font-bold' 
                        : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {s.step}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Vertical "SCROLL TO EXPLORE" Indicator */}
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-3 z-20 select-none">
            <span 
              className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase font-semibold rotate-90 origin-center whitespace-nowrap"
              style={{ writingMode: 'vertical-rl' }}
            >
              {t.scrollIndicator}
            </span>
            <div className="w-[2px] h-14 bg-zinc-800 rounded-full overflow-hidden relative">
              <motion.div 
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="w-full h-full bg-blue-500"
              />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </div>

          {/* Bottom Stage Footer */}
          <div className="flex items-center justify-between border-t border-zinc-800/80 pt-3 text-[11px] font-mono text-zinc-400 z-20">
            <div className="flex items-center space-x-3">
              <span>{t.footerLeft}</span>
              <span>•</span>
              <span className="text-blue-400 font-semibold">{t.footerCenter}</span>
            </div>
            <div className="hidden sm:inline text-zinc-500">
              {t.footerRight}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

