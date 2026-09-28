import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Command, Globe, Briefcase } from 'lucide-react';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface SystemBarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
  openWindowsCount: number;
}

export const SystemBar: React.FC<SystemBarProps> = ({
  onOpenTerminal,
  onOpenCommandPalette,
  openWindowsCount
}) => {
  const { lang, setLang, toggleLang } = useLanguage();
  const t = translations[lang].systemBar;
  const [time, setTime] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString(lang === 'th' ? 'th-TH' : 'en-US', {
        timeZone: 'Asia/Bangkok',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-12 border-b border-slate-200/90 bg-white/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between text-xs select-none shadow-xs">
      {/* Left: Branding & Status */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
          <span className="font-bold text-slate-900 tracking-wide text-sm">{t.branding}</span>
          <span className="text-slate-300 hidden md:inline">•</span>
          <span className="text-blue-700 font-medium hidden md:inline px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-[11px]">
            {t.role}
          </span>
        </div>

        {openWindowsCount > 0 && (
          <div className="hidden lg:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            <span>
              {openWindowsCount} {openWindowsCount > 1 ? t.activeWindowsPlural : t.activeWindows}
            </span>
          </div>
        )}
      </div>

      {/* Center: Bangkok Realtime Clock & Diagnostic Pill */}
      <div className="flex items-center space-x-2 bg-slate-100/90 border border-slate-200 px-3 py-1 rounded-full text-slate-700 shadow-inner font-mono text-[11px]">
        <span className="text-blue-700 font-semibold">BKK</span>
        <span className="text-slate-300">|</span>
        <span className="font-semibold text-slate-800">{time || '15:30:00'}</span>
        <span className="text-[10px] text-emerald-700 font-sans hidden sm:inline px-1 bg-emerald-100 rounded font-medium">● {t.live}</span>
      </div>

      {/* Right: Quick Tools, Language Switcher & Sound */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Language Switcher Pill */}
        <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
          <button
            onClick={() => {
              if (lang !== 'en') {
                sound.playClick(950, 0.02);
                setLang('en');
              }
            }}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all ${
              lang === 'en'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Switch to English"
          >
            EN
          </button>
          <span className="text-slate-300 text-[10px] px-0.5">/</span>
          <button
            onClick={() => {
              if (lang !== 'th') {
                sound.playClick(950, 0.02);
                setLang('th');
              }
            }}
            className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-all ${
              lang === 'th'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="สลับเป็นภาษาไทย"
          >
            TH
          </button>
        </div>

        {/* Terminal quick launcher */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenTerminal();
          }}
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all font-mono text-[11px]"
          title="Open Developer Shell"
        >
          <Terminal size={12} className="text-blue-600" />
          <span className="hidden sm:inline">&gt;_ {t.shell}</span>
        </button>

        {/* Command Palette Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenCommandPalette();
          }}
          className="flex items-center space-x-1 px-2 py-1 rounded-md text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all font-mono text-[11px]"
          title="Open Command Menu (⌘K)"
        >
          <Command size={11} />
          <span className="hidden sm:inline">K</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={handleToggleSound}
          className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          title={soundEnabled ? t.soundMute : t.soundUnmute}
        >
          {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} className="text-slate-400" />}
        </button>
      </div>
    </header>
  );
};

