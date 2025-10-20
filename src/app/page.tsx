"use client";
import React, { useState } from "react";
import {
  Package,
  Truck,
  MapPin,
  Star,
  Send,
  Plane,
  Boxes,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const [bookingDate, setBookingDate] = useState("");
  const [parcelType, setParcelType] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* Light mode logo (black) */}
              <Image
                src="/logo.png"
                alt="PB11 Transport Logo"
                width={232}
                height={32}
                className="dark:hidden"
              />
              {/* Dark mode logo (white) */}
              <Image
                src="/logo-white.png"
                alt="PB11 Transport Logo"
                width={232}
                height={32}
                className="hidden dark:block"
              />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary"
              >
                Home
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary"
              >
                Tracking
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary"
              >
                Shipping
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary"
              >
                Location
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary"
              >
                Support
              </a>
              <button className="bg-primary-400 text-white px-6 py-2 rounded-md hover:bg-primary-500">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
                Largest and reliable courier service{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">in your city</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-200 -rotate-1"></span>
                </span>
              </h1>
              <p className="text-text-secondary text-lg mb-8">
                Duis ac sem libero id sagittis nelit in urna fusce in lorem
                vitae mi faucet sed qui senisid.
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <button className="bg-primary-400 text-white px-8 py-3 rounded-md hover:bg-primary-500 font-semibold">
                  Check
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/van.png"
                  alt="Courier Illustration"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
              </div>
              <div className="absolute top-10 right-10 text-yellow-400">
                <Image
                  src="/assets/svgs/star.svg"
                  alt="Stars Decoration"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-70">
            <div className="flex flex-col items-center">
              <Package className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                DPD
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                DHL
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Send className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                EVRi
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                FedEx
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Boxes className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                UPS
              </span>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingBag className="w-14 h-14 text-gray-500 dark:text-white" />
              <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
                Amazon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              How PB11 Transport works
            </h2>
            <p className="text-text-secondary">
              Fusce tellus mi et libero voluptate id augue ex sit amet neque
              mollis eu hight tellus lorem
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-400 rounded-2xl mb-4">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Booking</h3>
              <p className="text-text-secondary text-sm">
                Libero lorem id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisi quam
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-400 rounded-2xl mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Packing</h3>
              <p className="text-text-secondary text-sm">
                Libero lorem id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisi quam
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-400 rounded-2xl mb-4">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transportation</h3>
              <p className="text-text-secondary text-sm">
                Libero lorem id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisi quam
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-400 rounded-2xl mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-text-secondary text-sm">
                Libero lorem id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisi quam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <Image
                  src="/assets/images/van.png"
                  alt="Courier Illustration"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                We Have the largest Network
              </h2>
              <p className="text-text-secondary mb-6">
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas vivamus arcu felis
                bibendum ut tristique et egestas quis ipsum suspendisse ultrices
                gravida dictum fusce ut placerat orci nulla pellentesque
                dignissim enim sit amet venenatis urna cursus eget nunc
                scelerisque viverra mauris in aliquam.
              </p>
              <button className="bg-primary-400 text-white px-8 py-3 rounded-md hover:bg-primary-500 font-semibold">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Our specialties
            </h2>
            <p className="text-text-secondary">
              Mauris mattis libero et consectetur id sagittis nelit in urna
              fusce in lorem vitae id mi faucet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  01
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Easy to order</h3>
                <p className="text-text-secondary">
                  Sagittis nelit in urna fusce in lorem vitae id mi faucet
                  facilisis quam duis felis
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  02
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cash on delivery</h3>
                <p className="text-text-secondary">
                  Sagittis nelit in urna fusce in lorem vitae id mi faucet
                  facilisis quam duis felis
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  03
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Live tracking</h3>
                <p className="text-text-secondary">
                  Sagittis nelit in urna fusce in lorem vitae id mi faucet
                  facilisis quam duis felis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculate Price */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Calculate your price
              </h2>
              <p className="text-text-secondary mb-8">
                Libero lorem id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisi quam
              </p>
               <Image
                  src="/assets/images/user.png"
                  alt="Courier Illustration"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-text-primary font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary-400 text-white rounded flex items-center justify-center text-sm">
                      1
                    </span>
                    Booking date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-text-primary font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary-400 text-white rounded flex items-center justify-center text-sm">
                      2
                    </span>
                    Type of Parcel
                  </label>
                  <select
                    value={parcelType}
                    onChange={(e) => setParcelType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  >
                    <option value="">Select Parcel Type</option>
                    <option value="documents">Documents</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food Items</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-text-primary font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary-400 text-white rounded flex items-center justify-center text-sm">
                      3
                    </span>
                    Destination
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="From"
                      className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                </div>
                <button className="w-full bg-primary-400 text-white py-3 rounded-md hover:bg-primary-500 font-semibold">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GPS Tracking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Follow your shipment via GPS
              </h2>
              <p className="text-text-secondary mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="bg-primary-400 text-white px-8 py-3 rounded-md hover:bg-primary-500 font-semibold">
                Read more
              </button>
            </div>
            <div className="relative h-96 bg-background-secondary rounded-2xl overflow-hidden">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* World map dots pattern */}
                <circle cx="100" cy="150" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="120" cy="160" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="140" cy="155" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="160" cy="170" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="250" cy="180" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="270" cy="190" r="3" fill="#D1D5DB" opacity="0.5" />
                <circle cx="290" cy="185" r="3" fill="#D1D5DB" opacity="0.5" />
                {/* Location pins */}
                <g transform="translate(150, 200)">
                  <path
                    d="M0,-30 C-15,-30 -20,-15 -20,0 C-20,15 0,30 0,30 C0,30 20,15 20,0 C20,-15 15,-30 0,-30 Z"
                    fill="#22c55e"
                  />
                  <circle cx="0" cy="-10" r="8" fill="white" />
                </g>
                <g transform="translate(280, 160)">
                  <path
                    d="M0,-30 C-15,-30 -20,-15 -20,0 C-20,15 0,30 0,30 C0,30 20,15 20,0 C20,-15 15,-30 0,-30 Z"
                    fill="#22c55e"
                  />
                  <circle cx="0" cy="-10" r="8" fill="white" />
                </g>
                <g transform="translate(200, 280)">
                  <path
                    d="M0,-30 C-15,-30 -20,-15 -20,0 C-20,15 0,30 0,30 C0,30 20,15 20,0 C20,-15 15,-30 0,-30 Z"
                    fill="#22c55e"
                  />
                  <circle cx="0" cy="-10" r="8" fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              What our clients say
            </h2>
            <p className="text-text-secondary">
              Nulla lorem sit nec a tempor libero aenean in in sagittis ut
              libero vitae eu hight sed quam sed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Adam Smith", role: "Web Developer" },
              { name: "Stella Carolina", role: "Marketing Manager" },
              { name: "Martin Howard", role: "Business Owner" },
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-background p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full"></div>
                  <div>
                    <h4 className="font-bold">{person.name}</h4>
                    <p className="text-sm text-text-secondary">{person.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-300">66</span>
                </div>
                <p className="text-text-secondary mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Ut enim ad minim veniam nostrud exercitation ullamco
                  laboris.
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="w-6 h-6" />
                <span className="text-xl font-bold">PB11 TRANSPORT</span>
              </div>
              <p className="text-text-secondary text-sm">
                Lorem libero id sagittis nelit in urna fusce in lorem vitae id
                mi faucet facilisis quam duis felis in risus facilisis.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick link</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a href="#" className="hover:text-primary-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact us</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>PB11 Transport Inc.</li>
                <li>info@pb11transport.com</li>
                <li>
                  If you need to speak with us directly, give us a call
                  123-456-7890
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <p className="text-text-secondary text-sm mb-4">
                Subscribe for update
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
                />
                <button className="bg-primary-400 text-white px-6 py-2 rounded-md hover:bg-primary-500 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-text-secondary text-sm">
            <p>Copyright 2025 Pb11transport - All right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
