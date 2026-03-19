import React from 'react';

const ChipLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-[300px]">
      <style>{`
        .trace-bg { stroke: #333; stroke-width: 1.8; fill: none; }
        .trace-flow {
          stroke-width: 1.8; fill: none;
          stroke-dasharray: 40 400; stroke-dashoffset: 438;
          filter: drop-shadow(0 0 6px currentColor);
          animation: flow 3s cubic-bezier(0.5, 0, 0.9, 1) infinite;
        }
        @keyframes flow { to { stroke-dashoffset: 0; } }
        .purple { stroke: #9900ff; color: #9900ff; }
        .blue { stroke: #00ccff; color: #00ccff; }
        .yellow { stroke: #ffea00; color: #ffea00; }
        .green { stroke: #00ff15; color: #00ff15; }
        .red { stroke: #ff3300; color: #ff3300; }
      `}</style>
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[500px]">
        <defs>
          <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d2d2d" />
            <stop offset="100%" stopColor="#0f0f0f" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eeeeee" />
            <stop offset="100%" stopColor="#888888" />
          </linearGradient>
        </defs>
        <g id="traces">
          <path d="M100 100 H200 V210 H326" className="trace-bg" />
          <path d="M100 100 H200 V210 H326" className="trace-flow purple" />
          <path d="M80 180 H180 V230 H326" className="trace-bg" />
          <path d="M80 180 H180 V230 H326" className="trace-flow blue" />
          <path d="M60 260 H150 V250 H326" className="trace-bg" />
          <path d="M60 260 H150 V250 H326" className="trace-flow yellow" />
          <path d="M100 350 H200 V270 H326" className="trace-bg" />
          <path d="M100 350 H200 V270 H326" className="trace-flow green" />
          <path d="M700 90 H560 V210 H474" className="trace-bg" />
          <path d="M700 90 H560 V210 H474" className="trace-flow blue" />
          <path d="M740 160 H580 V230 H474" className="trace-bg" />
          <path d="M740 160 H580 V230 H474" className="trace-flow green" />
          <path d="M720 250 H590 V250 H474" className="trace-bg" />
          <path d="M720 250 H590 V250 H474" className="trace-flow red" />
          <path d="M680 340 H570 V270 H474" className="trace-bg" />
          <path d="M680 340 H570 V270 H474" className="trace-flow yellow" />
        </g>
        <rect x="330" y="190" width="140" height="100" rx="20" ry="20" fill="url(#chipGradient)" stroke="#222" strokeWidth="3" />
        <text x="400" y="240" fontFamily="Arial, sans-serif" fontSize="22" fill="url(#textGradient)" textAnchor="middle" alignmentBaseline="middle">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default ChipLoader;