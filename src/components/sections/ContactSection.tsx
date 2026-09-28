import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';
import { WindowId } from '../../types';

interface ContactSectionProps {
  onOpenWindow?: (id: WindowId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    sound.playChime();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleHireMe = () => {
    fireConfetti();
    sound.playChime();
  };

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_6px_#FB7185]" />
          <span>Initiate Transmission</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let’s Build Something Exceptional
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Open to software engineering opportunities, healthtech systems, or high-impact technical initiatives.
        </p>
      </div>

      {/* Main Connect Card */}
      <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#11131c] to-[#0a0c12] p-6 sm:p-10 shadow-2xl space-y-6">
        {/* Email Copy Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] font-mono text-sm text-slate-200 flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <Mail size={16} className="text-cyan-400" />
            <span>{personalInfo.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social and Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white text-xs font-mono flex items-center space-x-2 transition-colors"
          >
            <Github size={15} />
            <span>GitHub Profile</span>
            <ExternalLink size={12} className="text-slate-500" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white text-xs font-mono flex items-center space-x-2 transition-colors"
          >
            <Linkedin size={15} />
            <span>LinkedIn Network</span>
            <ExternalLink size={12} className="text-slate-500" />
          </a>

          <button
            onClick={handleHireMe}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border border-purple-500/40 text-purple-200 text-xs font-mono flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span>Celebrate & Hire Protocol 🎉</span>
          </button>
        </div>
      </div>

      {/* Footer System Info */}
      <footer className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pb-20">
        <div>
          © {new Date().getFullYear()} {personalInfo.name}. All systems operational.
        </div>
        <div className="flex items-center space-x-4">
          <span>React 18</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Framer Motion</span>
        </div>
      </footer>
    </section>
  );
};
