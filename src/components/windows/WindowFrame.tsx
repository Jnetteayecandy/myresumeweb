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
          initial={{ scale: 0.94, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onPointerDown={onFocus}
          className={`pointer-events-auto flex flex-col rounded-2xl bg-white border border-slate-300/90 shadow-2xl overflow-hidden transition-all duration-200 ${
            isMaximized 
              ? 'w-[98vw] h-[94vh] max-w-none max-h-none' 
              : `w-full ${defaultWidth} ${defaultHeight} h-[85vh]`
          }`}
        >
          {/* Window Header Bar (macOS Light Style) */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-100/90 cursor-grab active:cursor-grabbing select-none shrink-0">
            {/* Traffic light buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  sound.playWindowClose();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center group shadow-xs"
                title="Close"
              >
                <X size={8} className="text-rose-950 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 flex items-center justify-center group shadow-xs"
                title="Minimize"
              >
                <Minus size={8} className="text-amber-950 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsMaximized(!isMaximized);
                }}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center group shadow-xs"
                title="Toggle Maximize"
              >
                <Square size={6} className="text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-xs font-semibold text-slate-800 tracking-wide font-sans">
                {title}
              </span>
              {subtitle && (
                <span className="text-[10px] text-slate-500 font-sans hidden sm:inline">
                  {subtitle}
                </span>
              )}
            </div>

            <div className="w-12 text-right">
              <button
                onClick={() => {
                  sound.playWindowClose();
                  onClose();
                }}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-200/60 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Window Body Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/60">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
