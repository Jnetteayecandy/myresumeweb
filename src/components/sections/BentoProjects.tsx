import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  ExternalLink, 
  Gamepad2, 
  Heart, 
  Award, 
  ShieldAlert, 
  ArrowUpRight,
  Maximize2,
  X
} from 'lucide-react';
import { bentoProjects } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface BentoProjectsProps {
  onOpenWindow: (id: WindowId) => void;
}

export const BentoProjects: React.FC<BentoProjectsProps> = () => {
  const { lang } = useLanguage();
  const t = translations[lang].bento;
  const isTh = lang === 'th';
  const [activeCertificateModal, setActiveCertificateModal] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCertificateModal(false);
      }
    };
    if (activeCertificateModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertificateModal]);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'wedding-card-web':
        return <Heart size={18} className="text-rose-500" />;
      case 'event-b-formal-methods':
        return <ShieldAlert size={18} className="text-indigo-600" />;
      case 'web-mini-games':
        return <Gamepad2 size={18} className="text-emerald-600" />;
      case 'physics-certification':
        return <Award size={18} className="text-teal-600" />;
      default:
        return <FolderKanban size={18} className="text-blue-600" />;
    }
  };

  return (
    <section id="projects-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
          <FolderKanban size={14} className="text-blue-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Clean Light 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bentoProjects.map((project, index) => {
          const isGame = project.id === 'web-mini-games';
          const isCert = project.id === 'physics-certification';
          const title = isTh && project.titleTh ? project.titleTh : project.title;
          const subtitle = isTh && project.subtitleTh ? project.subtitleTh : project.subtitle;
          const description = isTh && project.descriptionTh ? project.descriptionTh : project.description;
          const highlightsList = isTh && project.highlightsTh ? project.highlightsTh : project.highlights;

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden group"
            >
              <div>
                {/* Card Top Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {isCert ? 'CERT-01' : `PROJ-0${index + 1}`}
                    </span>
                  </div>

                  {project.metrics && project.metrics.length > 0 && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {project.metrics[0].value}
                    </span>
                  )}
                </div>

                {/* Certificate Image Preview Container (if image exists) */}
                {project.imageUrl && (
                  <div 
                    onClick={() => {
                      sound.playClick();
                      setActiveCertificateModal(true);
                    }}
                    className="mb-4 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group/cert transition-all hover:border-teal-500 hover:shadow-sm"
                    title={isTh ? "คลิกเพื่อดูภาพขยายใบประกาศนียบัตร" : "Click to view enlarged certificate preview"}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img 
                        src={project.imageUrl} 
                        alt={title} 
                        className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/cert:scale-[1.02]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-md">
                        <Maximize2 size={13} className="text-teal-600" />
                        <span>{isTh ? 'คลิกเพื่อดูภาพขยาย' : 'Click to enlarge'}</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-xs font-medium text-blue-600 mt-1">
                  {subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {description}
                </p>

                {/* Highlights List if available */}
                {highlightsList && (
                  <ul className="mt-3 space-y-1.5 pt-2 border-t border-slate-100">
                    {highlightsList.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer: Tags & Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  {isGame ? (
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs hover:shadow-sm transition-all"
                    >
                      <Gamepad2 size={15} />
                      <span>{t.playGameBtn}</span>
                    </a>
                  ) : isCert ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all"
                    >
                      <Award size={15} />
                      <span>{isTh ? 'ตรวจสอบใบรับรอง (Coursera)' : 'Verify Certificate (Coursera)'}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <span>{t.visitProjectBtn}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 font-medium ml-auto"
                    >
                      <span>{isTh ? 'ดูโค้ดบน GitHub' : 'GitHub'}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCertificateModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in"
            onClick={() => {
              sound.playClick(900);
              setActiveCertificateModal(false);
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
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/90 bg-slate-50">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {isTh ? 'ใบรับรองวิชาฟิสิกส์ทั่วไป (BITS Pilani via Coursera)' : 'General Physics Certification (BITS Pilani via Coursera)'}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Credential ID: 5JFGCCY2U9MI • BITS Pilani
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playClick(900);
                    setActiveCertificateModal(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                  title={isTh ? "ปิด" : "Close"}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100/60 flex items-center justify-center">
                <img
                  src="/certificate_preview.png"
                  alt="Coursera Certificate - Wipaporn Wikornmetkul"
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-md border border-slate-200"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200/90 bg-white">
                <div className="text-xs text-slate-500">
                  {isTh ? 'ออกโดย Birla Institute of Technology & Science, Pilani ผ่าน Coursera' : 'Issued by BITS Pilani & Coursera'}
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      sound.playClick(900);
                      setActiveCertificateModal(false);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    {isTh ? 'ปิดหน้าต่าง' : 'Close'}
                  </button>
                  <a
                    href="https://coursera.org/verify/5JFGCCY2U9MI"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all"
                  >
                    <Award size={14} />
                    <span>{isTh ? 'ตรวจสอบสิทธิ์บน Coursera' : 'Verify on Coursera'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
