// components/CodeBlock.js
'use client';
import { useState } from 'react';

export default function CodeBlock({ code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Simple syntax highlighting for JavaScript/CSS/HTML
  const highlightCode = (code, lang) => {
    if (lang === 'javascript' || lang === 'js') {
      return code
        .replace(/\/\/.*$/gm, '<span class="text-gray-400">$&</span>')
        .replace(/\/\*[\s\S]*?\*\//gm, '<span class="text-gray-400">$&</span>')
        .replace(/\b(const|let|var|function|async|await|return|if|else|for|while|try|catch|import|export|from|default|class|extends|new|this|super)\b/g, '<span class="text-purple-400">$&</span>')
        .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$&</span>')
        .replace(/\b\d+\b/g, '<span class="text-orange-400">$&</span>')
        .replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$&</span>')
        .replace(/\b(React|useState|useEffect|useContext|props|state|setState)\b/g, '<span class="text-blue-400">$&</span>');
    } else if (lang === 'css') {
      return code
        .replace(/\/\*[\s\S]*?\*\//gm, '<span class="text-gray-400">$&</span>')
        .replace(/([.#]?[a-zA-Z-_]+)(\s*{)/g, '<span class="text-yellow-400">$1</span>$2')
        .replace(/([a-zA-Z-]+)(\s*:)/g, '<span class="text-blue-400">$1</span>$2')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$&</span>')
        .replace(/\b\d+(\w+)?\b/g, '<span class="text-orange-400">$&</span>');
    } else if (lang === 'html') {
      return code
        .replace(/<!--[\s\S]*?-->/gm, '<span class="text-gray-400">$&</span>')
        .replace(/(<\/?)([\w-]+)/g, '$1<span class="text-red-400">$2</span>')
        .replace(/([\w-]+)(=)/g, '<span class="text-yellow-400">$1</span>$2')
        .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$&</span>');
    }
    return code;
  };

  const languageLabels = {
    javascript: 'JavaScript',
    js: 'JavaScript',
    css: 'CSS',
    html: 'HTML',
    jsx: 'React JSX',
    typescript: 'TypeScript',
    python: 'Python',
    json: 'JSON'
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400 ml-2">
            {languageLabels[language] || language}
          </span>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
        >
          {copied ? (
            <>
              <span>✓</span>
              Copied!
            </>
          ) : (
            <>
              <span>📋</span>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code 
            className="text-gray-100 whitespace-pre"
            dangerouslySetInnerHTML={{ 
              __html: highlightCode(code, language) 
            }}
          />
        </pre>
      </div>

      {/* Line numbers (optional) */}
      <div className="absolute left-0 top-12 bottom-0 w-12 bg-gray-800 border-r border-gray-700 text-gray-500 text-xs font-mono leading-6 pt-4 select-none">
        {code.split('\n').map((_, index) => (
          <div key={index} className="px-2 text-right">
            {index + 1}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        pre {
          margin-left: 3rem;
        }
      `}</style>
    </div>
  );
}