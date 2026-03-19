import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const SystemStatusCard: React.FC = () => {
  return (
    <div className="system-status-card select-none">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 border-b border-white/10 pb-2">
          <Zap className="w-4 h-4 text-[#00A3FF]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white uppercase opacity-90">
            SYSTEM STATUS: <span className="text-[#00A3FF] font-bold">OPTIMIZED</span>
          </span>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-white/50" />
              <span className="text-[11px] sm:text-[12px] font-mono text-white/80">CPU TEMP</span>
            </div>
            <span className="text-[11px] sm:text-[12px] font-mono font-bold text-[#00A3FF]">38°C</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[11px] sm:text-[12px] font-mono text-white/80">SERVICE</span>
            <span className="text-[11px] sm:text-[12px] font-mono font-bold text-emerald-400 uppercase">Active</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .system-status-card {
          background-color: #0F0F0F;
          border-top-left-radius: 16px;
          border-left: 2px solid rgba(0, 163, 255, 0.4);
          border-top: 2px solid rgba(0, 163, 255, 0.4);
          padding: 18px 24px;
          min-width: 250px;
          box-shadow: -15px -15px 40px rgba(0, 0, 0, 0.7);
          z-index: 100;
        }
      `}} />
    </div>
  );
};

export default SystemStatusCard;
