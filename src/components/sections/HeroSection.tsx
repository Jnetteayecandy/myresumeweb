import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ArrowRight, 
  Pill, 
  Layers, 
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';

interface HeroSectionProps {
  onOpenWindow: (id: WindowId) => void;
  onScrollTo: (elementId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWindow,
  onScrollTo
}) => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Profile Avatar Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-5 group cursor-pointer"
        onClick={() => onScrollTo('story-showcase')}
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-rose-500 shadow-[0_0_30px_rgba(0,240,255,0.35)] group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0c12]">
            <img 
              src="/profile.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#08090d] shadow-[0_0_8px_#10B981] animate-pulse" />
      </motion.div>

      {/* Top Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-inner mb-6 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse" />
        <span className="text-xs font-mono text-slate-300">
          STATUS: <span className="text-emerald-400 font-semibold">{personalInfo.status}</span>
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl space-y-4"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          Engineering Scalable Systems with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
            Precision & Impact
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed pt-2">
          Hi, I am <span className="text-slate-100 font-semibold">{personalInfo.name}</span>. 
          A Software Engineer focused on high-performance web systems, domain-driven architectures, and human-centered healthcare solutions.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
      >
        {/* Primary CTA: PIL Case Study */}
        <button
          onClick={() => {
            sound.playWindowOpen();
            onOpenWindow('pil');
          }}
          className="group relative px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center space-x-2 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
        >
          <Pill size={18} className="text-slate-950 transition-transform group-hover:rotate-45 duration-300" />
          <span>Launch PIL Case Study</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary: Projects Grid */}
        <button
          onClick={() => {
            sound.playClick();
            onScrollTo('projects-section');
          }}
          className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm flex items-center space-x-2 transition-all"
        >
          <Layers size={16} className="text-purple-400" />
          <span>View Engineering Works</span>
        </button>

        {/* Tertiary: Interactive Terminal */}
        <button
          onClick={() => {
            sound.playWindowOpen();
            onOpenWindow('terminal');
          }}
          className="px-4 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-slate-100 font-mono text-xs flex items-center space-x-2 transition-all"
          title="Open interactive shell"
        >
          <Terminal size={14} className="text-amber-400" />
          <span>&gt;_ terminal.sh</span>
        </button>
      </motion.div>

      {/* System Telemetry Metrics Pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mt-14"
      >
        {personalInfo.stats.map((item, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left hover:border-white/[0.12] transition-colors"
          >
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{item.label}</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">{item.value}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div 
        onClick={() => onScrollTo('story-showcase')}
        className="cursor-pointer mt-12 text-slate-500 hover:text-slate-300 transition-colors flex flex-col items-center space-y-1"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
};
