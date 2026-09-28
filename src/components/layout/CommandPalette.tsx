import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal, 
  Pill, 
  FileText, 
  Sparkles, 
  Copy, 
  ExternalLink,
  Cpu,
  FolderKanban,
  Check,
  Globe,
  Camera
} from 'lucide-react';
import { WindowId } from '../../types';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (id: WindowId) => void;
  onScrollTo: (elementId: string) => void;
}

interface CommandAction {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  run: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenWindow,
  onScrollTo
}) => {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].commandPalette;
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const actions: CommandAction[] = [
    {
      id: 'toggle-lang',
      category: t.categories.language,
      title: t.actions.toggleLangTitle,
      subtitle: t.actions.toggleLangSub,
      icon: <Globe size={16} className="text-blue-600" />,
      run: () => {
        sound.playClick(900, 0.03);
        toggleLang();
        onClose();
      }
    },
    {
      id: 'open-pil',
      category: t.categories.windows,
      title: t.actions.openPilTitle,
      subtitle: t.actions.openPilSub,
      icon: <Pill size={16} className="text-blue-600" />,
      run: () => {
        onOpenWindow('pil');
        onClose();
      }
    },
    {
      id: 'scroll-story',
      category: t.categories.navigation,
      title: t.actions.scrollStoryTitle,
      subtitle: t.actions.scrollStorySub,
      icon: <Sparkles size={16} className="text-blue-600" />,
      run: () => {
        onScrollTo('story-showcase');
        onClose();
      }
    },
    {
      id: 'open-terminal',
      category: t.categories.windows,
      title: t.actions.openTerminalTitle,
      subtitle: t.actions.openTerminalSub,
      icon: <Terminal size={16} className="text-slate-700" />,
      run: () => {
        onOpenWindow('terminal');
        onClose();
      }
    },
    {
      id: 'open-resume',
      category: t.categories.windows,
      title: t.actions.openResumeTitle,
      subtitle: t.actions.openResumeSub,
      icon: <FileText size={16} className="text-blue-700" />,
      run: () => {
        onOpenWindow('resume');
        onClose();
      }
    },
    {
      id: 'scroll-bento',
      category: t.categories.navigation,
      title: t.actions.scrollBentoTitle,
      subtitle: t.actions.scrollBentoSub,
      icon: <FolderKanban size={16} className="text-indigo-600" />,
      run: () => {
        onScrollTo('projects-section');
        onClose();
      }
    },
    {
      id: 'scroll-skills',
      category: t.categories.navigation,
      title: t.actions.scrollSkillsTitle,
      subtitle: t.actions.scrollSkillsSub,
      icon: <Cpu size={16} className="text-emerald-600" />,
      run: () => {
        onScrollTo('skills-section');
        onClose();
      }
    },
    {
      id: 'scroll-hobbies',
      category: t.categories.navigation,
      title: t.actions.scrollHobbiesTitle,
      subtitle: t.actions.scrollHobbiesSub,
      icon: <Camera size={16} className="text-amber-600" />,
      run: () => {
        onScrollTo('hobbies-section');
        onClose();
      }
    },
    {
      id: 'copy-email',
      category: t.categories.contact,
      title: t.actions.copyEmailTitle,
      subtitle: personalInfo.email,
      icon: copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} className="text-slate-500" />,
      run: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        sound.playChime();
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'open-github',
      category: t.categories.links,
      title: t.actions.githubTitle,
      subtitle: personalInfo.github,
      icon: <ExternalLink size={16} className="text-slate-500" />,
      run: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    }
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl rounded-2xl bg-white border border-slate-300 shadow-2xl overflow-hidden font-sans"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200">
              <Search size={18} className="text-slate-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder={t.placeholder}
                value={query}
                onChange={(e) => {
                  sound.playKey();
                  setQuery(e.target.value);
                }}
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded">
                {t.escToClose}
              </kbd>
            </div>

            {/* Action List */}
            <div className="max-h-80 overflow-y-auto py-2 px-2 divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500 font-mono">
                  {t.noResults} "{query}"
                </div>
              ) : (
                filtered.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => {
                      sound.playClick();
                      action.run();
                    }}
                    className="w-full flex items-center px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 mr-3 group-hover:bg-slate-100 transition-colors">
                      {action.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                          {action.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {action.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {action.subtitle}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{t.footerNav}</span>
              <span>{t.footerKeys}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

