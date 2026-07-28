"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/lib/validation";
import { MapPin, Navigation, CalendarDays, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Booking data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <div id="booking">
      <h3 className="text-gray-900 font-bold text-lg mb-1 flex items-center gap-2">
        🚗 Book Your Ride
      </h3>
      <p className="text-gray-500 text-xs mb-4">Easy booking • No hidden charges • Instant confirmation</p>

      <AnimatePresence>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center py-6 gap-3"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
            <p className="text-gray-800 font-bold text-base">Booking Confirmed!</p>
            <p className="text-gray-500 text-sm text-center">
              We'll contact you shortly on +94 76 343 3434
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {/* Pickup */}
            <div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:border-amber-400 transition-colors">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <input
                  {...register("pickupLocation")}
                  placeholder="Pickup Location"
                  className="bg-transparent text-gray-800 text-sm flex-1 outline-none placeholder:text-gray-400"
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-red-500 text-xs mt-1">{errors.pickupLocation.message}</p>
              )}
            </div>

            {/* Destination */}
            <div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:border-amber-400 transition-colors">
                <Navigation className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <input
                  {...register("destination")}
                  placeholder="Destination"
                  className="bg-transparent text-gray-800 text-sm flex-1 outline-none placeholder:text-gray-400"
                />
              </div>
              {errors.destination && (
                <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>
              )}
            </div>

            {/* Date + Time row */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:border-amber-400 transition-colors">
                  <CalendarDays className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <input
                    {...register("date")}
                    type="date"
                    className="bg-transparent text-gray-800 text-xs flex-1 outline-none"
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:border-amber-400 transition-colors">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <input
                    {...register("time")}
                    type="time"
                    className="bg-transparent text-gray-800 text-xs flex-1 outline-none"
                  />
                </div>
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Passengers */}
            <div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:border-amber-400 transition-colors">
                <Users className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <select
                  {...register("passengers")}
                  className="bg-transparent text-gray-800 text-sm flex-1 outline-none"
                >
                  <option value="">Passengers</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
              {errors.passengers && (
                <p className="text-red-500 text-xs mt-1">{errors.passengers.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary justify-center w-full mt-1"
            >
              {isSubmitting ? "Processing..." : "Book Now"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-center text-gray-400 text-xs">
              Or call us directly:{" "}
              <a href="tel:+94763433434" className="text-amber-500 font-semibold hover:underline">
                +94 76 343 3434
              </a>
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
