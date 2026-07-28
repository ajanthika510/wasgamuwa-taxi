"use client";
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg py-6 text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © 2026 Wasgamuwa Taxi & Tours. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Phone: +94 77 123 4567 | Email: info@wasgamuwa.com
      </p>
    </motion.footer>
  );
}
