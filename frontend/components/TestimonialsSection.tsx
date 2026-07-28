"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    location: "Australia",
    rating: 5,
    text: "Dileep was absolutely fantastic! He picked us up from the airport on time, drove safely, and gave us great recommendations for our trip. Highly recommend Wasgamuwa Taxi & Tours!",
    avatar: "🧑‍🦰",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    location: "United Kingdom",
    rating: 5,
    text: "We booked a full-day safari to Wasgamuwa National Park. The vehicle was spotless, the driver was knowledgeable about wildlife, and we saw elephants! An unforgettable experience.",
    avatar: "👩‍🦳",
  },
  {
    id: 3,
    name: "Klaus Müller",
    location: "Germany",
    rating: 5,
    text: "Best taxi service in Sri Lanka. Professional, punctual, and very reasonably priced. Dileep arranged our entire island tour over 5 days perfectly. Will use again!",
    avatar: "👨‍🦱",
  },
  {
    id: 4,
    name: "Priya Sharma",
    location: "India",
    rating: 5,
    text: "Booked airport transfer late at night and Dileep was there exactly on time. Very comfortable vehicle, AC was perfect. Great English communication too.",
    avatar: "👩",
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Used their service for 4 days exploring Sri Lanka. Absolutely reliable, honest pricing, and Dileep has amazing local knowledge. I felt completely safe throughout.",
    avatar: "👨",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            What Our Travellers Say
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 flex flex-col gap-4 hover:border-amber-500/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-amber-500/40" />
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom extra 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="glass p-6 flex flex-col gap-4 hover:border-amber-500/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-amber-500/40" />
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
