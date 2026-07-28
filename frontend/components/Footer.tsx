"use client";

import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";

const SocialIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d={d} />
  </svg>
);

const socialIcons = [
  { d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5a14 14 0 0011 0" },
  { d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#tours", label: "Tours" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Airport Transfers",
  "City Taxi Service",
  "Wildlife Safari Tours",
  "Custom Island Tours",
  "Hotel Pickups",
  "Night Transfers",
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Wasgamuwa</p>
                <p className="text-amber-400 text-xs font-semibold">Taxi & Tours</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Your trusted travel partner in Sri Lanka. Comfortable, safe, and reliable transport for every journey.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors text-white/60 hover:text-white"
                >
                  <SocialIcon d={icon.d} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/45 hover:text-amber-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+94763433434" className="flex items-start gap-3 text-white/45 hover:text-amber-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>+94 76 343 3434<br /><span className="text-white/30 text-xs">Dileep Prasad</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:wasgamuwtaxi@gmail.com" className="flex items-start gap-3 text-white/45 hover:text-amber-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  wasgamuwtaxi@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/45 text-sm">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  Wasgamuwa, Sri Lanka
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Wasgamuwa Taxi & Tours. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Operated by Dileep Prasad · Sri Lanka
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/94763433434?text=Hello%20Dileep!%20I%20would%20like%20to%20book%20a%20ride."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
