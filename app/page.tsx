"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Tours from "@/components/home/Tours";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";


export default function Home() {


useEffect(() => {

  if(window.location.hash === "#services") {


    setTimeout(() => {


      const services =
      document.getElementById("services");


      if(services) {

        services.scrollIntoView({
          behavior:"smooth",
          block:"start",
        });

      }


    },500);


  }


},[]);




return (
<main className="min-h-screen bg-[var(--background)]">

<Navbar />


<Suspense fallback={null}>
  <Hero />
</Suspense>

<div className="-mt-16 relative z-30">
   <TrustBar />
</div>

<WhyChooseUs />


<section id="services">
  <Services />
</section>


<Tours />


<Testimonials />


<Footer />


</main>
);

}