"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

const tours = [
  {
    title: "Ella Scenic Escape",
    location: "Ella",
    rating: 4.9,
    image: "/images/ellaAd.jpg",
    tag: "Best Seller",
  },
  {
    title: "Sigiriya Heritage Tour",
    location: "Sigiriya",
    rating: 5.0,
    image: "/images/sig.jpg",
    tag: "Popular",
  },
  {
    title: "Yala Wildlife Safari",
    location: "Yala",
    rating: 4.8,
    image: "/images/wild.png",
    tag: "Adventure",
  },
];

export default function FeaturedTours() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Featured Tours
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Handpicked Adventures
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Explore Sri Lanka with carefully curated tours designed for comfort,
            culture, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {tours.map((tour, index) => (
            <motion.article
              key={tour.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full"
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-black">
                  {tour.tag}
                </span>

                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-sm text-white backdrop-blur-md">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {tour.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {tour.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-300">

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {tour.location}
                  </span>

                  <Link href="/#hero">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(251,191,36,.35)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 font-semibold text-black"
                  >
                    Book Tour
                    <ArrowRight size={18} />
                  </motion.button>
                  </Link>

                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}