"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      
     
className="
relative
min-h-screen
items-center
overflow-hidden
bg-[#0F172A]
pt-35
"
>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-amber-400/20 px-5 py-2 text-sm font-semibold text-amber-400">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Ready For Your
            <span className="text-amber-400"> Next Ride?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Whether you need an airport transfer, city taxi,
            wildlife safari, or a private tour, we're available
            24/7 to make your journey safe and comfortable.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+94 76 343 3434",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@wasgamutaxi.com",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Wasgamuwa, Sri Lanka",
              },
              {
                icon: Clock,
                title: "Working Hours",
                value: "Open 24 Hours",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all"
              >
                <div className="rounded-2xl bg-amber-400 p-4">
                  <item.icon
                    className="text-black"
                    size={26}
                  />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    {item.title}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.value}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-amber-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-amber-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-amber-400"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-amber-400"
              />

              <button
                type="submit"
                className="group mt-3 flex items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-semibold text-black transition hover:bg-amber-500"
              >
                Send Message

                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}