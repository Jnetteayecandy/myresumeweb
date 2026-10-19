import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  Terminal, 
  FileText, 
  Cpu, 
  Mail, 
  Pill,
  ArrowUp,
  Flame
} from 'lucide-react';
import { WindowId } from '../../types';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

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
  const { lang } = useLanguage();
  const t = translations[lang].dock;

  const items: DockItem[] = [
    {
      id: 'home',
      label: t.top,
      icon: <ArrowUp size={18} className="text-slate-600" />,
      action: () => {
        sound.playClick(900);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'projects',
      label: t.projects,
      icon: <FolderKanban size={18} className="text-indigo-600" />,
      action: () => {
        sound.playClick(950);
        onScrollTo('projects-section');
      }
    },
    {
      id: 'pil',
      label: t.pil,
      icon: <Pill size={18} className="text-blue-600" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('pil');
      },
      isOpen: openWindows.pil,
      isBadge: true
    },
    {
      id: 'skills',
      label: t.skills,
      icon: <Cpu size={18} className="text-emerald-600" />,
      action: () => {
        sound.playClick(1000);
        onScrollTo('skills-section');
      }
    },
    {
      id: 'hobbies',
      label: t.hobbies,
      icon: <Flame size={18} className="text-orange-500" />,
      action: () => {
        sound.playClick(1050);
        onScrollTo('hobbies-section');
      }
    },
    {
      id: 'terminal',
      label: t.terminal,
      icon: <Terminal size={18} className="text-slate-700" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('terminal');
      },
      isOpen: openWindows.terminal,
      isBadge: true
    },
    {
      id: 'resume',
      label: t.resume,
      icon: <FileText size={18} className="text-blue-700" />,
      action: () => {
        sound.playWindowOpen();
        onToggleWindow('resume');
      },
      isOpen: openWindows.resume,
      isBadge: true
    },
    {
      id: 'contact',
      label: t.contact,
      icon: <Mail size={18} className="text-rose-600" />,
      action: () => {
        sound.playClick(1100);
        onScrollTo('contact-section');
      }
    }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 select-none">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        className="flex items-center space-x-1 sm:space-x-2 px-3 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-lg text-slate-700"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative group"
          >
            <button
              onClick={item.action}
              className="relative p-2.5 sm:p-3 rounded-xl hover:bg-slate-100/90 transition-colors flex items-center justify-center focus:outline-none"
            >
              {item.icon}

              {/* Active Window Indicator Dot */}
              {item.isOpen && (
                <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-xs" />
              )}
            </button>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
              <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-medium shadow-md whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

