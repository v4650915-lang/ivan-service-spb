import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface PriceListProps {
  theme: 'light' | 'dark';
}

const PRICING_DATA = [
  {
    level: "Эконом",
    id: "economy",
    price: "от 1 500 ₽",
    features: ["Чистка от пыли", "Замена термопасты", "Диагностика системы"],
    accent: "bg-blue-500",
  },
  {
    level: "Оптима",
    id: "optima",
    price: "от 3 500 ₽",
    features: ["Всё из Эконом", "Установка ОС (лицензия)", "Оптимизация реестра", "Удаление вирусов"],
    accent: "bg-lime-500",
  },
  {
    level: "Максимум",
    id: "max",
    price: "от 7 000 ₽",
    features: ["Всё из Оптима", "Сложный ремонт плат", "Восстановление данных", "Замена BGA чипов", "Гарантия 1 год"],
    accent: "bg-cyan-500",
  }
];

const PriceList: React.FC<PriceListProps> = ({ theme }) => {
  const [openLevel, setOpenLevel] = useState<string | null>("optima");

  return (
    <section className={cn(
      "py-16 md:py-24 px-4 transition-colors duration-500",
      theme === 'light' ? "bg-slate-50" : "bg-slate-900"
    )}>
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4 md:mb-6",
            theme === 'light' ? "text-slate-900" : "text-white"
          )}>
            Наши <span className={theme === 'light' ? "text-lime-500" : "text-cyan-400"}>Тарифы</span>
          </h2>
          <p className={cn(
            "text-lg md:text-xl px-2",
            theme === 'light' ? "text-slate-600" : "text-slate-400"
          )}>
            Выберите подходящий уровень обслуживания для вашего устройства.
          </p>
        </div>

        <div className="space-y-4 w-full">
          {PRICING_DATA.map((item) => (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl border transition-all duration-300 w-full overflow-hidden",
                openLevel === item.id 
                  ? "border-transparent ring-2 ring-current ring-opacity-50" 
                  : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800",
                theme === 'light' ? "ring-lime-500 shadow-lime-100" : "ring-cyan-500 shadow-cyan-950"
              )}
            >
              <button
                onClick={() => setOpenLevel(openLevel === item.id ? null : item.id)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
              >
                <div>
                  <h3 className={cn(
                    "text-xl md:text-2xl font-bold mb-1",
                    theme === 'light' ? "text-slate-900" : "text-white"
                  )}>
                    {item.level}
                  </h3>
                  <span className={cn(
                    "text-base md:text-lg font-semibold",
                    theme === 'light' ? "text-lime-600" : "text-cyan-400"
                  )}>
                    {item.price}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openLevel === item.id ? 180 : 0 }}
                  className={theme === 'light' ? "text-slate-400" : "text-slate-500"}
                >
                  <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openLevel === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                      <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mb-4 md:mb-6" />
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {item.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className={cn(
                              "flex items-center gap-3 text-base md:text-lg",
                              theme === 'light' ? "text-slate-700" : "text-slate-300"
                            )}
                          >
                            <CheckCircle2 className={cn(
                              "w-4 h-4 md:w-5 md:h-5 flex-shrink-0",
                              theme === 'light' ? "text-lime-500" : "text-cyan-400"
                            )} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 md:mt-8">
                        <button className={cn(
                          "w-full py-4 rounded-xl text-lg font-bold transition-all transform active:scale-[0.98] min-h-[44px]",
                          theme === 'light' 
                            ? "bg-lime-500 text-white hover:bg-lime-600" 
                            : "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-900/50"
                        )}>
                          Заказать пакет
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default PriceList;
