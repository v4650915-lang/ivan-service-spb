import React from 'react';
import RainbowButton from './RainbowButton';
import SystemStatusCard from './SystemStatusCard';
import { cn } from '../lib/utils';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className={cn(
      "relative flex flex-col lg:flex-row min-h-[100svh] lg:min-h-screen overflow-hidden transition-colors duration-500",
      theme === 'light' ? "bg-white" : "bg-black"
    )}>
      
      {/* --- ВЕРХНИЙ БЛОК (МЕДИА) --- */}
      <div className={cn(
        "relative w-full lg:absolute lg:inset-0 z-0",
        "h-[40vh] lg:h-full overflow-hidden"
      )}>
        {theme === 'dark' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/img/thermal-paste-macro.mp4.mp4" type="video/mp4" />
          </video>
        ) : (
          <img 
            src="/img/office-light-bg.jpg" 
            alt="Ремонт ноутбуков" 
            className="w-full h-full object-cover saturate-125 brightness-100"
          />
        )}
        
        {/* Градиентный оверлей для десктопа */}
        <div className={cn(
          "hidden lg:block absolute inset-0 transition-opacity duration-700",
          theme === 'dark' 
            ? "bg-gradient-to-r from-black/90 via-black/40 to-transparent" 
            : "bg-gradient-to-r from-white/60 via-white/20 to-transparent"
        )} />

        {/* Карточка статуса: привязана к углу МЕДИА-контейнера */}
        <div className="absolute bottom-2 right-2 z-20 transform scale-[0.5] sm:scale-75 lg:scale-100 origin-bottom-right">
          <SystemStatusCard />
        </div>
      </div>

      {/* --- НИЖНИЙ БЛОК (КОНТЕНТ) --- */}
      <div className={cn(
        "relative z-10 w-full lg:container lg:mx-auto px-6 lg:px-12 py-10 lg:py-0 flex items-center",
        "bg-transparent"
      )}>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
          
          <div className="flex flex-col items-start text-left gap-y-6 lg:gap-y-10 animate-fade-in-left w-full max-w-2xl">
            
            {/* Текстовый контент: Брендинг удален согласно задаче */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className={cn(
                "text-3xl sm:text-4xl lg:text-7xl font-bold leading-[1.1] transition-colors duration-500",
                theme === 'light' ? "text-slate-950" : "text-white"
              )}>
                Ремонт <br className="hidden lg:block" /> 
                <span className={cn(
                  "transition-all duration-500",
                  theme === 'light' ? "text-slate-800" : "text-white drop-shadow-[0_0_20px_rgba(0,163,255,0.6)]"
                )}>
                  на ваших глазах
                </span>
              </h1>
              
              <p className={cn(
                "text-base lg:text-2xl max-w-md lg:max-w-xl transition-colors duration-500 font-medium leading-relaxed opacity-90",
                theme === 'light' ? "text-slate-700" : "text-gray-300"
              )}>
                Прозрачный сервис в Санкт-Петербурге. Мастер Иван наводит порядок в системе, чтобы она не тормозила.
              </p>
            </div>

            {/* Кнопка действия */}
            <div className="pt-2 w-full sm:w-auto">
              <RainbowButton theme={theme} />
            </div>

            {/* Преимущества */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <div className={cn(
                "flex items-center gap-2 text-xs lg:text-lg font-bold transition-colors",
                theme === 'light' ? "text-slate-900" : "text-gray-100"
              )}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
                Бесплатная диагностика
              </div>
              <div className={cn(
                "flex items-center gap-2 text-xs lg:text-lg font-bold transition-colors",
                theme === 'light' ? "text-slate-900" : "text-gray-100"
              )}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
                Гарантия качества
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
