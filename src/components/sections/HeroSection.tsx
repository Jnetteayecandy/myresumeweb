import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface HeroSectionProps {
  onOpenWindow: (id: WindowId) => void;
  onScrollTo: (elementId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWindow,
  onScrollTo
}) => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const isTh = lang === 'th';

  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Soft ambient background gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Profile Avatar with Clean Professional Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6 group cursor-pointer"
        onClick={() => onScrollTo('story-showcase')}
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white border-2 border-slate-200/90 shadow-md group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
            <img 
              src="/profile-hero.png?v=2" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <span 
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" 
          title="Available for hire"
        />
      </motion.div>

      {/* 1. Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs mb-6 text-emerald-800 text-xs sm:text-sm font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{t.statusValue}</span>
      </motion.div>

      {/* 2. Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-4xl space-y-4"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          <span>{t.headlinePrefix}</span>{' '}
          <span className="text-blue-700 font-extrabold">
            {t.headlineHighlight}
          </span>
        </h1>

        {/* 3. Intro Bio */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
          {t.introDesc}
        </p>
      </motion.div>

      {/* 4. Three CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
      >
        {/* Button 1: View Projects */}
        <button
          onClick={() => {
            sound.playClick();
            onScrollTo('pil-section');
          }}
          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md active:scale-98"
        >
          <span>{t.ctaProjects}</span>
          <ArrowRight size={16} />
        </button>

        {/* Button 2: Download / View Resume */}
        <button
          onClick={() => {
            sound.playWindowOpen();
            onOpenWindow('resume');
          }}
          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-semibold text-sm transition-all shadow-xs hover:shadow-sm active:scale-98"
        >
          <FileText size={16} className="text-blue-600" />
          <span>{t.ctaResume}</span>
        </button>

        {/* Button 3: Contact */}
        <button
          onClick={() => {
            sound.playClick();
            onScrollTo('contact-section');
          }}
          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold text-sm transition-all shadow-xs active:scale-98"
        >
          <Mail size={16} className="text-slate-500" />
          <span>{t.ctaContact}</span>
        </button>
      </motion.div>

      {/* Bottom Credential Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 max-w-4xl w-full"
      >
        {t.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-left"
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {stat.label}
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1 truncate">
              {stat.value}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Subtle Scroll Hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="mt-12 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        onClick={() => onScrollTo('story-showcase')}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

