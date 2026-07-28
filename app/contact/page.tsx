import ContactSection from "@/components/contact/ContactSection";
import Navbar from "@/components/layout/Navbar";  
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Other Sections */}
      <Navbar />
      <ContactSection />
      <Footer/>
    </main>
  );
}