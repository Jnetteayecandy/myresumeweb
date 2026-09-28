import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Terminal as TerminalIcon
} from 'lucide-react';
import { bentoProjects } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';

interface BentoProjectsProps {
  onOpenWindow: (id: WindowId) => void;
}

export const BentoProjects: React.FC<BentoProjectsProps> = ({ onOpenWindow }) => {
  return (
    <section id="projects-section" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#8B5CF6]" />
          <span>Distributed Systems & Interactive Applications</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Selected Engineering Works
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          A showcase of high-performance backend microservices, real-time telemetry dashboards, and component architectures.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bentoProjects.map((project, index) => {
          const isLarge = index === 0 || index === 3;
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`rounded-3xl border border-white/[0.08] bg-[#0e111a]/80 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.18] transition-all duration-300 shadow-xl relative overflow-hidden group ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Subtle background spotlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-500" />

              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                    0{index + 1} // SYS-MODULE
                  </span>

                  <div className="flex items-center space-x-2">
                    {project.id === 'terminal-os-portfolio' ? (
                      <button
                        onClick={() => {
                          sound.playWindowOpen();
                          onOpenWindow('terminal');
                        }}
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Open in Terminal"
                      >
                        <TerminalIcon size={15} />
                      </button>
                    ) : null}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mt-4 space-y-1.5 border-t border-white/[0.05] pt-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Metrics & Tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] space-y-3">
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                        <div className="text-[10px] font-mono text-slate-500">{m.label}</div>
                        <div className="text-xs font-bold font-mono text-slate-200 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-400 px-2 py-0.5 bg-white/[0.03] rounded border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
