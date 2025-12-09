import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import HealthScore from './components/HealthScore';
import MismatchList from './components/MismatchList';
import GeminiModal from './components/GeminiModal';
import { ShieldCheck } from 'lucide-react';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedMismatch, setSelectedMismatch] = useState(null);
  
  // Mock Data (will be replaced by Backend in Step 2)
  const mockMismatches = [
    { file: 'src/components/Button.tsx', line: 42, message: 'Color mismatch: Found #000, expected Primary-500', found: '#000000', expected: 'var(--primary-500)' },
    { file: 'src/components/Header.jsx', line: 15, message: 'Padding mismatch: Found 20px, expected 24px (space-6)', found: '20px', expected: '24px' },
    { file: 'src/layouts/Sidebar.tsx', line: 8, message: 'Font weight mismatch: Found 400, expected 600', found: '400', expected: '600' },
  ];

  const handleRun = () => {
    setIsAnalyzing(true);
    // Simulate API call delay
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="flex h-screen p-8 gap-6 max-w-[1600px] mx-auto">
      {/* Left Column: Controls & Stats */}
      <div className="w-1/3 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            DesignGuard
          </h1>
        </div>

        <InputPanel onRun={handleRun} isAnalyzing={isAnalyzing} />
        <HealthScore score={68} />
      </div>

      {/* Right Column: Results */}
      <div className="w-2/3 h-full flex flex-col">
        <MismatchList 
          mismatches={mockMismatches} 
          onAnalyze={(item) => setSelectedMismatch(item)} 
        />
      </div>

      {/* Modals */}
      <GeminiModal 
          isOpen={Boolean(selectedMismatch)} 
          onClose={() => setSelectedMismatch(null)} 
          data={selectedMismatch} 
      />

    </div>
  );
}

export default App;