import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Tours from "@/components/home/Tours";
import Testimonials from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Suspense fallback={null}>
      <Hero />
      </Suspense>
      <WhyChooseUs />
      <Services />
      <Tours />
      <Testimonials/>
      <Footer />
    </main>
  );
}