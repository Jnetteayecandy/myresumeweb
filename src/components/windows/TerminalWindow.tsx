import React, { useState, useRef, useEffect } from 'react';
import { executeCommand, TerminalOutput } from '../../data/terminalCommands';
import { sound } from '../../utils/sound';
import { fireConfetti } from '../../utils/confetti';
import { WindowId } from '../../types';

interface TerminalWindowProps {
  onOpenWindow?: (id: WindowId) => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  outputs: TerminalOutput[];
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ onOpenWindow }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      outputs: [
        { type: 'info', content: '⚡ Wipaporn OS Terminal v2.4 (Interactive Shell)' },
        { type: 'text', content: 'Type "help" to see available commands, or "pil" to inspect the flagship study.' },
        { type: 'warning', content: 'Tip: Try "sudo hire" for a special easter egg!' }
      ]
    }
  ]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleAction = (action: string) => {
    if (action === 'confetti') {
      fireConfetti();
      sound.playChime();
    } else if (action === 'open_pil' && onOpenWindow) {
      onOpenWindow('pil');
    } else if (action === 'open_resume' && onOpenWindow) {
      onOpenWindow('resume');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    sound.playClick(1100, 0.02);

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const outputs = executeCommand(trimmed, handleAction);
    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        outputs
      }
    ]);
    setCommandList((prev) => [...prev, trimmed]);
    setCmdIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sound.playKey();
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx = cmdIndex === -1 ? commandList.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIdx);
      setInput(commandList[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex === -1) return;
      const nextIdx = cmdIndex + 1;
      if (nextIdx >= commandList.length) {
        setCmdIndex(-1);
        setInput('');
      } else {
        setCmdIndex(nextIdx);
        setInput(commandList[nextIdx]);
      }
    }
  };

  return (
    <div 
      className="h-full flex flex-col font-mono text-xs bg-black/60 p-4 rounded-xl border border-white/[0.05] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Scrollable outputs */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            {item.command !== 'welcome' && (
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-cyan-400">wipaporn@mac</span>
                <span className="text-slate-600">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
              </div>
            )}
            <div className="pl-2 space-y-1">
              {item.outputs.map((out, idx) => {
                switch (out.type) {
                  case 'success':
                    return <div key={idx} className="text-emerald-400 whitespace-pre-wrap">{out.content}</div>;
                  case 'error':
                    return <div key={idx} className="text-rose-400 whitespace-pre-wrap">{out.content}</div>;
                  case 'warning':
                    return <div key={idx} className="text-amber-400 whitespace-pre-wrap">{out.content}</div>;
                  case 'info':
                    return <div key={idx} className="text-cyan-300 whitespace-pre-wrap">{out.content}</div>;
                  case 'ascii':
                    return <pre key={idx} className="text-purple-300 font-bold leading-none py-2 text-[10px] overflow-x-auto">{out.content}</pre>;
                  default:
                    return <div key={idx} className="text-slate-300 whitespace-pre-wrap">{out.content}</div>;
                }
              })}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <form onSubmit={handleSubmit} className="mt-4 pt-3 border-t border-white/[0.08] flex items-center space-x-2">
        <span className="text-cyan-400 font-bold">wipaporn@mac</span>
        <span className="text-slate-600">:</span>
        <span className="text-purple-400 font-bold">~</span>
        <span className="text-slate-500">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-slate-100 focus:outline-none caret-cyan-400"
          placeholder="type 'help', 'pil', 'skills', or 'sudo hire'..."
          autoFocus
        />
      </form>
    </div>
  );
};
