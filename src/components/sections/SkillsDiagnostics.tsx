import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, Code2, Database, Layout, GitBranch } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const SkillsDiagnostics: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const currentCategory = skillCategories[activeCategoryIdx];

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 size={15} />;
      case 1: return <Layout size={15} />;
      case 2: return <Database size={15} />;
      case 3: return <GitBranch size={15} />;
      default: return <Cpu size={15} />;
    }
  };

  return (
    <section id="skills-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
          <Cpu size={14} className="text-blue-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Clean White Panel */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow space-y-6">
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-slate-100 text-xs">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick(950);
                setActiveCategoryIdx(idx);
              }}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 font-medium ${
                activeCategoryIdx === idx
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skill Bars with Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-blue-600 h-2 rounded-full"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Diagnostic Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{t.telemetryStatus}</span>
          </div>
          <div>
            <span>{t.ciText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

