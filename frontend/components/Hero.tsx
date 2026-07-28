"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Navigation,
  CalendarDays,
  Star,
  Shield,
  Clock,
  ChevronRight,
} from "lucide-react";
import BookingForm from "./BookingForm";

const stats = [
  { icon: "👥", value: "10K+", label: "Happy Customers" },
  { icon: "🎧", value: "24/7", label: "Support" },
  { icon: "🛡️", value: "100%", label: "Safe Journey" },
];

const badges = [
  {
    icon: "✅",
    title: "Professional Drivers",
    items: ["Licensed", "Experienced", "Friendly"],
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Sri Lanka scenic landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Animated background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Trusted badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 text-xs font-semibold tracking-wide">
                Trusted Taxi & Tours in Sri Lanka
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-4"
            >
              Travel Sri Lanka
              <br />
              <span className="gradient-text">Comfortably</span>
              <br />
              <span className="text-amber-400">& Safely</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/70 text-lg max-w-md mb-8 leading-relaxed"
            >
              Airport transfers, wildlife safari transport, local taxi services,
              and unforgettable tours across Sri Lanka.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#booking" className="btn-primary">
                Book Your Ride <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tours" className="btn-outline">
                Explore Tours <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">{s.value}</p>
                    <p className="text-white/55 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: booking form + floating cards */}
          <div className="relative flex flex-col gap-4">
            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex absolute -top-6 left-0 glass items-center gap-3 px-4 py-3 z-20"
            >
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white font-bold text-lg leading-none mt-1">4.9</p>
              </div>
              <div>
                <p className="text-white/50 text-xs">Rated by</p>
                <p className="text-amber-400 font-semibold text-sm">500+ Travellers</p>
              </div>
            </motion.div>

            {/* Professional driver card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden md:block absolute top-1/3 -left-10 glass px-4 py-3 z-20 min-w-max"
            >
              <p className="text-white font-bold text-xs mb-2">Professional Drivers</p>
              {["Licensed", "Experienced", "Friendly"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 mb-1">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-xs">✓</span>
                  <span className="text-white/70 text-xs">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Airport transfer card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden md:flex absolute bottom-28 left-0 glass items-center gap-3 px-4 py-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs">Airport Transfer</p>
                <p className="text-white/50 text-xs">Pickup in 15 Minutes</p>
              </div>
            </motion.div>

            {/* Booking form card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="glass-white ml-auto w-full max-w-sm p-6 shadow-2xl"
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80H1440V40C1200 80 1000 0 720 0C440 0 240 80 0 40V80Z"
            fill="#0d0d0d"
          />
        </svg>
      </div>
    </section>
  );
}
