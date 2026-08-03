import AboutPage from "@/components/about/AboutUs";
import HappyCustomer from "@/components/about/HappyCustomers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
        <main className="min-h-screen bg-[var(--background)]">
      {/* Other Sections */}
        <Navbar />
      <AboutPage />
      <HappyCustomer />
      <Footer />
    </main>
  );
}