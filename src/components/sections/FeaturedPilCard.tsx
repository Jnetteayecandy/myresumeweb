import React from 'react';
import { 
  Pill, 
  ShieldCheck, 
  ArrowUpRight, 
  Users, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { flagshipProject } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

interface FeaturedPilCardProps {
  onOpenPilWindow: () => void;
}

export const FeaturedPilCard: React.FC<FeaturedPilCardProps> = ({ onOpenPilWindow }) => {
  return (
    <section id="pil-section" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F0FF]" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Flagship Engineering: PIL Management Systems
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Co-engineered with clinical pharmacists to modernize patient medication safety in Thailand.
          </p>
        </div>

        <button
          onClick={() => {
            sound.playWindowOpen();
            onOpenPilWindow();
          }}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/30 text-cyan-300 hover:text-white font-mono text-xs transition-all shadow-[0_0_20px_rgba(0,240,255,0.1)] self-start sm:self-auto"
        >
          <span>Open Full Interactive OS Window</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Main Spotlight Card */}
      <div className="relative rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0f121a] to-[#0a0c12] p-6 sm:p-10 overflow-hidden shadow-2xl group">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 group-hover:bg-cyan-500/20 transition-all duration-700" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center gap-1.5">
                <Pill size={13} />
                Healthcare Technology
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck size={13} />
                Certified Pharmacist Co-Design
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {flagshipProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {flagshipProject.description}
              </p>
            </div>

            {/* Pharmacist Quote */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-sans text-slate-300 italic flex items-start space-x-3">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                <Users size={16} />
              </div>
              <div>
                <span className="font-semibold text-cyan-300 not-italic block mb-0.5">Collaboration with Clinical Pharmacists:</span>
                "{flagshipProject.collaboration}"
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {flagshipProject.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  sound.playWindowOpen();
                  onOpenPilWindow();
                }}
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <span>Launch Interactive Demo & Architecture</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right: Interactive Blueprint / Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.1] bg-[#141722] p-5 shadow-2xl space-y-4">
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Zap size={13} />
                  System Metrics & Architecture
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">
                  PASSED AUDIT
                </span>
              </div>

              {/* Metrics stack */}
              <div className="grid grid-cols-2 gap-2.5">
                {flagshipProject.metrics?.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                    <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                    <div className="text-base font-bold text-cyan-400 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Mini Pipeline Preview */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Engineered Workflow
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center space-x-2 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Domain-Driven Medication Schema</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Multi-Party Pharmacist Cryptographic Sign-Off</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Instant Pill-Packet QR Code Generation</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span>WCAG AAA Accessible Patient Reader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
