"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What areas do you cover?",
      answer:
        "We operate throughout the United Kingdom, with our primary base in Berkshire. We provide delivery services from Berkshire to anywhere in the UK.",
    },
    {
      question: "How do I book a van?",
      answer:
        "You can book a van by filling out our quote request form on the homepage. Simply provide your pickup and drop-off locations, preferred date and time, and select the van type. Our team will review your request and get back to you with a quote within 24 hours.",
    },
    {
      question: "What types of vans do you offer?",
      answer:
        "We offer three types of vans: Small (2.4m, 900kg capacity), Large (4m, 1150kg capacity), and X Large (4.4m, 1150kg capacity). Each van type has different pricing for waiting and handball charges.",
    },
    {
      question: "What are waiting charges?",
      answer:
        "Waiting charges apply when our driver has to wait at the pickup or drop-off location beyond the agreed time. For Small vans it's £10, and for Large/X Large vans it's £15.",
    },
    {
      question: "What are handball charges?",
      answer:
        "Handball charges cover loading and unloading services. Our rates are £10 for Small vans, £15 for Large vans, and £20 for X Large vans.",
    },
    {
      question: "How quickly can I get a quote?",
      answer:
        "We aim to respond to all quote requests within 24 hours during business days. For urgent requests, please contact us directly by phone.",
    },
    {
      question: "Can I track my delivery?",
      answer:
        "Yes, once your booking is confirmed, you can track your quote status through the 'My Quotes' section. You'll receive updates as your request is processed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit/debit cards, and cash payments. Payment details will be provided when you receive your quote.",
    },
    {
      question: "Do you provide insurance?",
      answer:
        "Yes, all our deliveries are fully insured. Details about coverage will be included in your quote and booking confirmation.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can modify or cancel your booking. Please contact us as soon as possible. Cancellation policies and any applicable fees will depend on how close to the booking date you cancel.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);

    // Simulate form submission (you can connect to your backend here)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitMessage({
        type: "success",
        text: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            How Can We{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Help You?</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-300 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Get in touch with our support team. We're here to help with any
            questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-950 mb-12 text-center">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-950 mb-2">
                Phone
              </h3>
              <p className="text-primary-900">+44 1234 567890</p>
              <p className="text-sm text-primary-700 mt-1">Mon-Fri, 9am-6pm</p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-950 mb-2">Email</h3>
              <p className="text-primary-900">support@pb11transport.com</p>
              <p className="text-sm text-primary-700 mt-1">
                We reply within 24h
              </p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-950 mb-2">
                Location
              </h3>
              <p className="text-primary-900">Berkshire, United Kingdom</p>
              <p className="text-sm text-primary-700 mt-1">
                Serving all of UK
              </p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-950 mb-2">
                Business Hours
              </h3>
              <p className="text-primary-900">Mon-Fri: 9am - 6pm</p>
              <p className="text-sm text-primary-700 mt-1">
                Sat-Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-primary-900">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary-950">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-primary-900 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-primary-950 mb-4">
              Send Us a Message
            </h2>
            <p className="text-primary-900">
              Can't find what you're looking for? Send us a message and we'll
              get back to you shortly.
            </p>
          </div>

          {submitMessage && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitMessage.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-background-secondary rounded-2xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-950 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-950 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="How can we help you?"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#52D172" }}
              onMouseEnter={(e) => {
                if (!submitting) {
                  e.currentTarget.style.backgroundColor = "#3DBA5A";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#52D172";
              }}
            >
              <Send className="w-5 h-5" />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-50 border-t border-primary-200">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary-950 mb-6">
            Need Immediate Assistance?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+441234567890"
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium"
            >
              Call Us Now
            </a>
            <a
              href="mailto:support@pb11transport.com"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 font-medium"
            >
              Email Support
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 font-medium"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
