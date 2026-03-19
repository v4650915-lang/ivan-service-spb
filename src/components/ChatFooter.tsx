import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface ChatFooterProps {
  theme: 'light' | 'dark';
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  time: string;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Я Иван. Опишите вашу проблему, и я подскажу, как её решить.",
      sender: 'assistant',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate assistant reply
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        text: "Принято. Сейчас я передам информацию мастеру, и мы свяжемся с вами в Telegram.",
        sender: 'assistant',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <footer className={cn(
      "py-12 md:py-24 px-4 transition-colors duration-500",
      theme === 'light' ? "bg-white text-slate-900 border-t border-slate-200" : "bg-slate-950 text-white border-t border-slate-800"
    )}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold italic tracking-tight text-[#00A3FF]">Иван Сервис</h2>
          <p className={cn(
            "text-base md:text-lg opacity-80",
            theme === 'light' ? "text-slate-600" : "text-slate-400"
          )}>
            Ремонт происходит прямо на ваших глазах. Никаких скрытых платежей и «исчезнувших» запчастей. 
            Честный сервис из Санкт-Петербурга.
          </p>
          <div className="space-y-3 text-base md:text-lg">
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="font-bold">Telegram:</span> <a href="https://t.me/ivan_horon" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A3FF] transition-colors">@ivan_horon</a>
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="font-bold">Телефон:</span> <a href="tel:+79110312805" className="hover:text-[#00A3FF] transition-colors">+7 (911) 031-28-05</a>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <div className={cn(
            "rounded-3xl shadow-2xl overflow-hidden border flex flex-col h-[450px] md:h-[500px] w-full",
            theme === 'light' ? "bg-slate-50 border-slate-200" : "bg-slate-900 border-slate-800"
          )}>

            <div className={cn(
              "px-6 py-4 flex items-center gap-4 border-b",
              theme === 'light' ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700 shadow-md"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                theme === 'light' ? "bg-lime-500 text-white" : "bg-cyan-500 text-white shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              )}>
                <User className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">Иван-Ассистент</h3>
                <p className="text-sm opacity-60">Онлайн сейчас</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex flex-col max-w-[80%]",
                      msg.sender === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                    )}
                  >
                    <div className={cn(
                      "px-5 py-3 rounded-2xl text-base shadow-sm",
                      msg.sender === 'user' 
                        ? (theme === 'light' ? "bg-lime-500 text-white" : "bg-cyan-600 text-white") 
                        : (theme === 'light' ? "bg-white border border-slate-200 text-slate-800" : "bg-slate-800 text-slate-100")
                    )}>
                      {msg.text}
                    </div>
                    <span className="text-xs opacity-40 mt-1 px-1">{msg.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form onSubmit={handleSend} className={cn(
              "p-4 border-t",
              theme === 'light' ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
            )}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Опишите поломку..."
                  className={cn(
                    "w-full pl-6 pr-14 py-4 rounded-2xl border outline-none transition-all",
                    theme === 'light' 
                      ? "bg-slate-50 border-slate-300 focus:border-lime-500" 
                      : "bg-slate-900 border-slate-700 focus:border-cyan-500 text-white"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "absolute right-3 p-2 rounded-xl transition-all hover:scale-110 active:scale-95",
                    theme === 'light' ? "text-lime-500" : "text-cyan-400"
                  )}
                >
                  <Send className="w-7 h-7" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center opacity-40 text-sm">
        © 2026 Иван Сервис. Санкт-Петербург. Все права защищены.
      </div>
    </footer>
  );
};

export default ChatFooter;
