import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Maximize2, 
  X, 
  CheckCircle2, 
  FileCheck2,
  Calendar
} from 'lucide-react';
import { certificatesData } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const CertificatesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].certificates;
  const isTh = lang === 'th';
  const [activeCert, setActiveCert] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert]);

  return (
    <section id="certificates-section" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-teal-800 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
          <Award size={14} className="text-teal-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Certificates Grid: Responsive 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {certificatesData.map((cert) => {
          const title = isTh && cert.titleTh ? cert.titleTh : cert.title;
          const subtitle = isTh && cert.subtitleTh ? cert.subtitleTh : cert.subtitle;
          const description = isTh && cert.descriptionTh ? cert.descriptionTh : cert.description;
          const highlightsList = isTh && cert.highlightsTh ? cert.highlightsTh : cert.highlights;
          const issueDate = cert.metrics?.find(m => m.label.toLowerCase().includes('date') || m.label.toLowerCase().includes('given'))?.value;

          return (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden group"
            >
              <div>
                {/* Card Top Pill */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-teal-50 border border-teal-200/70 text-teal-700">
                      <Award size={16} />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      {cert.badge}
                    </span>
                  </div>

                  {issueDate && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      <Calendar size={11} className="text-slate-400" />
                      <span>{issueDate}</span>
                    </span>
                  )}
                </div>

                {/* Certificate Image Preview Container */}
                {cert.imageUrl && (
                  <div 
                    onClick={() => {
                      sound.playClick();
                      setActiveCert(cert);
                    }}
                    className="mb-4 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group/cert transition-all hover:border-teal-400 hover:shadow-sm"
                    title={t.viewEnlarged}
                  >
                    <div className="aspect-[16/11] w-full overflow-hidden bg-slate-100 flex items-center justify-center p-1.5">
                      <img 
                        src={cert.imageUrl} 
                        alt={title} 
                        className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover/cert:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-md">
                        <Maximize2 size={13} className="text-teal-600" />
                        <span>{t.enlargeBtn}</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-xs font-medium text-teal-700 mt-1">
                  {subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {description}
                </p>

                {/* Highlights List */}
                {highlightsList && (
                  <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100">
                    {highlightsList.map((hl, i) => (
                      <li key={i} className="text-[11px] text-slate-600 flex items-start space-x-2">
                        <CheckCircle2 size={13} className="text-teal-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer: Tags & Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-3.5">
                {/* Tech & Organization Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveCert(cert);
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <FileCheck2 size={14} className="text-teal-600" />
                    <span>{t.enlargeBtn}</span>
                  </button>

                  {cert.liveUrl && (
                    <a
                      href={cert.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-2xs hover:shadow-xs transition-all ml-auto"
                    >
                      <span>{t.verifyBtn}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in"
            onClick={() => {
              sound.playClick(900);
              setActiveCert(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200/90 bg-slate-50">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {isTh && activeCert.titleTh ? activeCert.titleTh : activeCert.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {activeCert.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playClick(900);
                    setActiveCert(null);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                  title={t.closeModal}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100/60 flex items-center justify-center">
                <img
                  src={activeCert.imageUrl}
                  alt={activeCert.title}
                  className="max-h-[68vh] w-auto object-contain rounded-xl shadow-md border border-slate-200 bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200/90 bg-white">
                <div className="text-xs text-slate-500 font-mono">
                  {activeCert.tags.find(tag => tag.includes('ID:') || tag.includes('Code:')) || 'Verified Credential'}
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      sound.playClick(900);
                      setActiveCert(null);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    {t.closeModal}
                  </button>
                  {activeCert.liveUrl && (
                    <a
                      href={activeCert.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all"
                    >
                      <Award size={14} />
                      <span>{t.verifyBtn}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

