import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PillarsSection from "./components/PillarsSection";
import ScheduleSection from "./components/JadwalSection";
import CardGallery from "./components/CardGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ScheduleSection />
      <CardGallery />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
