import React from 'react';
import { Printer, Mail, Github, MapPin, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo, flagshipProject, experienceData, skillCategories } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const ResumeWindow: React.FC = () => {
  const handlePrint = () => {
    sound.playClick(1000);
    window.print();
  };

  return (
    <div className="space-y-6 text-slate-200">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] print:hidden">
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Curriculum Vitae • Standard Recruiter Layout</span>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-lg shadow-cyan-500/20"
        >
          <Printer size={14} />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1119] border border-white/[0.1] shadow-2xl space-y-6 font-sans print:bg-white print:text-black print:p-0 print:border-none">
        {/* Header */}
        <div className="border-b border-white/[0.1] pb-6 print:border-black">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/profile.png" 
                alt={personalInfo.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-white/20 bg-white/5 print:border-black"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-400 font-mono text-sm font-medium mt-1 print:text-blue-700">
                  {personalInfo.title} • Web Systems & Healthcare Tech
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-300 print:text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-cyan-400 print:text-black" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-cyan-400 print:text-black" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github size={12} className="text-cyan-400 print:text-black" />
                <span>github.com/wipaporn</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 mt-4 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Highlighted Flagship Project */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-blue-800 flex items-center gap-1.5">
            <Sparkles size={14} />
            Featured Software Engineering Case Study
          </h2>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-cyan-500/20 print:border-slate-300 print:p-2 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-white print:text-black text-sm">
                  {flagshipProject.title} — {flagshipProject.subtitle}
                </h3>
                <p className="text-xs text-slate-400 print:text-slate-600 font-mono mt-0.5">
                  Partner: Clinical Pharmacists | Tech: {flagshipProject.tags.join(', ')}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              {flagshipProject.description}
            </p>
            <ul className="text-xs text-slate-300 print:text-slate-800 space-y-1 list-disc pl-4">
              {flagshipProject.highlights?.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-blue-800 flex items-center gap-1.5">
            <Briefcase size={14} />
            Experience
          </h2>

          <div className="space-y-4">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-white/[0.1] pl-4 print:border-slate-400">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white print:text-black text-sm">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                </div>
                <div className="text-xs font-medium text-cyan-300 print:text-blue-700">
                  {exp.company} • {exp.location}
                </div>
                <ul className="text-xs text-slate-300 print:text-slate-800 space-y-1 list-disc pl-4 mt-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-blue-800 flex items-center gap-1.5">
            <Award size={14} />
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white/[0.02] p-3 rounded-lg border border-white/[0.05] print:border-slate-200">
                <div className="font-bold text-slate-200 print:text-black mb-1">{cat.category}</div>
                <div className="text-slate-400 print:text-slate-700 leading-relaxed">
                  {cat.skills.map(s => s.name).join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2 border-t border-white/[0.1] pt-4 print:border-black">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-blue-800 flex items-center gap-1.5">
            <GraduationCap size={14} />
            Education
          </h2>
          <div className="flex justify-between text-xs">
            <div>
              <div className="font-bold text-white print:text-black">Bachelor of Science in Computer Science / Software Engineering</div>
              <div className="text-slate-400 print:text-slate-600">Focus on Distributed Systems, Web Technologies & Human-Computer Interaction</div>
            </div>
            <div className="font-mono text-slate-400 print:text-slate-600 text-right">
              Bangkok, Thailand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
