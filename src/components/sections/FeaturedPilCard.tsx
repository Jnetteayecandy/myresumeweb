import React from 'react';
import { 
  Pill, 
  ShieldCheck, 
  ArrowUpRight, 
  ExternalLink,
  Users, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { flagshipProject } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface FeaturedPilCardProps {
  onOpenPilWindow: () => void;
}

export const FeaturedPilCard: React.FC<FeaturedPilCardProps> = ({ onOpenPilWindow }) => {
  const { lang } = useLanguage();
  const t = translations[lang].pilCard;

  return (
    <section id="pil-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
            <Pill size={14} className="text-blue-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <button
          onClick={() => {
            sound.playWindowOpen();
            onOpenPilWindow();
          }}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs transition-all shadow-xs hover:shadow-sm self-start sm:self-auto shrink-0"
        >
          <FileText size={14} className="text-blue-600" />
          <span>{t.openWindowBtn}</span>
        </button>
      </div>

      {/* Main Clean Light Spotlight Card */}
      <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/80">
                {t.categoryBadge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600" />
                {t.verifiedBadge}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {flagshipProject.description}
            </p>

            {/* Pharmacist Collaboration Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                <Users size={14} className="text-blue-600" />
                <span>{t.quoteTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{t.quoteText}"
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {flagshipProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Direct CTA Buttons & Guest Access Notice */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Primary: Live Website Button */}
              <div className="space-y-1.5">
                <a
                  href="https://medication-project-tau.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md active:scale-98"
                >
                  <span>{t.ctaVisitLive}</span>
                  <ExternalLink size={16} />
                </a>
                <div className="text-xs text-slate-500 font-medium pl-1">
                  {t.guestAccessNotice}
                </div>
              </div>

              {/* Secondary: Open Case Study Modal */}
              <button
                onClick={() => {
                  sound.playWindowOpen();
                  onOpenPilWindow();
                }}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold text-sm transition-all shadow-xs self-start"
              >
                <span>{t.ctaDetails}</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Right: Metrics & System Diagram Panel */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-700">
                {t.cardTitle}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                {t.auditStatus}
              </span>
            </div>

            {/* 4 Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {flagshipProject.metrics?.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[11px] font-medium text-slate-500 truncate">
                    {m.label}
                  </div>
                  <div className="text-base font-extrabold text-blue-700 mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow List */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {t.workflowTitle}
              </span>
              <ul className="space-y-2">
                {t.workflows.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

