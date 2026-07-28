"use client";

import { motion } from "framer-motion";
import { Shield, Plane, Map, Clock } from "lucide-react";

const features = [
  { icon: Shield, label: "Licensed Drivers" },
  { icon: Shield, label: "Safe & Secure Travel" },
  { icon: Plane, label: "Airport Transfers" },
  { icon: Map, label: "Island-wide Tours" },
  { icon: Clock, label: "24/7 Booking" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-5 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
