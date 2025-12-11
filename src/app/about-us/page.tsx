"use client";

import Image from "next/image";
import { Truck, Users, Target, Award, Clock, Shield } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              About{" "}
              <span className="relative inline-block">
                <span className="relative z-10">PB11 Transport</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-300 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Your trusted partner for reliable, efficient, and affordable van
              rental services across the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-950 mb-6">
                Our Story
              </h2>
              <p className="text-primary-900 mb-4">
                PB11 Transport was founded with a simple mission: to provide
                businesses and individuals across the UK with access to
                reliable, modern delivery vans that make transportation simple
                and stress-free.
              </p>
              <p className="text-primary-900 mb-4">
                What started as a small fleet of vans has grown into a
                comprehensive transportation solution, serving thousands of
                customers throughout the United Kingdom. We understand that
                every delivery matters, which is why we&apos;ve built our
                business on the foundations of reliability, flexibility, and
                exceptional customer service.
              </p>
              <p className="text-primary-900">
                Today, PB11 Transport continues to innovate and expand, always
                putting our customers&apos; needs first and maintaining the
                highest standards in van rental services.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/van.png"
                  alt="PB11 Transport Fleet"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-950 mb-4">
                Our Mission
              </h3>
              <p className="text-primary-900">
                To provide seamless, affordable, and reliable van rental
                services that empower businesses and individuals to move goods
                efficiently across the UK. We strive to make every delivery
                journey smooth and successful through our modern fleet and
                customer-first approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-950 mb-4">
                Our Vision
              </h3>
              <p className="text-primary-900">
                To become the UK&apos;s most trusted and innovative
                transportation partner, recognized for our commitment to
                excellence, sustainability, and customer satisfaction. We
                envision a future where every delivery need is met with the
                perfect solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-primary-900">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-950">
                Reliability
              </h3>
              <p className="text-primary-900 text-sm">
                We maintain a modern fleet of well-serviced vans that you can
                count on. Your delivery success is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-950">
                Flexibility
              </h3>
              <p className="text-primary-900 text-sm">
                From short-term rentals to long-term solutions, we adapt to
                your schedule and specific transportation needs.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-950">
                Customer First
              </h3>
              <p className="text-primary-900 text-sm">
                Our dedicated support team is always ready to assist you,
                ensuring a smooth experience from booking to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-950 mb-4">
              Why Choose PB11 Transport?
            </h2>
            <p className="text-primary-900">
              Here&apos;s what sets us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-primary-500 mb-4">
                <Truck className="w-12 h-12" />
              </div>
              <h4 className="text-lg font-bold text-primary-950 mb-2">
                Modern Fleet
              </h4>
              <p className="text-primary-900 text-sm">
                All our vans are regularly maintained and equipped with the
                latest features for safe, comfortable transportation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-primary-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-primary-950 mb-2">
                Competitive Pricing
              </h4>
              <p className="text-primary-900 text-sm">
                Transparent, affordable rates with no hidden fees. Get the best
                value for your money.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-primary-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-primary-950 mb-2">
                Easy Booking
              </h4>
              <p className="text-primary-900 text-sm">
                Simple online booking process. Reserve your van in minutes and
                get instant confirmation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-primary-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-primary-950 mb-2">
                24/7 Support
              </h4>
              <p className="text-primary-900 text-sm">
                Our customer support team is available around the clock to
                assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-950 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-900 text-lg mb-8">
            Join thousands of satisfied customers who trust PB11 Transport for
            their delivery needs. Book your van today and experience the
            difference.
          </p>
          <button
            className="px-8 py-4 rounded-md text-white text-lg font-semibold"
            style={{ backgroundColor: "#52D172" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#3DBA5A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#52D172")
            }
          >
            Book Your Van Now
          </button>
        </div>
      </section>
    </div>
  );
}
