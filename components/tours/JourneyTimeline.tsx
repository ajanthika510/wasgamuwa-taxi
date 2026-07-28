"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Camera,
  Mountain,
  Trees,
  Hotel,
  CarFront,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    time: "07:00 AM",
    title: "Hotel Pickup",
    description:
      "Your private chauffeur arrives at your hotel and welcomes you aboard.",
    icon: CarFront,
    color: "from-amber-400 to-orange-500",
  },
  {
    time: "08:30 AM",
    title: "Breakfast Stop",
    description:
      "Enjoy authentic Sri Lankan breakfast while taking in beautiful scenery.",
    icon: Coffee,
    color: "from-orange-500 to-red-500",
  },
  {
    time: "10:30 AM",
    title: "Sightseeing",
    description:
      "Visit iconic landmarks, waterfalls and breathtaking viewpoints.",
    icon: Camera,
    color: "from-cyan-500 to-blue-500",
  },
  {
    time: "01:30 PM",
    title: "Nature Experience",
    description:
      "Relax and explore nature parks, tea estates and wildlife reserves.",
    icon: Trees,
    color: "from-emerald-500 to-green-500",
  },
  {
    time: "05:00 PM",
    title: "Mountain Sunset",
    description:
      "Capture unforgettable sunset views before returning.",
    icon: Mountain,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    time: "08:00 PM",
    title: "Hotel Drop-off",
    description:
      "End your journey safely and comfortably back at your hotel.",
    icon: Hotel,
    color: "from-pink-500 to-rose-500",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container relative mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-amber-300">
            Your Journey
          </span>

          <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">
            A Day Filled With Memories
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every tour is carefully planned to give you a relaxing,
            comfortable and unforgettable travel experience.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">

          {/* Animated Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            style={{ originY: 0 }}
            className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-400 via-orange-500 to-cyan-500 lg:block"
          />

          <div className="space-y-14">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className={`flex items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="w-full lg:w-[44%]"
                  >
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40">

                      <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-amber-300">
                        {item.time}
                      </span>

                      <div className="mt-6 flex items-center gap-4">

                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                        >
                          <Icon className="text-white" size={30} />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-slate-400">
                            {item.description}
                          </p>
                        </div>

                      </div>

                    </div>
                  </motion.div>

                  {/* Center Marker */}
                  <div className="relative hidden lg:flex w-[12%] justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(251,191,36,0)",
                          "0 0 35px rgba(251,191,36,.8)",
                          "0 0 0 rgba(251,191,36,0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400"
                    >
                      <div className="h-3 w-3 rounded-full bg-black" />
                    </motion.div>
                  </div>

                  <div className="hidden lg:block lg:w-[44%]" />
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-lg font-semibold text-black transition hover:shadow-[0_0_40px_rgba(251,191,36,.35)]">
            Book This Experience
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}