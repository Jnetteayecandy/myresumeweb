import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  Gamepad2, 
  Heart, 
  ShieldAlert, 
  ArrowUpRight 
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

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'wedding-card-web':
        return <Heart size={18} className="text-rose-500" />;
      case 'event-b-formal-methods':
        return <ShieldAlert size={18} className="text-indigo-600" />;
      case 'web-mini-games':
        return <Gamepad2 size={18} className="text-emerald-600" />;
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

      {/* Symmetrical 3-Column Grid for the 3 Flagship Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {bentoProjects.map((project, index) => {
          const isGame = project.id === 'web-mini-games';
          const title = isTh && project.titleTh ? project.titleTh : project.title;
          const subtitle = isTh && project.subtitleTh ? project.subtitleTh : project.subtitle;
          const description = isTh && project.descriptionTh ? project.descriptionTh : project.description;
          const highlightsList = isTh && project.highlightsTh ? project.highlightsTh : project.highlights;

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden group col-span-1"
            >
              <div>
                {/* Card Top Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {project.badge || `PROJ-0${index + 1}`}
                    </span>
                  </div>

                  {project.metrics && project.metrics.length > 0 && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {project.metrics[0].value}
                    </span>
                  )}
                </div>

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

                {/* Highlights List */}
                {highlightsList && (
                  <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                    {highlightsList.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
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
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
