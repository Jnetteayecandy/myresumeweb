import React from 'react';
import { Printer, Mail, Github, MapPin, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo, flagshipProject, skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const ResumeWindow: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].resumeWindow;

  const handlePrint = () => {
    sound.playClick(1000);
    window.print();
  };

  const experienceItems = t.experienceList;

  return (
    <div className="space-y-6 text-slate-800 font-sans">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 print:hidden">
        <div className="flex items-center space-x-2 text-xs text-slate-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{t.subBadge}</span>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
        >
          <Printer size={14} />
          <span>{t.printBtn}</span>
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/profile.png" 
                alt={t.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-slate-200 bg-slate-50"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t.name}
                </h1>
                <p className="text-blue-700 font-semibold text-sm mt-0.5">
                  {t.subTitle}
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Prince of Songkla University, Phuket Campus
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail size={13} className="text-blue-600" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-blue-600" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github size={13} className="text-blue-600" />
                <span>github.com/wipaporn</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
            {t.bio}
          </p>
        </div>

        {/* Education (Prominently Placed for HR) */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
            <GraduationCap size={15} />
            {t.educationTitle}
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-bold text-slate-900 text-sm">{t.degree}</div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">{t.degreeLocation}</div>
              <div className="text-xs text-slate-500 mt-1">{t.degreeFocus}</div>
            </div>
            <div className="text-xs font-mono text-blue-700 font-semibold self-start sm:self-auto">
              2022 - Present
            </div>
          </div>
        </div>

        {/* Highlighted Flagship Project: PIL */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
            <Sparkles size={15} />
            {t.caseStudyTitle}
          </h2>
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {flagshipProject.title} — {t.flagshipSubtitle}
                </h3>
                <p className="text-xs text-blue-800 font-semibold mt-0.5">
                  {t.partnerLabel} • Stack: React, Flask (Python), MySQL, QR Code Engine
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {t.flagshipDesc}
            </p>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
              {flagshipProject.highlights?.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience & Practical Works */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
            <Briefcase size={15} />
            {t.experienceTitle}
          </h2>

          <div className="space-y-4">
            {experienceItems.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-slate-300 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-blue-700">
                  {exp.company} • {exp.location}
                </div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 mt-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
            <Award size={15} />
            {t.skillsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 mb-1">{cat.category}</div>
                <div className="text-slate-600 leading-relaxed font-mono text-[11px]">
                  {cat.skills.map(s => s.name).join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
