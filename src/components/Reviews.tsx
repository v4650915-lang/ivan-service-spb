import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

interface ReviewsProps {
  theme: 'light' | 'dark';
}

const Reviews: React.FC<ReviewsProps> = ({ theme }) => {
  return (
    <section className={cn(
      "py-24 px-4 transition-colors duration-500 overflow-hidden",
      theme === 'light' ? "bg-white" : "bg-slate-950"
    )}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Фото клиентки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative group"
          >
            <div className={cn(
              "absolute -inset-4 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity",
              theme === 'light' ? "bg-lime-500" : "bg-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.5)]"
            )} />
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/img/customer-happy.jpg"
                alt="Счастливый клиент Ивана"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className={cn(
              "absolute -bottom-8 -right-8 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 max-w-[200px] hidden md:block",
              theme === 'light' ? "bg-white/90 text-slate-800" : "bg-slate-800/90 text-white"
            )}>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-sm">«Компьютер как новый! Спасибо Ивану!»</p>
            </div>
          </motion.div>

          {/* Контент отзыва */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Quote className={cn(
                "w-16 h-16 mb-6",
                theme === 'light' ? "text-lime-500" : "text-cyan-400 opacity-50"
              )} />
              <h2 className={cn(
                "text-4xl md:text-5xl font-bold mb-8 tracking-tight",
                theme === 'light' ? "text-slate-900" : "text-white"
              )}>
                Что говорят <span className={theme === 'light' ? "text-lime-500" : "text-cyan-400"}>наши клиенты</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={cn(
                "p-8 rounded-3xl border text-xl italic leading-relaxed relative",
                theme === 'light' ? "bg-slate-50 border-slate-200 text-slate-700" : "bg-slate-900 border-slate-800 text-slate-300"
              )}
            >
              «Обратилась к Ивану, когда мой ноутбук просто перестал включаться. Боялась, что ремонт затянется на неделю, но Иван сделал всё при мне за 2 часа! Оказалось, что проблема была в окислившихся контактах. Всё очень прозрачно, честно и вежливо. Санкт-Петербургу не хватало такого сервиса!»
              <div className="mt-8 not-italic">
                <p className={cn(
                  "font-bold text-2xl",
                  theme === 'light' ? "text-slate-900" : "text-white"
                )}>
                  Елена Волкова
                </p>
                <p className="text-base opacity-60">Маркетолог, г. Санкт-Петербург</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-sm opacity-60 uppercase tracking-widest">Отзывов 5★</span>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-700" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-sm opacity-60 uppercase tracking-widest">Довольных лиц</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
