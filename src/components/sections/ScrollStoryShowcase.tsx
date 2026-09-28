import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { 
  Pill, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Eye, 
  CheckCircle2, 
  Activity,
  QrCode,
  Users,
  Code2
} from 'lucide-react';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';

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
  const [activeStep, setActiveStep] = useState(0);

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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const slides: StorySlide[] = [
    {
      step: '01',
      category: 'SOFTWARE ENGINEER // CORE PROFILE',
      titlePrimary: 'WIPAPORN WIKORNMETKUL',
      titleSecondary: 'ARCHITECTING SCALABLE SYSTEMS WITH INTENT & IMPACT.',
      description: 'Bridging complex clinical requirements with ultra-responsive frontend architectures and resilient distributed systems.',
      tags: ['System Architecture', 'Full-Stack Engineering', 'Production Grade'],
      metrics: [
        { label: 'Latency Standard', value: '< 85ms' },
        { label: 'Engineering Tier', value: 'Production Ready' }
      ],
      floatingBadge: {
        icon: <Code2 size={16} className="text-cyan-400" />,
        title: 'Software Engineer',
        subtitle: 'Scalable Systems & HealthTech',
        color: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300'
      },
      glowColor: 'from-cyan-500/25 via-blue-600/20 to-transparent'
    },
    {
      step: '02',
      category: 'CROSS-DISCIPLINARY CO-DESIGN',
      titlePrimary: 'PHARMACIST COLLABORATION.',
      titleSecondary: 'PHARMACOLOGICAL LOGIC MEETS SOFTWARE ENGINEERING.',
      description: 'Co-designing with clinical pharmacists to formalize medication safety rules, dosage verification algorithms, and multi-tier approval workflows.',
      tags: ['Domain-Driven Design', 'Clinical Accuracy', 'Safety-First'],
      metrics: [
        { label: 'Audit Accuracy', value: '100% Certified' },
        { label: 'Domain Partner', value: 'Clinical Pharmacists' }
      ],
      floatingBadge: {
        icon: <Users size={16} className="text-emerald-400" />,
        title: 'Pharmacist Co-Design',
        subtitle: '100% Clinical Verification',
        color: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300'
      },
      glowColor: 'from-emerald-500/25 via-teal-600/20 to-transparent'
    },
    {
      step: '03',
      category: 'FLAGSHIP PLATFORM // PIL SYSTEM',
      titlePrimary: 'PATIENT INFORMATION LEAFLETS.',
      titleSecondary: 'SUB-85ms SEARCH ACROSS 350+ CRITICAL MEDICATIONS.',
      description: 'Replacing dense paper leaflets with structured digital leaflets. Patients scan physical medicine packages to view instant, verified instructions.',
      tags: ['Sub-85ms Latency', 'Physical QR Router', 'Offline PWA Ready'],
      ctaLabel: 'Open Interactive PIL Window',
      ctaAction: () => onOpenWindow('pil'),
      metrics: [
        { label: 'Query Latency', value: '78ms' },
        { label: 'Readability Gain', value: '+74% Clarity' }
      ],
      floatingBadge: {
        icon: <QrCode size={16} className="text-cyan-400" />,
        title: 'PIL Management System',
        subtitle: '350+ Leaflets Indexed',
        color: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300'
      },
      glowColor: 'from-cyan-500/25 via-indigo-600/20 to-transparent'
    },
    {
      step: '04',
      category: 'HUMAN ACCESSIBILITY & IMPACT',
      titlePrimary: 'ENGINEERED FOR EVERY HUMAN.',
      titleSecondary: 'WCAG AAA ACCESSIBILITY & ELDERLY-FIRST UX.',
      description: 'High-contrast viewports, assistive speech instructions, and simplified dosage visualizers ensuring zero barrier for elderly patients.',
      tags: ['WCAG 2.1 AAA', 'Assistive Tech', 'Elderly-First UX'],
      ctaLabel: 'Test Live Leaflet Demo',
      ctaAction: () => onOpenWindow('pil'),
      metrics: [
        { label: 'Accessibility Tier', value: 'WCAG 2.1 AAA' },
        { label: 'Elderly Contrast Ratio', value: '7:1 High Legibility' }
      ],
      floatingBadge: {
        icon: <Eye size={16} className="text-purple-400" />,
        title: 'WCAG AAA Compliant',
        subtitle: 'Accessible to All Patients',
        color: 'border-purple-500/30 bg-purple-950/40 text-purple-300'
      },
      glowColor: 'from-purple-500/25 via-pink-600/20 to-transparent'
    }
  ];

  // Sound and active step tracker
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = slides.length;
    const step = Math.min(total - 1, Math.floor(latest * total));
    if (step !== activeStep) {
      setActiveStep(step);
      sound.playClick(1000 + step * 100, 0.02);
    }
  });

  // 3D rotation transforms across stages:
  // Slide 0: 0 deg
  // Slide 1: rotates to left (-18 deg)
  // Slide 2: centers with slight upward tilt (+8 deg)
  // Slide 3: rotates to right (+16 deg)
  // Slide 4: returns to heroic frontal pose
  const photoRotateY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, 14, -10, 12, 0]
  );

  const photoRotateX = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [4, -4, 6, -2, 0]
  );

  const photoScale = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.05, 0.98, 1.06, 1]
  );

  const photoTranslateZ = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 60, -30, 70, 0]
  );

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
      className="relative h-[450vh] bg-[#06070a] text-slate-100"
      style={{ perspective: '1400px' }}
    >
      {/* Sticky Stage Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-3 sm:p-8 overflow-hidden">
        
        {/* Main Cinema Viewport Container */}
        <div 
          ref={stageRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-7xl h-[90vh] sm:h-[86vh] rounded-3xl border border-white/[0.12] bg-[#090b11] shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none"
        >
          {/* Dynamic Ambient Glow behind the photo */}
          <div 
            className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr ${currentSlide.glowColor} blur-[130px] pointer-events-none transition-all duration-700`}
          />

          {/* Top Stage Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 z-20">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_#F43F5E] animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-slate-300 uppercase font-bold">
                NOIR 3D STAGE // WIPAPORN WIKORNMETKUL
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="text-cyan-400 font-bold">{currentSlide.step}</span>
              <span>/</span>
              <span>0{slides.length}</span>
            </div>
          </div>

          {/* Center Stage: Split Screen with 3D Rotating Person Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-2 z-10">
            
            {/* Left Narrative Column */}
            <motion.div 
              key={`text-${activeStep}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-4 pl-0 sm:pl-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                <Sparkles size={12} className="text-cyan-400" />
                <span>{currentSlide.category}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.05]">
                  {currentSlide.titlePrimary}
                </h3>
                <h4 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-400 tracking-tight leading-snug">
                  {currentSlide.titleSecondary}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentSlide.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button if available */}
              {currentSlide.ctaLabel && currentSlide.ctaAction && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      sound.playWindowOpen();
                      currentSlide.ctaAction!();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)]"
                  >
                    <span>{currentSlide.ctaLabel}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>

            {/* Right Column: 3D Rotating Person Cutout with Parallax */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[52vh] sm:h-[60vh]">
              
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
                  // Subtle mouse parallax addition
                  x: mousePos.x * 24,
                  y: mousePos.y * 20,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative flex items-center justify-center w-full h-full"
              >
                {/* Halo Rim Light behind the person */}
                <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-rose-500/20 blur-3xl -z-10" />

                {/* THE PERSON (User's Photo) */}
                <div className="relative group max-h-full flex items-end justify-center">
                  <img
                    src="/profile.png"
                    alt="Wipaporn Wikornmetkul"
                    className="max-h-[52vh] sm:max-h-[62vh] object-contain drop-shadow-[0_20px_50px_rgba(0,240,255,0.3)] drop-shadow-[0_0_90px_rgba(139,92,246,0.25)] transition-all duration-300"
                    style={{
                      // Smooth gradient mask at bottom so the lower part fades cleanly into the obsidian stage
                      maskImage: 'linear-gradient(to bottom, black 72%, transparent 96%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 96%)',
                    }}
                  />

                  {/* Reflection / Ground Spotlight */}
                  <div className="absolute -bottom-4 w-4/5 h-10 bg-cyan-400/25 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Floating 3D Badge 1: Stage Role */}
                <motion.div
                  key={`badge-${activeStep}`}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`absolute -bottom-2 sm:bottom-4 -left-2 sm:left-4 z-30 p-3 sm:p-3.5 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center space-x-3 ${currentSlide.floatingBadge.color}`}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="p-2 rounded-xl bg-white/[0.08] shadow-inner">
                    {currentSlide.floatingBadge.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-white">
                      {currentSlide.floatingBadge.title}
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono">
                      {currentSlide.floatingBadge.subtitle}
                    </div>
                  </div>
                </motion.div>

                {/* Floating 3D Badge 2: Telemetry Metric */}
                <motion.div
                  key={`metric-${activeStep}`}
                  initial={{ opacity: 0, y: -15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="absolute top-2 sm:top-6 -right-2 sm:right-6 z-30 p-3 rounded-2xl border border-white/[0.12] bg-[#0c0f18]/85 backdrop-blur-xl shadow-2xl text-right font-mono"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {currentSlide.metrics[0].label}
                  </div>
                  <div className="text-sm font-bold text-cyan-400 mt-0.5">
                    {currentSlide.metrics[0].value}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* Left Vertical Stepper (Like Image Reference: 01, 02, 03, 04) */}
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
                          ? 'bg-rose-500 shadow-[0_0_12px_#F43F5E] scale-125' 
                          : 'bg-white/20 group-hover:bg-white/50'
                      }`} 
                    />
                    {isActive && (
                      <span className="absolute w-4 h-4 rounded-full border border-rose-500/60 animate-ping" />
                    )}
                  </div>

                  <span 
                    className={`font-mono text-xs transition-colors duration-200 hidden sm:inline ${
                      isActive 
                        ? 'text-white font-bold' 
                        : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {s.step}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Vertical "SCROLL TO EXPLORE" Indicator (Like Image Reference) */}
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-3 z-20 select-none">
            <span 
              className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold rotate-90 origin-center whitespace-nowrap"
              style={{ writingMode: 'vertical-rl' }}
            >
              SCROLL TO EXPLORE
            </span>
            <div className="w-[2px] h-14 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="w-full h-full bg-rose-500 shadow-[0_0_8px_#F43F5E]"
              />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_#F43F5E]" />
          </div>

          {/* Bottom Stage Footer */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 text-[11px] font-mono text-slate-500 z-20">
            <div className="flex items-center space-x-3">
              <span>WIPAPORN WIKORNMETKUL</span>
              <span>•</span>
              <span className="text-cyan-400">PIL MANAGEMENT SYSTEM</span>
            </div>
            <div className="hidden sm:inline">
              3D PERSPECTIVE &amp; MOUSE PARALLAX ACTIVE
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
