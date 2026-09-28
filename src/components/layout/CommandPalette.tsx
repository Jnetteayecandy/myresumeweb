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
  Check
} from 'lucide-react';
import { WindowId } from '../../types';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';

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
      id: 'open-pil',
      category: 'Windows & Features',
      title: 'Inspect PIL Management System',
      subtitle: 'Open the flagship healthcare case study window',
      icon: <Pill size={16} className="text-cyan-400" />,
      run: () => {
        onOpenWindow('pil');
        onClose();
      }
    },
    {
      id: 'scroll-story',
      category: 'Navigation',
      title: '3D Scroll Story Showcase',
      subtitle: 'Experience the 3D rotation & timeline storytelling stage',
      icon: <Sparkles size={16} className="text-rose-400" />,
      run: () => {
        onScrollTo('story-showcase');
        onClose();
      }
    },
    {
      id: 'open-terminal',
      category: 'Windows & Features',
      title: 'Launch Interactive Terminal',
      subtitle: 'Execute shell commands, inspect system diagnostics',
      icon: <Terminal size={16} className="text-amber-400" />,
      run: () => {
        onOpenWindow('terminal');
        onClose();
      }
    },
    {
      id: 'open-resume',
      category: 'Windows & Features',
      title: 'Open Interactive Resume Viewer',
      subtitle: 'Recruiter-friendly printable overview with experience & skills',
      icon: <FileText size={16} className="text-blue-400" />,
      run: () => {
        onOpenWindow('resume');
        onClose();
      }
    },
    {
      id: 'scroll-bento',
      category: 'Navigation',
      title: 'Jump to Bento Projects Grid',
      subtitle: 'Browse all distributed systems & engineering works',
      icon: <FolderKanban size={16} className="text-purple-400" />,
      run: () => {
        onScrollTo('projects-section');
        onClose();
      }
    },
    {
      id: 'scroll-skills',
      category: 'Navigation',
      title: 'Jump to Skills Diagnostics',
      subtitle: 'Inspect proficiency levels across full-stack & DevOps',
      icon: <Cpu size={16} className="text-emerald-400" />,
      run: () => {
        onScrollTo('skills-section');
        onClose();
      }
    },
    {
      id: 'copy-email',
      category: 'Direct Communication',
      title: 'Copy Email Address',
      subtitle: personalInfo.email,
      icon: copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-slate-400" />,
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
      id: 'fire-celebrate',
      category: 'Easter Egg',
      title: 'Trigger Offer Celebration Protocol',
      subtitle: 'Drop celebratory confetti on screen!',
      icon: <Sparkles size={16} className="text-yellow-400" />,
      run: () => {
        fireConfetti();
        sound.playChime();
        onClose();
      }
    },
    {
      id: 'open-github',
      category: 'External Links',
      title: 'Open GitHub Profile',
      subtitle: personalInfo.github,
      icon: <ExternalLink size={16} className="text-slate-400" />,
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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl rounded-2xl bg-[#0e1017] border border-white/[0.12] shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 py-3.5 border-b border-white/[0.08]">
              <Search size={18} className="text-slate-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search action..."
                value={query}
                onChange={(e) => {
                  sound.playKey();
                  setQuery(e.target.value);
                }}
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/[0.06] border border-white/[0.1] rounded">
                ESC to close
              </kbd>
            </div>

            {/* Action List */}
            <div className="max-h-80 overflow-y-auto py-2 px-2 divide-y divide-white/[0.03]">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500 font-mono">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filtered.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => {
                      sound.playClick();
                      action.run();
                    }}
                    className="w-full flex items-center px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] mr-3 group-hover:bg-white/[0.08] transition-colors">
                      {action.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                          {action.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {action.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">
                        {action.subtitle}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Quick Navigation Mode</span>
              <span>↑↓ to navigate • ↵ to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
