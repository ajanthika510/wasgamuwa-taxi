"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Ready to Travel?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-3 max-w-md mx-auto"
          >
            Contact Dileep Prasad directly or fill in the form below and we&apos;ll respond within minutes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: "Phone / WhatsApp",
                value: "+94 76 343 3434",
                href: "tel:+94763433434",
                color: "bg-green-500/15",
                iconColor: "text-green-400",
              },
              {
                icon: Mail,
                label: "Email",
                value: "wasgamuwtaxi@gmail.com",
                href: "mailto:wasgamuwtaxi@gmail.com",
                color: "bg-amber-500/15",
                iconColor: "text-amber-400",
              },
              {
                icon: MapPin,
                label: "Based in",
                value: "Wasgamuwa, Sri Lanka",
                href: "#",
                color: "bg-blue-500/15",
                iconColor: "text-blue-400",
              },
              {
                icon: Clock,
                label: "Available",
                value: "24 hours, 7 days a week",
                href: "#",
                color: "bg-purple-500/15",
                iconColor: "text-purple-400",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass flex items-center gap-4 p-4 hover:border-amber-500/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94763433434?text=Hello%20Dileep!%20I%20would%20like%20to%20book%20a%20ride."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-center"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10 gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-400" />
                  <p className="text-white font-bold text-lg">Message Sent!</p>
                  <p className="text-white/50 text-sm text-center">
                    Dileep will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-amber-400 outline-none transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        placeholder="Phone Number"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-amber-400 outline-none transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-amber-400 outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Your message — e.g. where you'd like to go, travel dates, number of passengers..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-amber-400 outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
