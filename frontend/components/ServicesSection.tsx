"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Car, PawPrint, Map, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop-off services across all major airports in Sri Lanka.",
    image: "/service-airport.jpg",
    color: "from-blue-500/30 to-blue-700/30",
    accentColor: "bg-blue-500",
  },
  {
    icon: Car,
    title: "Taxi Service",
    description:
      "Comfortable local and long-distance taxi rides with experienced licensed drivers.",
    image: "/service-taxi.jpg",
    color: "from-amber-500/30 to-amber-700/30",
    accentColor: "bg-amber-500",
  },
  {
    icon: PawPrint,
    title: "Safari Tours",
    description:
      "Travel to Wasgamuwa and other national parks with dedicated transport and expert guides.",
    image: "/service-safari.jpg",
    color: "from-green-500/30 to-green-700/30",
    accentColor: "bg-green-500",
  },
  {
    icon: Map,
    title: "Custom Tours",
    description:
      "Create personalised travel experiences across Sri Lanka tailored to your interests.",
    image: "/service-tours.jpg",
    color: "from-purple-500/30 to-purple-700/30",
    accentColor: "bg-purple-500",
  },
];




export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Travel With Comfort &amp; Confidence
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1a1a1a] border border-white/10"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${svc.color} opacity-60`} />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

                {/* Icon */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${svc.accentColor} flex items-center justify-center shadow-lg`}>
                  <svc.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{svc.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-amber-400 font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
