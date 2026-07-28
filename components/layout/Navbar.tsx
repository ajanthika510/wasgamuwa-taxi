"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Tours", href: "./tours" },
  { name: "About Us", href: "./about" },
  { name: "Contact", href: "./contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo_wasgamuwa.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Wasgamuwa
              </h2>
              <p className="-mt-1 text-sm font-semibold text-amber-500">
                Taxi & Tours
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-zinc-700 transition hover:text-amber-500"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+94763434343"
              className="flex items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm transition hover:shadow-lg"
            >
              <Phone className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">
                +94 76 343 3434
              </span>
            </a>

            <button className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-amber-500">
              Book Now
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed left-0 top-20 z-40 w-full bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-b py-4 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button className="mt-6 rounded-xl bg-amber-400 py-4 font-semibold">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}