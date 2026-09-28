import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Square, X } from 'lucide-react';
import { sound } from '../../utils/sound';

interface WindowFrameProps {
  id: string;
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
  children: React.ReactNode;
  defaultWidth?: string;
  defaultHeight?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  id,
  title,
  subtitle,
  isOpen,
  onClose,
  zIndex,
  onFocus,
  children,
  defaultWidth = 'max-w-4xl',
  defaultHeight = 'max-h-[85vh]'
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-2 sm:p-6"
        style={{ zIndex }}
      >
        <motion.div
          drag={!isMaximized}
          dragMomentum={false}
          dragElastic={0.05}
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onPointerDown={onFocus}
          className={`pointer-events-auto flex flex-col rounded-2xl bg-[#0c0e15]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-200 ${
            isMaximized 
              ? 'w-[98vw] h-[94vh] max-w-none max-h-none' 
              : `w-full ${defaultWidth} ${defaultHeight} h-[85vh]`
          }`}
        >
          {/* Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02] cursor-grab active:cursor-grabbing select-none shrink-0">
            {/* Traffic light buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  sound.playWindowClose();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-rose-500/90 hover:bg-rose-600 flex items-center justify-center group transition-colors shadow-sm"
                title="Close"
              >
                <X size={8} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => {
                  sound.playClick(600);
                  onClose(); // Minimize functions as hide
                }}
                className="w-3 h-3 rounded-full bg-amber-500/90 hover:bg-amber-600 flex items-center justify-center group transition-colors shadow-sm"
                title="Minimize to Dock"
              >
                <Minus size={8} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => {
                  sound.playClick(1000);
                  setIsMaximized(!isMaximized);
                }}
                className="w-3 h-3 rounded-full bg-emerald-500/90 hover:bg-emerald-600 flex items-center justify-center group transition-colors shadow-sm"
                title="Expand / Restore"
              >
                <Square size={6} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Window Title & Subtitle */}
            <div className="flex items-center space-x-2 font-mono text-xs">
              <span className="font-semibold text-slate-200">{title}</span>
              {subtitle && (
                <>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="text-slate-400 text-[11px] hidden sm:inline">{subtitle}</span>
                </>
              )}
            </div>

            {/* Status dot / hint */}
            <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500">
              <span className="hidden sm:inline">OS_WIN::{id.toUpperCase()}</span>
            </div>
          </div>

          {/* Window Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar text-slate-200">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
