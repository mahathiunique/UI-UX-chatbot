import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GeminiModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-panel w-full max-w-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-glass-border flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-2 text-blue-300">
              <Sparkles size={18} />
              <h3 className="font-semibold">Gemini Design Analysis</h3>
            </div>
            <button onClick={onClose} className="hover:text-white text-gray-400">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <div className="text-sm">
                <p className="text-red-300 font-mono mb-1">Found: {data.found}</p>
                <p className="text-green-300 font-mono">Expected: {data.expected}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-bold">AI Insight:</span>{' '}
                This looks like a mismatch in the primary button component. The implementation uses a hardcoded hex value instead of the Figma variable{' '}
                <code className="bg-white/10 px-1 rounded">primary-500</code>. This might break theme switching.
              </p>
              
              <div className="mt-4 p-4 bg-black/30 rounded-lg font-mono text-sm text-blue-200 whitespace-pre-line">
                {`Suggested Fix:
className="bg-primary-500 text-white"`}
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white/5 border-t border-glass-border flex justify-end">
            <button 
              onClick={onClose} 
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GeminiModal;
