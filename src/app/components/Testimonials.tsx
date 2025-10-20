"use client";
import React, { useState } from "react";
import { Star, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Adam Smith",
      role: "Web Developer",
      image: "/testimonial-1.jpg",
      quote:
        "PB11 Transport provided the perfect van for our business needs. The booking process was incredibly simple, the vehicle was in great condition, and the customer service was top-notch. We'll definitely be using them again.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sofia Carelino",
      role: "Marketing Manager",
      image: "/testimonial-2.jpg",
      quote:
        "Exceptional service and fast delivery! The tracking system is very reliable and the customer support team is always responsive. Highly recommend for all your shipping needs.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marfie Motcast",
      role: "Business Owner",
      image: "/testimonial-3.jpg",
      quote:
        "Professional and efficient courier service. They handle our business shipments with care and always deliver on time. Great value for money!",
      rating: 5,
    },
  ];

  return (
    <section className="pt-20 pb-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-4">
            What our clients say
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Client List */}
          <div className="lg:col-span-4 space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
                  activeTestimonial === index
                    ? "bg-primary-200 dark:bg-primary-800/30 shadow-md"
                    : "bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800"
                }`}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                    {testimonial.name.charAt(0)}
                  </div>
                  {activeTestimonial === index && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary dark:text-white">
                    {testimonial.name}
                  </h4>
                </div>

                {/* Arrow */}
                <ChevronRight
                  className={`w-6 h-6 transition-colors ${
                    activeTestimonial === index
                      ? "text-primary-600 dark:text-primary-500"
                      : "text-gray-400 dark:text-gray-600"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="lg:col-span-8">
            <div className="bg-primary-100 dark:bg-primary-900 rounded-3xl p-8 md:p-12 relative min-h-[400px] transition-all">
              {/* Quote Mark */}
              <div className="absolute top-8 right-8 text-8xl font-serif text-gray-300 dark:text-gray-700 opacity-50">
                66
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {testimonials[activeTestimonial].quote}
                </p>

                {/* Role */}
                <div className="mb-6">
                  <p className="text-text-primary dark:text-white font-bold text-xl">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
