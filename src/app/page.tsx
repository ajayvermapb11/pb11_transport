"use client";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import HowItWorks from "./components/HowItWorks";
import Network from "./components/Network";
import Specialties from "./components/Specialties";
import CalculatePrice from "./components/CalculatePrice";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Partners />
      <Specialties />
      <Network />
      <HowItWorks />
      <CalculatePrice />
      <Services />
      <Testimonials />
    </div>
  );
}
