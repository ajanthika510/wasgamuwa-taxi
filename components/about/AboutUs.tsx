"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#04030A]">

      {/* HERO */}

      <section
        id="hero"
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-[#04030A]
        "
      >

        {/* Background Image */}

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about-bg.avif"
            alt="Wasgamuwa Taxi and Tours"
            fill
            priority
            className="object-cover"
          />
        </motion.div>


        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/75
            to-black/20
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/40
            via-transparent
            to-[#04030A]
          "
        />


        {/* Purple Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            -left-52
            top-10
            h-[700px]
            w-[700px]
            rounded-full
            bg-purple-700
            blur-[180px]
          "
        />


        {/* Amber Glow */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="
            absolute
            right-[-150px]
            bottom-[-100px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-amber-500/20
            blur-[180px]
          "
        />


        {/* Grid Background */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />


        {/* Hero Container */}

        <div
          className="
            relative
            z-10
            container
            mx-auto
            grid
            items-center
            gap-16
            px-6
            py-32
            lg:grid-cols-2
          "
        >

          {/*  HERO LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/10
                px-5
                py-2
                backdrop-blur-xl
              "
            >

              <ShieldCheck
                className="text-amber-400"
                size={18}
              />

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-amber-300
                "
              >
                Premium Taxi & Tours
              </span>

            </motion.div>


            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                mt-8
                font-[Playfair_Display]
                text-6xl
                font-black
                leading-[1]
                text-white
                md:text-8xl
              "
            >

              Explore

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-amber-300
                  via-yellow-200
                  to-white
                  bg-clip-text
                  text-transparent
                "
              >
                Sri Lanka
              </span>

              <br />

              In Luxury

            </motion.h1>


            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                mt-8
                max-w-xl
                text-xl
                leading-9
                text-white/70
              "
            >
              Airport transfers, safari adventures and custom
              island tours with professional chauffeurs and
              premium vehicles designed for unforgettable journeys.
            </motion.p>


            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
                mt-12
                flex
                flex-wrap
                gap-5
              "
            >

              <Link href="/#hero">

                <button
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-amber-400
                    to-yellow-300
                    px-8
                    py-4
                    font-semibold
                    text-black
                    shadow-[0_15px_60px_rgba(255,191,0,.35)]
                    transition
                    hover:scale-105
                  "
                >

                  Book Your Ride

                  <ArrowRight
                    className="
                      transition
                      group-hover:translate-x-2
                    "
                  />

                </button>

              </Link>


              <a
  href="#story"
  className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-white/20
    bg-white/10
    px-8
    py-4
    font-semibold
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:scale-105
    hover:bg-white/20
  "
>
  <Play size={18} />

  Watch Story
</a>

            </motion.div>


            {/* Hero Stats */}

            <div
              className="
                mt-16
                grid
                grid-cols-3
                gap-4
                sm:gap-5
              "
            >

              {[
                {
                  number: "10K+",
                  title: "Travellers",
                  icon: Users,
                },
                {
                  number: "24/7",
                  title: "Support",
                  icon: ShieldCheck,
                },
                {
                  number: "Island",
                  title: "Coverage",
                  icon: MapPin,
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1 + index * 0.15,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/10
                      p-5
                      backdrop-blur-xl
                      sm:p-6
                    "
                  >

                    <Icon
                      className="text-amber-400"
                      size={20}
                    />

                    <h3
                      className="
                        mt-4
                        text-2xl
                        font-black
                        text-white
                        sm:text-3xl
                      "
                    >
                      {item.number}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        text-white/60
                        sm:text-sm
                      "
                    >
                      {item.title}
                    </p>

                  </motion.div>
                );

              })}

            </div>

          </motion.div>


          {/*  HERO RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              hidden
              min-h-[700px]
              lg:block
            "
          >

            {/* Review Card */}

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                right-0
                top-20
                z-20
                w-72
                rounded-[35px]
                border
                border-white/10
                bg-white/10
                p-8
                backdrop-blur-2xl
              "
            >

              <Star
                className="
                  fill-amber-400
                  text-amber-400
                "
              />

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                "
              >
                4.9/5
              </h3>

              <p
                className="
                  mt-3
                  text-white/70
                "
              >
                Trusted by thousands of travellers
                across Sri Lanka.
              </p>

            </motion.div>


            
          </motion.div>

        </div>


        {/* Scroll Indicator */}

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            z-20
            -translate-x-1/2
          "
        >

          <div
            className="
              flex
              h-14
              w-8
              justify-center
              rounded-full
              border
              border-white/20
            "
          >

            <div
              className="
                mt-2
                h-3
                w-3
                rounded-full
                bg-amber-400
              "
            />

          </div>

        </motion.div>

      </section>


      {/* PREMIUM STORY */}

      <section
        id="story"
        className="
          relative
          overflow-hidden
          bg-white
          py-32
        "
      >

        {/* Background Decoration */}

        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-amber-100
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-purple-100
            blur-[140px]
          "
        />


        <div
          className="
            container
            relative
            mx-auto
            px-6
          "
        >

          <div
            className="
              grid
              items-center
              gap-20
              lg:grid-cols-2
            "
          >

            {/* =================================================
                STORY IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              {/* Main Image */}

              <div
                className="
                  relative
                  h-[560px]
                  overflow-hidden
                  rounded-[45px]
                  sm:h-[650px]
                "
              >

                <Image
                  src="/images/driver.png"
                  alt="Professional Wasgamuwa Taxi driver"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                  "
                />

              </div>


              {/* Experience Card */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-4
                  top-10
                  rounded-[30px]
                  border
                  border-white/30
                  bg-white/85
                  p-7
                  shadow-2xl
                  backdrop-blur-xl
                  sm:-right-10
                  sm:p-8
                "
              >

                <h3
                  className="
                    text-4xl
                    font-black
                    text-amber-500
                    sm:text-5xl
                  "
                >
                  10+
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  Years of Experience
                </p>

              </motion.div>


              {/* Rating Card */}

              <motion.div
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -left-3
                  bottom-10
                  max-w-[260px]
                  rounded-[28px]
                  bg-[#050816]
                  p-6
                  text-white
                  shadow-[0_20px_70px_rgba(0,0,0,.35)]
                  sm:-left-8
                  sm:bottom-14
                  sm:p-7
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Star
                    className="
                      fill-amber-400
                      text-amber-400
                    "
                    size={20}
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      sm:text-base
                    "
                  >
                    4.9 Customer Rating
                  </span>

                </div>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/70
                  "
                >
                  Trusted by thousands of travellers
                  for reliable and comfortable journeys.
                </p>

              </motion.div>

            </motion.div>


            {/* =================================================
                STORY CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              {/* Label */}

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-amber-100
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-amber-600
                "
              >
                Our Story
              </span>


              {/* Heading */}

              <h2
                className="
                  mt-8
                  font-[Playfair_Display]
                  text-5xl
                  font-black
                  leading-tight
                  text-slate-900
                  md:text-6xl
                "
              >

                More Than A Taxi Service,

                <br />

                We Create

                <span className="text-amber-500">
                  {" "}Travel Experiences
                </span>

              </h2>


              {/* Paragraph */}

              <p
                className="
                  mt-8
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                Every journey tells a story. Whether you're
                arriving at the airport, exploring wildlife,
                discovering hidden beaches, or travelling
                between cities, Wasgamuwa Taxi ensures every
                kilometre is comfortable, safe and memorable.
              </p>


              <p
                className="
                  mt-6
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                We combine professional drivers, premium
                vehicles and local knowledge to give every
                traveller the confidence to explore Sri Lanka
                without stress.
              </p>


              {/* Quote */}

              <div
                className="
                  mt-10
                  rounded-[30px]
                  border-l-4
                  border-amber-500
                  bg-amber-50
                  p-8
                "
              >

                <p
                  className="
                    text-lg
                    italic
                    leading-9
                    text-slate-700
                    sm:text-xl
                  "
                >
                  "Our goal isn't simply to take you from one
                  destination to another. We want every traveller
                  to remember the journey itself."
                </p>

                <h4
                  className="
                    mt-6
                    font-semibold
                    text-slate-900
                  "
                >
                  — Wasgamuwa Taxi & Tours
                </h4>

              </div>


              {/* Features */}

              <div
                className="
                  mt-12
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                {[
                  "Professional Chauffeurs",
                  "Airport Transfers",
                  "Private Safari Tours",
                  "Island Wide Coverage",
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      p-5
                      transition
                      hover:border-amber-300
                      hover:bg-amber-50
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500
                        text-white
                      "
                    >

                      <ShieldCheck size={22} />

                    </div>

                    <span
                      className="
                        font-semibold
                        text-slate-700
                      "
                    >
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}