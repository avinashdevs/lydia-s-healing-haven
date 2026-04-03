import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SiddhaSection from "@/components/SiddhaSection";
import DoctorSection from "@/components/DoctorSection";
import VideosSection from "@/components/VideosSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SiddhaSection />
      <DoctorSection />
      <VideosSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
