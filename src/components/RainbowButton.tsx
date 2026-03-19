import React from 'react';
import { cn } from '../lib/utils';

interface RainbowButtonProps {
  onClick?: () => void;
  theme?: 'light' | 'dark';
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ onClick, theme = 'dark' }) => {
  return (
    <>
      <button 
        onClick={onClick} 
        className={cn(
          "uiverse-rainbow-btn transition-all duration-300 min-h-[50px] sm:min-h-[56px] w-full sm:w-auto",
          theme === 'light' ? "bg-black" : "bg-black"
        )}
      >
        Бесплатная диагностика
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-rainbow-btn {
          --border-radius: 15px;
          --border-width: 4px;
          appearance: none;
          position: relative;
          padding: 0 2.5em;
          border: 0;
          font-family: inherit;
          font-size: 16px; /* Чуть меньше для мобильных по умолчанию */
          sm-font-size: 18px; 
          font-weight: 700;
          color: #fff;
          z-index: 2;
          cursor: pointer;
          border-radius: var(--border-radius);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .uiverse-rainbow-btn::after {
          --m-i: linear-gradient(#000, #000);
          --m-o: content-box, padding-box;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          padding: var(--border-width);
          border-radius: var(--border-radius);
          background-image: conic-gradient(
            #488cfb,
            #29dbbc,
            #ddf505,
            #ff9f0e,
            #e440bb,
            #655adc,
            #488cfb
          );
          -webkit-mask-image: var(--m-i), var(--m-i);
          mask-image: var(--m-i), var(--m-i);
          -webkit-mask-origin: var(--m-o);
          mask-origin: var(--m-o);
          -webkit-mask-clip: var(--m-o);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          filter: hue-rotate(0);
          animation: rotate-hue linear 1200ms infinite;
          animation-play-state: paused;
        }

        .dark .uiverse-rainbow-btn {
          box-shadow: 0 0 15px rgba(0, 163, 255, 0.4);
        }

        .light .uiverse-rainbow-btn {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .uiverse-rainbow-btn:hover::after {
          animation-play-state: running;
        }

        .uiverse-rainbow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 163, 255, 0.6);
        }

        .uiverse-rainbow-btn:active {
          transform: translateY(0) scale(0.96);
        }

        @keyframes rotate-hue {
          to {
            filter: hue-rotate(1turn);
          }
        }

        @media (min-width: 640px) {
          .uiverse-rainbow-btn {
            font-size: 18px;
          }
        }
      `}} />
    </>
  );
};

export default RainbowButton;
