import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { WindowId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface ContactSectionProps {
  onOpenWindow?: (id: WindowId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWindow }) => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    sound.playChime();
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full font-mono text-xs uppercase tracking-wider">
          <Mail size={14} className="text-blue-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Main Clean Light Connect Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6">
        {/* Email Copy Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-mono text-sm text-slate-800 flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <Mail size={16} className="text-blue-600" />
            <span className="font-semibold">{personalInfo.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-2 transition-all shadow-xs"
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>{t.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>{t.copyBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center justify-center space-x-2 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-900 transition-colors text-xs font-semibold"
          >
            <Github size={16} />
            <span>{t.githubBtn}</span>
            <ExternalLink size={12} className="text-slate-400" />
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center justify-center space-x-2 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-900 transition-colors text-xs font-semibold"
          >
            <Linkedin size={16} className="text-blue-600" />
            <span>{t.linkedinBtn}</span>
            <ExternalLink size={12} className="text-slate-400" />
          </a>

          {/* Download CV / Open Resume */}
          <button
            onClick={() => {
              sound.playWindowOpen();
              if (onOpenWindow) onOpenWindow('resume');
            }}
            className="flex items-center justify-center space-x-2 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-900 transition-colors text-xs font-semibold"
          >
            <FileText size={16} className="text-emerald-600" />
            <span>{t.downloadCvBtn}</span>
          </button>
        </div>

        {/* Status Indicator */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-xs text-slate-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t.footerStatus}</span>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="text-xs text-slate-400 space-y-1">
        <p>© 2026 Wipaporn Wikornmetkul. Prince of Songkla University, Phuket Campus.</p>
        <p>{t.footerTech}</p>
      </footer>
    </section>
  );
};
