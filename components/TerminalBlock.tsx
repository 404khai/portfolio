'use client';

import React, { useState } from 'react';
import { ClipboardFill, ClipboardCheckFill } from 'react-bootstrap-icons';

interface TerminalBlockProps {
  command: string;
  output?: string;
  title?: string;
}

const COMMAND_TOKEN =
  /(\s+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:curl|grep|npm|node|sh|openssl|export|const|async|await|return|import|from)\b|[A-Z][A-Z0-9_]*=|--?[a-zA-Z][\w-]*|\/[\w./:_-]+|\$\{[^}]+\}|\b\d+\b:[^\n]*)/g;

function colorizeCommand(command: string) {
  return command.split(COMMAND_TOKEN).map((part, index) => {
    if (!part) return null;
    if (/^\s+$/.test(part)) return part;

    if (/^"(?:\\.|[^"\\])*"$|^'(?:\\.|[^'\\])*'$/.test(part)) {
      return (
        <span key={index} className="text-amber-300">
          {part}
        </span>
      );
    }

    if (/^(curl|grep|npm|node|sh|openssl)$/.test(part)) {
      return (
        <span key={index} className="text-fuchsia-400">
          {part}
        </span>
      );
    }

    if (/^(export|const|async|await|return|import|from)$/.test(part)) {
      return (
        <span key={index} className="text-sky-400">
          {part}
        </span>
      );
    }

    if (/^[A-Z][A-Z0-9_]*=/.test(part)) {
      return (
        <span key={index} className="text-cyan-400">
          {part}
        </span>
      );
    }

    if (/^--?[a-zA-Z]/.test(part)) {
      return (
        <span key={index} className="text-yellow-400">
          {part}
        </span>
      );
    }

    if (/^\/[\w./:_-]+/.test(part)) {
      return (
        <span key={index} className="font-semibold text-[#a8e64c]">
          {part}
        </span>
      );
    }

    if (/^\$\{[^}]+\}$/.test(part)) {
      return (
        <span key={index} className="text-orange-300">
          {part}
        </span>
      );
    }

    if (/^\d+:/.test(part)) {
      const [lineNo, ...rest] = part.split(':');
      return (
        <span key={index}>
          <span className="text-zinc-500">{lineNo}:</span>
          <span className="text-zinc-300">{rest.join(':')}</span>
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

const CODE_KEYWORDS =
  /^(async|await|const|let|var|return|if|else|for|while|break|continue|export|import|from|new|true|false|null|final|void|static|class|extends|implements|typeof|instanceof|throw|try|catch|finally|default|case|switch|enum|interface|type|public|private|protected|readonly|def|fn|func|bool|double|int)$/;

const CODE_TOKEN =
  /(\s+|\/\/[^\n]*|\b(?:async|await|const|let|var|return|if|else|for|while|break|continue|export|import|from|new|true|false|null|final|void|static|class|extends|implements|typeof|instanceof|throw|try|catch|finally|default|case|switch|enum|interface|type|public|private|protected|readonly|def|fn|func|bool|double|int)\b|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[A-Z][a-zA-Z0-9]*(?:<[^>]+>)?|[a-z_][a-zA-Z0-9_]*(?=\s*:)|\b\d+\b|\/[\w./:${}_-]+|\$\{[^}]+\}|[{}()[\];,.<>:=+\-*&|!?]|=>)/g;

function colorizeCodeSource(code: string, keyPrefix: string) {
  return code.split(CODE_TOKEN).map((token, index) => {
    if (!token) return null;
    const key = `${keyPrefix}-${index}`;

    if (/^\s+$/.test(token)) return token;

    if (/^\/\//.test(token)) {
      return (
        <span key={key} className="text-zinc-500">
          {token}
        </span>
      );
    }

    if (CODE_KEYWORDS.test(token)) {
      return (
        <span key={key} className="text-sky-400">
          {token}
        </span>
      );
    }

    if (/^"(?:\\.|[^"\\])*"$|^'(?:\\.|[^'\\])*'$|^`(?:\\.|[^`\\])*`$/.test(token)) {
      return (
        <span key={key} className="text-amber-300">
          {token}
        </span>
      );
    }

    if (/^[A-Z][a-zA-Z0-9]*(?:<[^>]+>)?$/.test(token)) {
      return (
        <span key={key} className="text-yellow-300">
          {token}
        </span>
      );
    }

    if (/^[a-z_][a-zA-Z0-9_]*(?=\s*:)$/.test(token) || /^[a-z_][a-zA-Z0-9_]*:$/.test(token)) {
      const [prop] = token.split(':');
      return (
        <span key={key}>
          <span className="text-cyan-400">{prop}</span>
          <span className="text-zinc-400">:</span>
        </span>
      );
    }

    if (/^\/[\w./:${}_-]+/.test(token)) {
      return (
        <span key={key} className="font-semibold text-[#a8e64c]">
          {token}
        </span>
      );
    }

    if (/^\$\{[^}]+\}$/.test(token)) {
      return (
        <span key={key} className="text-orange-300">
          {token}
        </span>
      );
    }

    if (/^\d+$/.test(token)) {
      return (
        <span key={key} className="text-violet-300">
          {token}
        </span>
      );
    }

    if (token === '=>') {
      return (
        <span key={key} className="text-fuchsia-400">
          {token}
        </span>
      );
    }

    return (
      <span key={key} className="text-zinc-300">
        {token}
      </span>
    );
  });
}

function looksLikeCodeLine(line: string) {
  const trimmed = line.trim();
  return (
    /^(async |const |let |var |final |await |return |if |for |while |}|{|\)|\(|\]|import |export |class |\/\/)/.test(trimmed) ||
    trimmed.includes('=>') ||
    trimmed.includes('();') ||
    trimmed.includes('::') ||
    /[a-zA-Z0-9_]+\s*:\s*[^,\n]+[,)]/.test(trimmed) ||
    /^\s*[a-zA-Z_][\w]*\s*=\s*/.test(trimmed)
  );
}

function colorizeOutputLine(line: string, index: number) {
  if (line.startsWith('#')) {
    return (
      <div key={index} className="text-zinc-500">
        {line}
      </div>
    );
  }

  if (/✔|passed|succeeded|Build succeeded/i.test(line)) {
    return (
      <div key={index} className="text-emerald-400">
        {line}
      </div>
    );
  }

  if (/^(Test Files|Tests)\s+/i.test(line)) {
    return (
      <div key={index} className="text-emerald-300">
        {line}
      </div>
    );
  }

  if (/^(transactionId|sessionId|amount|aliasAccountNumber):/.test(line)) {
    const [label, ...rest] = line.split(':');
    return (
      <div key={index}>
        <span className="text-cyan-400">{label}:</span>
        <span className="text-zinc-300">{rest.join(':')}</span>
      </div>
    );
  }

  if (/^\d+:/.test(line)) {
    const colonIndex = line.indexOf(':');
    const lineNo = line.slice(0, colonIndex);
    const code = line.slice(colonIndex + 1);
    return (
      <div key={index}>
        <span className="text-zinc-500">{lineNo}:</span>
        {colorizeCodeSource(code, `line-${index}`)}
      </div>
    );
  }

  if (/^(RAILS_|NOMBA_|ADMIN_|REDIS_|JOB_|BULLMQ_)/.test(line)) {
    return (
      <div key={index} className="text-cyan-300">
        {line}
      </div>
    );
  }

  if (line.trim().startsWith('//')) {
    return (
      <div key={index} className="text-zinc-500">
        {line}
      </div>
    );
  }

  if (looksLikeCodeLine(line)) {
    return <div key={index}>{colorizeCodeSource(line, `code-${index}`)}</div>;
  }

  return <div key={index} className="text-zinc-400">{line}</div>;
}

function colorizeOutput(output: string) {
  return output.split('\n').map(colorizeOutputLine);
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
          <span>{colorizeCommand(command)}</span>
        </div>

        {output && (
          <div className="mt-2 whitespace-pre-wrap leading-relaxed">
            {colorizeOutput(output)}
          </div>
        )}
      </div>
    </div>
  );
};
