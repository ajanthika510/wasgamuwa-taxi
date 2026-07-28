"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Plane,
  Map,
  User,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Travel confidently with licensed, experienced and responsible drivers.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Book a ride anytime. We're available day and night throughout the year.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Comfortable pickups and drop-offs to all major airports in Sri Lanka.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Map,
    title: "Island-wide Tours",
    description:
      "Explore Sri Lanka with customised travel packages and flexible itineraries.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: User,
    title: "Professional Service",
    description:
      "Friendly drivers, clean vehicles, and reliable service for every journey.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Quick Support",
    description:
      "Need help? Contact us anytime for fast booking assistance and advice.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Your Trusted Travel Partner
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className="glass p-6 flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors"
            >
              <div className={`w-12 h-12 rounded-2xl ${r.bg} flex items-center justify-center`}>
                <r.icon className={`w-6 h-6 ${r.color}`} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
