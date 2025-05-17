import { Button } from "@/components/ui/button";
import MedicalNav from "./medical-nav";
import HeroSection from "@/components/ui/hero-section";
import AboutUs from "@/components/ui/about_us_component";
import OurServices from "@/components/ui/our_services_component";
import ExaminationProcess from "@/components/ui/examination-process";
import Departments from "@/components/ui/department";
import BookingCTA from "@/components/ui/booking-cta";
import LatestNews from "@/components/ui/latest-news";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MedicalNav />
      <HeroSection />
      <div className="pt-16">
        <AboutUs />
        <OurServices />
        <ExaminationProcess />
        <Departments />
        <BookingCTA />
        <LatestNews />
      </div>
      <Footer/>
    </main>
  );
}
