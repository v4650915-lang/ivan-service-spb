import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

// Компоненты
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import PriceList from './components/PriceList';
import Reviews from './components/Reviews';
import ChatFooter from './components/ChatFooter';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Переключение классов темы для всей страницы
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: theme === 'light' ? '#f8fafc' : '#020617',
        color: theme === 'light' ? '#0f172a' : '#f8fafc',
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "min-h-screen font-sans antialiased selection:bg-lime-500/30",
        theme === 'dark' ? "selection:bg-cyan-500/30" : ""
      )}
    >
      {/* Переключатель темы */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero-секция с видео/фото фоном */}
        <Hero theme={theme} />

        {/* Блок "Технологии" с ChipLoader */}
        <TechSection theme={theme} />

        {/* Прайс-лист выпадающим списком */}
        <PriceList theme={theme} />

        {/* Блок отзывов с фотографией счастливого клиента */}
        <Reviews theme={theme} />
      </main>

      {/* Футер с интерактивным чатом */}
      <ChatFooter theme={theme} />
    </motion.div>
  );
}

export default App;
