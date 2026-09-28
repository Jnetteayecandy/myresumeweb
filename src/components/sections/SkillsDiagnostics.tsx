import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const SkillsDiagnostics: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const currentCategory = skillCategories[activeCategoryIdx];

  return (
    <section id="skills-section" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
          <span>System Capability & Architecture Diagnostics</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Competencies & Skills
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Engineered for production resilience, domain complexity, and lightning-fast user interactions.
        </p>
      </div>

      {/* Diagnostics Panel Container */}
      <div className="rounded-3xl border border-white/[0.08] bg-[#0d1017]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-white/[0.06] font-mono text-xs">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick(950);
                setActiveCategoryIdx(idx);
              }}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeCategoryIdx === idx
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              <Cpu size={14} />
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skill Bars with Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white font-mono flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400" />
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-400 rounded-full shadow-[0_0_8px_#10B981]"
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Telemetry Summary Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/[0.04] text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Telemetry Status: Code Quality & Test Coverage &gt; 95%</span>
          </div>
          <span className="text-slate-500">Continuous Integration • Type-Safe TypeScript</span>
        </div>
      </div>
    </section>
  );
};
