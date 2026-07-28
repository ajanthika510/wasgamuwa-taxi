"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function RatingCard() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="rounded-2xl bg-white p-5 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <Star
          className="fill-yellow-400 text-yellow-400"
          size={26}
        />

        <div>
          <h3 className="text-2xl font-bold">
            4.9
          </h3>

          <p className="text-sm text-zinc-500">
            Customer Rating
          </p>
        </div>
      </div>
    </motion.div>
  );
}