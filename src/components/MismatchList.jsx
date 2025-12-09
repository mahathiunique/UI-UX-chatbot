import React from 'react';
import { AlertTriangle, Bot } from 'lucide-react';

const MismatchList = ({ mismatches, onAnalyze }) => {
  return (
    <div className="glass-panel flex-1 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-glass-border flex justify-between items-center">
        <h3 className="font-semibold text-white">Detected Mismatches</h3>
        <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs border border-red-500/20">
          {mismatches.length} Issues
        </span>
      </div>

      <div className="overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {mismatches.map((item, index) => (
          <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-glass-border group">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-yellow-500" />
                <span className="font-mono text-sm text-blue-300">{item.file}</span>
              </div>
              <span className="text-xs text-gray-500">Line {item.line}</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-3 pl-6">{item.message}</p>
            
            <div className="pl-6">
              <button 
                onClick={() => onAnalyze(item)}
                className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Bot size={14} /> Ask Gemini
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MismatchList;