"use client";

import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function AirportCard() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="rounded-2xl bg-white p-5 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <Plane className="text-amber-500" />

        <div>
          <h4 className="font-bold">
            Airport Transfer
          </h4>

          <p className="text-sm text-zinc-500">
            Available 24/7
          </p>
        </div>
      </div>
    </motion.div>
  );
}