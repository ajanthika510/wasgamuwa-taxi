"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "94763433434";

  const defaultMessage =
    "Hello! I would like to book a taxi with Wasgamuwa Taxi & Tours.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="group fixed bottom-6 right-6 z-[999]"
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-xl transition group-hover:opacity-70" />

      {/* Button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_40px_rgba(37,211,102,0.5)]">
        <FaWhatsapp className="text-4xl text-white" />
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-black/80 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </div>
    </motion.a>
  );
}