import React from 'react';
import { Key, FileCode, Play } from 'lucide-react';

const InputPanel = ({ onRun, isAnalyzing }) => {
  return (
    <div className="glass-panel p-6 space-y-6">
      <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        Project Configuration
      </h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400 flex items-center gap-2">
            <Key size={16} /> Figma Access Token
          </label>
          <input 
            type="password" 
            placeholder="figd_..." 
            className="w-full p-3 glass-input"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400 flex items-center gap-2">
            <FileCode size={16} /> File Key
          </label>
          <input 
            type="text" 
            placeholder="fiq..." 
            className="w-full p-3 glass-input"
          />
        </div>
      </div>

      <button 
        onClick={onRun}
        disabled={isAnalyzing}
        className="w-full py-3 rounded-lg glass-btn flex items-center justify-center gap-2 mt-4"
      >
        {isAnalyzing ? (
          <span className="animate-pulse">Analyzing...</span>
        ) : (
          <>
            <Play size={18} fill="currentColor" /> Run Analysis
          </>
        )}
      </button>
    </div>
  );
};

export default InputPanel;