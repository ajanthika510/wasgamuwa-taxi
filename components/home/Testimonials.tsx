"use client";

import { motion } from "framer-motion";
import { Quote, Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Emily Antony",
    location: "London, United Kingdom",
    review:
      "Excellent service from start to finish. The driver arrived early, the vehicle was spotless, and the journey was incredibly comfortable. Highly recommended.",
  },
  {
    name: "Daniel Wilson",
    location: "Melbourne, Australia",
    review:
      "Booking was effortless and communication was excellent. The driver was professional and made our family trip completely stress-free.",
  },
  {
    name: "Sophia Brown",
    location: "Toronto, Canada",
    review:
      "The best taxi service we used during our Sri Lanka vacation. Safe driving, luxury vehicle, and exceptional hospitality.",
  },
  {
    name: "Michael Lee",
    location: "Singapore",
    review:
      "Punctual, friendly, and reliable. Every journey was smooth and comfortable. I'll definitely book again on my next visit.",
  },
];

const stats = [
  {
    number: "4.9/5",
    label: "Average Rating",
  },
  {
    number: "2,500+",
    label: "Happy Customers",
  },
  {
    number: "15,000+",
    label: "Successful Trips",
  },
  {
    number: "100%",
    label: "Professional Drivers",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-black/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#B8860B] uppercase">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#111827] md:text-5xl">
            Trusted by Travelers Across Sri Lanka
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From airport transfers to long-distance journeys, our professional
            drivers and premium vehicles deliver an experience our customers
            genuinely love.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              whileHover={{
                y: -8,
                transition: { duration: .25 },
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6">
                <Quote
                  size={54}
                  className="text-[#D4AF37]/20 transition-transform duration-300 group-hover:rotate-12"
                />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-[#111827]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                  <ShieldCheck size={18} />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-24 rounded-[32px] bg-[#111827] px-8 py-12"
        >
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}