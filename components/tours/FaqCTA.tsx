"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ArrowRight,
  Star,
  ShieldCheck,
  Headphones,
  CarFront,
} from "lucide-react";

const faqs = [
  {
    question: "Do you offer customised tour packages?",
    answer:
      "Yes. We create personalised itineraries based on your travel dates, interests, budget and preferred destinations throughout Sri Lanka.",
  },
  {
    question: "Can you pick us up from the airport or hotel?",
    answer:
      "Absolutely. We provide airport transfers and hotel pickups anywhere in Sri Lanka for a smooth start to your journey.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "We offer comfortable cars, SUVs and vans suitable for solo travellers, couples, families and larger groups.",
  },
  {
    question: "Can I change my itinerary during the tour?",
    answer:
      "Yes. Whenever possible, our flexible tours allow itinerary adjustments based on your preferences and travel conditions.",
  },
  {
    question: "How do I book a tour?",
    answer:
      "Simply contact us through WhatsApp, phone or our enquiry form. We'll confirm availability and help you plan the perfect trip.",
  },
];

export default function FaqCTA() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#050816] py-28">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="container relative mx-auto px-6">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-5xl font-black text-white">
              Everything You Need To Know
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Find answers to common questions before planning your Sri Lankan adventure.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-7 text-left"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-full bg-amber-400 p-2"
                    >
                      <Plus className="text-black" size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className="px-7 pb-7 leading-8 text-slate-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-28">
        <div className="container mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px]"
          >
            {/* Background Image */}
            <Image
              src="/images/tours/cta.jpg"
              alt="Sri Lanka"
              width={1800}
              height={900}
              className="h-[550px] w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/50" />

            {/* Glow */}
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[150px]" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-8 md:px-16">

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-amber-300"
                >
                  PLAN YOUR ADVENTURE
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl"
                >
                  Ready to Visit
                  <span className="block text-amber-400">
                    Sri Lanka?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
                >
                  Whether you're planning a relaxing holiday, an adventurous
                  getaway or a family vacation, we'll design a personalised
                  tour that matches your travel style.
                </motion.p>

                {/* Trust */}
                <div className="mt-10 flex flex-wrap gap-6">

                  <div className="flex items-center gap-2 text-white">
                    <Star className="fill-yellow-400 text-yellow-400" size={18} />
                    4.9 Customer Rating
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="text-emerald-400" size={18} />
                    Licensed Drivers
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <Headphones className="text-sky-400" size={18} />
                    24/7 Support
                  </div>

                </div>

                {/* Buttons */}
                <div className="mt-12 flex flex-wrap gap-5">
                
                <a
  href={`https://wa.me/94763433434?text=${encodeURIComponent(
    "Hello! I would like to book a custom tour with Wasgamuwa Taxi & Tours."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-black transition hover:shadow-[0_0_35px_rgba(251,191,36,.45)]">
    Request a Custom Tour

    <ArrowRight className="transition group-hover:translate-x-1" />
  </button>
</a>

                  <Link href="/contact">
                  <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">

                    <CarFront size={18} />

                    Contact Us

                  </button>
                  </Link>

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}