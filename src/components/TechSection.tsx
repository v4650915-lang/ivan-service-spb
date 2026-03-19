import React from 'react';
import { motion } from 'framer-motion';
import ChipLoader from './ChipLoader';
import { cn } from '../lib/utils';

interface TechSectionProps {
  theme: 'light' | 'dark';
}

const TechSection: React.FC<TechSectionProps> = ({ theme }) => {
  return (
    <section className={cn(
      "py-24 px-4 overflow-hidden relative transition-colors duration-500",
      theme === 'light' ? "bg-white text-slate-900" : "bg-slate-950 text-white"
    )}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[500px]"
          >
            <ChipLoader />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Наши{" "}
            <span className={cn(
              theme === 'light' ? "text-lime-500" : "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            )}>
              Технологии
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-lg md:text-xl leading-relaxed opacity-90",
              theme === 'light' ? "text-slate-700" : "text-slate-300"
            )}
          >
            Мы используем современное оборудование и профессиональные расходные материалы. 
            Никакой магии — только чистая инженерия и педантичный подход к каждому контакту. 
            Ваш ПК получит вторую жизнь «на ваших глазах».
          </motion.p>

          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {["Профессиональная термопаста", "Ультразвуковая чистка", "Восстановление цепей питания", "Прошивка BIOS"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-lg">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  theme === 'light' ? "bg-lime-500" : "bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]"
                )} />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
