"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import HowItWorks from "./components/HowItWorks";
import Network from "./components/Network";
import Specialties from "./components/Specialties";
import CalculatePrice from "./components/CalculatePrice";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Specialties />
      <Network />
      <HowItWorks />
      <CalculatePrice />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}