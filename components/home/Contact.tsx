"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    country: "United Kingdom",
    image: "/testimonials/client1.jpg",
    rating: 5,
    review:
      "Fantastic service from Colombo Airport to Sigiriya. The driver was professional, punctual, and the vehicle was spotless. Highly recommended!",
  },
  {
    id: 2,
    name: "Emily Johnson",
    country: "Australia",
    image: "/testimonials/client2.jpg",
    rating: 5,
    review:
      "We booked a 5-day Sri Lanka tour and everything was perfectly organised. Friendly drivers, comfortable vehicles, and excellent communication.",
  },
  {
    id: 3,
    name: "David Miller",
    country: "Canada",
    image: "/testimonials/client3.jpg",
    rating: 5,
    review:
      "Best taxi service we've experienced. Airport pickup was on time and our safari trip was unforgettable. We'll definitely use them again.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8FAFC] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-amber-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-slate-600">
            Thousands of happy travellers have trusted us for airport transfers,
            private taxi services, and unforgettable tours across Sri Lanka.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 rounded-full bg-amber-100 p-3">
                <Quote className="h-6 w-6 text-amber-500" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.country}
                  </p>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 rounded-[32px] bg-slate-900 px-8 py-10 text-center text-white md:grid-cols-4"
        >
          <div>
            <h3 className="text-4xl font-bold text-amber-400">10K+</h3>
            <p className="mt-2 text-slate-300">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-400">4.9★</h3>
            <p className="mt-2 text-slate-300">Average Rating</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-400">24/7</h3>
            <p className="mt-2 text-slate-300">Customer Support</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-400">100%</h3>
            <p className="mt-2 text-slate-300">Safe Journeys</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}