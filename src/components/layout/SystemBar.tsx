import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Command } from 'lucide-react';
import { sound } from '../../utils/sound';

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
  const [time, setTime] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
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
  }, []);

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-11 border-b border-white/[0.06] bg-[#090a0f]/80 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between text-xs font-mono select-none">
      {/* Left: Branding & Status */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse" />
          <span className="font-semibold text-slate-200 tracking-wider hidden sm:inline">WIPAPORN_SYS</span>
          <span className="text-slate-500 hidden md:inline">/</span>
          <span className="text-slate-400 hidden md:inline">SE-PORTFOLIO</span>
        </div>

        {openWindowsCount > 0 && (
          <div className="hidden lg:flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{openWindowsCount} active window{openWindowsCount > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Center: Bangkok Realtime Clock & Diagnostic Pill */}
      <div className="flex items-center space-x-2 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full text-slate-300 shadow-inner">
        <span className="text-cyan-400">BKK</span>
        <span className="text-slate-500">|</span>
        <span className="font-medium text-slate-200">{time || '17:00:00'}</span>
        <span className="text-[10px] text-emerald-400 font-sans hidden sm:inline px-1 bg-emerald-500/10 rounded">● LIVE</span>
      </div>

      {/* Right: Quick Tools & Sound */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Terminal quick launcher */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenTerminal();
          }}
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all"
          title="Open Terminal"
        >
          <Terminal size={13} className="text-cyan-400" />
          <span className="hidden sm:inline">shell</span>
        </button>

        {/* Cmd+K trigger */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenCommandPalette();
          }}
          className="hidden sm:flex items-center space-x-1.5 px-2 py-1 rounded-md bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.08] text-slate-400 hover:text-slate-200 transition-all"
          title="Command Palette (Cmd+K)"
        >
          <Command size={11} />
          <span className="text-[10px]">K</span>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={handleToggleSound}
          className={`p-1.5 rounded-md border transition-all ${
            soundEnabled
              ? 'text-cyan-400 bg-cyan-950/30 border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
              : 'text-slate-500 bg-white/[0.02] border-white/[0.05] hover:text-slate-300'
          }`}
          title={soundEnabled ? 'Mute System Sounds' : 'Unmute System Sounds'}
        >
          {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
        </button>
      </div>
    </header>
  );
};
