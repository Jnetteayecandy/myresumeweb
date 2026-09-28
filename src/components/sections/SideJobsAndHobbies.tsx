import React from 'react';
import { Camera, Flame, Waves, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { sideJobsAndHobbies } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const SideJobsAndHobbies: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].sideJobs;
  const isTh = lang === 'th';
  const { featuredJob, hobbies } = sideJobsAndHobbies;

  return (
    <section id="hobbies-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-orange-700 bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
          <Flame size={14} className="text-orange-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Fire Show Performer (Featured Main Card - Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200/70">
                <Flame size={13} className="text-orange-600" />
                {isTh ? featuredJob.categoryTh : featuredJob.category}
              </span>
              <span className="text-xs font-mono text-slate-500">Phuket & Festivals</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {isTh ? featuredJob.titleTh : featuredJob.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {isTh ? featuredJob.descriptionTh : featuredJob.description}
            </p>

            {/* Skills & Badges */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.skillsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {(isTh ? featuredJob.skillsTh : featuredJob.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    <CheckCircle2 size={12} className="text-orange-600 mr-1.5" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs text-slate-500 font-medium">
                {isTh ? 'จุดเน้นหลัก' : 'Core Discipline'}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">
                {isTh ? 'วินัยเวที & ความปลอดภัย 100%' : 'Stage Awareness & Safety'}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs text-slate-500 font-medium">
                {isTh ? 'สภาวะการทำงาน' : 'Key Strength'}
              </div>
              <div className="text-sm font-bold text-emerald-700 mt-0.5">
                {isTh ? 'สมาธิสูง & แก้ปัญหาเฉพาะหน้า' : 'Composure Under Pressure'}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Freelance Photography, Water Sports & Travel (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="px-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-blue-600" />
              {t.hobbiesTitle}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {t.hobbiesSubtitle}
            </p>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
            {hobbies.map((hobby) => {
              const getIcon = () => {
                if (hobby.id === 'photography') return <Camera size={18} className="text-indigo-600" />;
                if (hobby.id === 'water-sports') return <Waves size={18} className="text-cyan-600" />;
                return <Compass size={18} className="text-blue-600" />;
              };

              return (
                <div
                  key={hobby.id}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                      {getIcon()}
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-sm font-bold text-slate-900">
                          {isTh ? hobby.titleTh : hobby.title}
                        </h5>
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {isTh ? hobby.tagTh : hobby.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {isTh ? hobby.descriptionTh : hobby.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
