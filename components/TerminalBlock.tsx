'use client';

import React, { useState } from 'react';
import { ClipboardFill, ClipboardCheckFill } from 'react-bootstrap-icons';

interface TerminalBlockProps {
  command: string;
  output?: string;
  title?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({ command, output, title = "terminal" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const text = output ? `${command}\n${output}` : command;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
    }
  };

  return (
    <div className="w-full my-8 rounded-lg overflow-hidden border border-zinc-800 bg-[#0e0e11] font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-[#18181b] border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-zinc-500 text-xs">{title}</div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 text-xs transition-colors ${
            copied ? 'text-emerald-400' : 'text-zinc-500 hover:text-zinc-100'
          }`}
        >
          {copied ? <ClipboardCheckFill/> : <ClipboardFill/>}
          <span className="hidden sm:inline">
            {copied ? 'Copied' : 'Copy'}
          </span>
        </button>
      </div>

      <div className="p-4 md:p-6 overflow-x-auto">
        <div className="flex gap-2 text-zinc-300">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span>{command}</span>
        </div>

        {output && (
          <div className="mt-2 text-zinc-400 whitespace-pre-wrap leading-relaxed">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};
