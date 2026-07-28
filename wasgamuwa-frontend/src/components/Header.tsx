"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setIsDark(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <motion.header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="#" className="text-2xl font-bold text-primary">
        Wasgamuwa 🚖
      </Link>
      <nav className="hidden space-x-6 md:flex">
        <Link href="#hero" className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="#services" className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="#tours" className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
          Tours
        </Link>
        <Link href="#booking" className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
          Booking
        </Link>
        <Link href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
      <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </motion.header>
  );
}
