import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/tours/Hero";
import FeaturedTours from "@/components/tours/FeaturedTours";
import DestinationExplorer from "@/components/tours/DestinationExplorer";
import TravelExperiences from "@/components/tours/TravelExperiences";
import JourneyTimeline from "@/components/tours/JourneyTimeline";
import Footer from "@/components/layout/Footer";
import FaqCTA from "@/components/tours/FaqCTA";
import TourPackages from "@/components/tours/TourPackages";

export default function ToursPage() {
  return (
    
    <main className="bg-[#050816]">
      <Navbar/>
      <Hero />
      <FeaturedTours />
      <DestinationExplorer />
      <TravelExperiences />
      <JourneyTimeline />
      <TourPackages/>
      <FaqCTA/>
      <Footer />
    </main>
  );
}