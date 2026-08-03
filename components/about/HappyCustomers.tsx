"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const customers = [
  {
    image: "/customer/cus1.jpeg",
    location: "Wasgamuwa National Park",
    name: "Sarah & Friends",
  },
  {
    image: "/customer/cus2.jpeg",
    location: "Sigiriya Rock",
    name: "David's Sri Lanka Tour",
  },
  {
    image: "/customer/cus3.jpeg",
    location: "Kandy Temple",
    name: "Emily & Family Trip",
  },
  {
    image: "/customer/cus4.jpeg",
    location: "Ella Scenic Route",
    name: "Michael Journey",
  },
  {
    image: "/customer/cus5.jpeg",
    location: "Watterfalls & Nature Trails",
    name: "Anna's Holiday",
  },
  {
    image: "/customer/cus6.jpeg",
    location: "Safari Experience",
    name: "James Family Trip",
  },
];


export default function HappyCustomers() {
  return (
    <section className="relative py-24 bg-[#0b1220] overflow-hidden">

      {/* Background Glow */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_40%)]
      "/>


      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          viewport={{once:true}}
          className="text-center mb-14"
        >

          <div className="
            inline-flex items-center gap-2 
            px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-md
            text-amber-400 text-sm
          ">
            <Star size={16} fill="currentColor"/>
            Customer Memories
          </div>


          <h2 className="
            mt-5 text-4xl md:text-5xl
            font-serif text-white
          ">
            Happy Customers,
            <span className="text-amber-400">
              {" "}Beautiful Journeys
            </span>
          </h2>


          <p className="
            mt-5 max-w-2xl mx-auto
            text-slate-300
          ">
            Every journey creates unforgettable memories.
            Here are some moments shared by our happy travelers
            across Sri Lanka.
          </p>

        </motion.div>



        {/* Gallery */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {customers.map((customer,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:50
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              transition={{
                delay:index*0.1
              }}
              viewport={{
                once:true
              }}
              className="
                group relative
                h-[360px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
              "
            >

              <Image
                src={customer.image}
                alt={customer.location}
                fill
                className="
                  object-cover
                  transition duration-700
                  group-hover:scale-110
                "
              />


              {/* Overlay */}

              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
              "/>



              {/* Content */}

              <div className="
                absolute bottom-0
                p-6
                text-white
              ">

                <h3 className="
                  text-xl
                  font-semibold
                ">
                  {customer.name}
                </h3>

                <p className="
                  text-sm
                  text-amber-300
                  mt-1
                ">
                  📍 {customer.location}
                </p>


              </div>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}