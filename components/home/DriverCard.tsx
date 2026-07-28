"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function DriverCard() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl"
    >
      <Image
        src="/avatar.jpg"
        width={55}
        height={55}
        alt=""
        className="rounded-full"
      />

      <div>
        <h4 className="font-bold">Professional Driver</h4>

        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <ShieldCheck
            className="text-green-500"
            size={16}
          />
          Verified
        </div>
      </div>
    </motion.div>
  );
}