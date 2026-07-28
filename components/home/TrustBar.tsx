"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Plane,
  Car,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
  },
  {
    icon: Clock3,
    title: "24/7 Service",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
  },
  {
    icon: Car,
    title: "Island-wide Tours",
  },
  {
    icon: BadgeCheck,
    title: "Professional Drivers",
  },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl lg:grid-cols-5">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="text-amber-500" size={28} />
                </div>

                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}