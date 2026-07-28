"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Wasgamuwa Safari Tour",
    location: "Wasgamuwa, North Central",
    duration: "Full Day",
    rating: 4.9,
    reviews: 127,
    price: "From $45",
    image: "/service-safari.jpg",
    tag: "Most Popular",
    tagColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Sigiriya & Dambulla",
    location: "North Central Province",
    duration: "Full Day",
    rating: 4.8,
    reviews: 89,
    price: "From $55",
    image: "/service-tours.jpg",
    tag: "Cultural",
    tagColor: "bg-purple-500",
  },
  {
    id: 3,
    title: "Airport Transfer",
    location: "Bandaranaike International",
    duration: "3-5 Hours",
    rating: 5.0,
    reviews: 203,
    price: "From $35",
    image: "/service-airport.jpg",
    tag: "Fast Booking",
    tagColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Scenic Sri Lanka Drive",
    location: "Island-wide",
    duration: "Multi-day",
    rating: 4.9,
    reviews: 64,
    price: "From $80",
    image: "/service-taxi.jpg",
    tag: "Custom",
    tagColor: "bg-blue-500",
  },
];

export default function ToursSection() {
  return (
    <section id="tours" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              FEATURED TOURS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Explore Sri Lanka
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Tours <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Tour cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-colors cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Tag */}
                <span className={`absolute top-3 left-3 ${tour.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {tour.tag}
                </span>
                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-white text-xs font-semibold">{tour.rating}</span>
                  <span className="text-white/50 text-xs">({tour.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-base mb-2">{tour.title}</h3>
                <div className="flex items-center gap-1 text-white/50 text-xs mb-1">
                  <MapPin className="w-3 h-3 text-amber-500" /> {tour.location}
                </div>
                <div className="flex items-center gap-1 text-white/50 text-xs mb-4">
                  <Clock className="w-3 h-3 text-amber-500" /> {tour.duration}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold text-sm">{tour.price}</span>
                  <a href="#booking" className="text-xs bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-white font-semibold px-3 py-1.5 rounded-full transition-all">
                    Book
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
