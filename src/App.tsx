import React, { useState, useEffect } from 'react';
import { WindowId, WindowState } from './types';
import { SystemBar } from './components/layout/SystemBar';
import { Dock } from './components/layout/Dock';
import { CommandPalette } from './components/layout/CommandPalette';
import { WindowFrame } from './components/windows/WindowFrame';
import { PilCaseStudyWindow } from './components/windows/PilCaseStudyWindow';
import { TerminalWindow } from './components/windows/TerminalWindow';
import { ResumeWindow } from './components/windows/ResumeWindow';
import { HeroSection } from './components/sections/HeroSection';
import { ScrollStoryShowcase } from './components/sections/ScrollStoryShowcase';
import { FeaturedPilCard } from './components/sections/FeaturedPilCard';
import { BentoProjects } from './components/sections/BentoProjects';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { SkillsDiagnostics } from './components/sections/SkillsDiagnostics';
import { SideJobsAndHobbies } from './components/sections/SideJobsAndHobbies';
import { ContactSection } from './components/sections/ContactSection';
import { sound } from './utils/sound';
import { useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

export const App: React.FC = () => {
  const { lang } = useLanguage();
  const wt = translations[lang].windowTitles;

  // Window states
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    pil: { id: 'pil', title: 'PIL Management System Explorer', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 50 },
    terminal: { id: 'terminal', title: 'bash - wipaporn@mac: ~', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 50 },
    resume: { id: 'resume', title: 'Curriculum Vitae Previewer', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 50 },
    contact: { id: 'contact', title: 'Contact Transmitter', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 50 },
    skills: { id: 'skills', title: 'Skills Telemetry', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 50 }
  });

  const [topZIndex, setTopZIndex] = useState(50);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Bring clicked window to top
  const focusWindow = (id: WindowId) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZ }
    }));
  };

  const openWindow = (id: WindowId) => {
    sound.playWindowOpen();
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, zIndex: nextZ }
    }));
  };

  const closeWindow = (id: WindowId) => {
    sound.playWindowClose();
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
  };

  const toggleWindow = (id: WindowId) => {
    if (windows[id].isOpen) {
      closeWindow(id);
    } else {
      openWindow(id);
    }
  };

  // Keyboard shortcut listener (Cmd+K, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen]);

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWindowsCount = Object.values(windows).filter((w) => w.isOpen).length;

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#F8FAFC] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-800">
      {/* Top System Bar */}
      <SystemBar
        onOpenTerminal={() => openWindow('terminal')}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        openWindowsCount={openWindowsCount}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 pb-24">
        <HeroSection
          onOpenWindow={openWindow}
          onScrollTo={scrollToSection}
        />

        <div id="story-showcase">
          <ScrollStoryShowcase onOpenWindow={openWindow} />
        </div>

        <FeaturedPilCard
          onOpenPilWindow={() => openWindow('pil')}
        />

        <BentoProjects
          onOpenWindow={openWindow}
        />

        <CertificatesSection />

        <SkillsDiagnostics />

        <SideJobsAndHobbies />

        <ContactSection
          onOpenWindow={openWindow}
        />
      </main>

      {/* Floating OS Bottom Dock */}
      <Dock
        onToggleWindow={toggleWindow}
        openWindows={{
          pil: windows.pil.isOpen,
          terminal: windows.terminal.isOpen,
          resume: windows.resume.isOpen,
          contact: false,
          skills: false
        }}
        onScrollTo={scrollToSection}
      />

      {/* Cmd+K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenWindow={openWindow}
        onScrollTo={scrollToSection}
      />

      {/* OS Windows */}
      {/* 1. PIL Management System Window */}
      <WindowFrame
        id="pil"
        title={wt.pil.title}
        subtitle={wt.pil.subtitle}
        isOpen={windows.pil.isOpen}
        onClose={() => closeWindow('pil')}
        zIndex={windows.pil.zIndex}
        onFocus={() => focusWindow('pil')}
        defaultWidth="max-w-5xl"
      >
        <PilCaseStudyWindow />
      </WindowFrame>

      {/* 2. Interactive Terminal Window */}
      <WindowFrame
        id="terminal"
        title={wt.terminal.title}
        subtitle={wt.terminal.subtitle}
        isOpen={windows.terminal.isOpen}
        onClose={() => closeWindow('terminal')}
        zIndex={windows.terminal.zIndex}
        onFocus={() => focusWindow('terminal')}
        defaultWidth="max-w-3xl"
        defaultHeight="max-h-[70vh]"
      >
        <TerminalWindow onOpenWindow={openWindow} />
      </WindowFrame>

      {/* 3. Interactive Resume Window */}
      <WindowFrame
        id="resume"
        title={wt.resume.title}
        subtitle={wt.resume.subtitle}
        isOpen={windows.resume.isOpen}
        onClose={() => closeWindow('resume')}
        zIndex={windows.resume.zIndex}
        onFocus={() => focusWindow('resume')}
        defaultWidth="max-w-4xl"
      >
        <ResumeWindow />
      </WindowFrame>
    </div>
  );
};

export default App;

