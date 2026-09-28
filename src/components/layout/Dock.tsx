import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  Terminal, 
  FileText, 
  Cpu, 
  Mail, 
  Pill,
  ArrowUp
} from 'lucide-react';
import { WindowId } from '../../types';
import { sound } from '../../utils/sound';

interface DockProps {
  onToggleWindow: (id: WindowId) => void;
  openWindows: Record<WindowId, boolean>;
  onScrollTo: (elementId: string) => void;
}

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  isOpen?: boolean;
  isBadge?: boolean;
}

export const Dock: React.FC<DockProps> = ({
  onToggleWindow,
  openWindows,
  onScrollTo
}) => {
  const items: DockItem[] = [
    {
      id: 'home',
      label: 'Back to Top',
      icon: <ArrowUp size={18} />,
      action: () => {
        sound.playClick(900);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'pil',
      label: 'PIL Case Study (Flagship)',
      icon: <Pill size={18} className="text-cyan-400" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('pil');
      },
      isOpen: openWindows.pil,
      isBadge: true
    },
    {
      id: 'projects',
      label: 'Bento Projects',
      icon: <FolderKanban size={18} className="text-purple-400" />,
      action: () => {
        sound.playClick(850);
        onScrollTo('projects-section');
      }
    },
    {
      id: 'skills',
      label: 'Skills Diagnostics',
      icon: <Cpu size={18} className="text-emerald-400" />,
      action: () => {
        sound.playClick(850);
        onScrollTo('skills-section');
      }
    },
    {
      id: 'terminal',
      label: 'Interactive Shell (>_)',
      icon: <Terminal size={18} className="text-amber-400" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('terminal');
      },
      isOpen: openWindows.terminal
    },
    {
      id: 'resume',
      label: 'Resume Document',
      icon: <FileText size={18} className="text-blue-400" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('resume');
      },
      isOpen: openWindows.resume
    },
    {
      id: 'contact',
      label: 'Connect & Contact',
      icon: <Mail size={18} className="text-rose-400" />,
      action: () => {
        sound.playClick(750);
        onScrollTo('contact-section');
      }
    }
  ];

  return (
    <div className="fixed bottom-5 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-2xl bg-[#0e1017]/85 backdrop-blur-2xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      >
        {items.map((item) => (
          <div key={item.id} className="relative group">
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/95 border border-white/10 text-[11px] font-sans text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 shadow-xl">
              {item.label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95" />
            </div>

            {/* Icon Button */}
            <motion.button
              whileHover={{ scale: 1.18, y: -4 }}
              whileTap={{ scale: 0.92 }}
              onClick={item.action}
              className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-colors ${
                item.isOpen 
                  ? 'bg-white/[0.14] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.05]'
              }`}
            >
              {item.icon}

              {/* Active / Open Window Dot indicator */}
              {item.isOpen && (
                <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F0FF]" />
              )}

              {/* Featured Badge Glow */}
              {item.isBadge && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              )}
            </motion.button>
          </div>
        ))}
      </motion.nav>
    </div>
  );
};
