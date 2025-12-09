import React from 'react';
import { Activity } from 'lucide-react';

const HealthScore = ({ score }) => {
  const getColor = (s) => {
    if (s >= 90) return 'text-green-400';
    if (s >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="glass-panel p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50"></div>
      
      <div className="flex items-center gap-2 mb-2 text-gray-400 uppercase text-xs tracking-wider">
        <Activity size={14} /> Design Health
      </div>
      
      <div className={`text-6xl font-bold ${getColor(score)} drop-shadow-lg`}>
        {score}%
      </div>
      
      <p className="text-sm text-gray-500 mt-2">
        {score < 100 ? "Mismatches Detected" : "Design Perfect"}
      </p>
    </div>
  );
};

export default HealthScore;