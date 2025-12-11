"use client";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";

interface Van {
  _id: string;
  type: string;
  size: string;
  availableCount: number;
  waitingCharges: number;
  handballCharges: number;
  weightSupport: number;
  areaCoverage: string;
}

export default function QuoteForm() {
  const { user } = useAppSelector((state) => state.auth);
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    customerName: user?.name || "",
    email: user?.email || "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    vanType: "",
  });

  useEffect(() => {
    fetchVans();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        customerName: user.name,
        email: user.email,
      }));
    }
  }, [user]);

  const fetchVans = async () => {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();
      if (data.success) {
        setVans(data.data);
      }
    } catch (error) {
      console.error("Error fetching vans:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Quote request submitted successfully! We will contact you soon.",
        });
        // Reset form (except name and email if logged in)
        setFormData({
          customerName: user?.name || "",
          email: user?.email || "",
          phone: "",
          pickupLocation: "",
          dropLocation: "",
          date: "",
          time: "",
          vanType: "",
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to submit quote request",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedVan = vans.find((van) => van.type === formData.vanType);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-950 mb-4">
            Request a Quote
          </h2>
          <p className="text-primary-900">
            Fill in your details and we&apos;ll get back to you with a custom
            quote
          </p>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-primary-100 text-primary-900 border border-primary-300"
                : "bg-red-100 text-red-900 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
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

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="+44 1234 567890"
              />
            </div>

            <div>
              <label
                htmlFor="vanType"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Van Type *
              </label>
              <select
                id="vanType"
                name="vanType"
                value={formData.vanType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select a van type</option>
                {vans.map((van) => (
                  <option key={van._id} value={van.type}>
                    {van.type} - {van.size} ({van.availableCount} available)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Pickup Location *
              </label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g., Berkshire"
              />
            </div>

            <div>
              <label
                htmlFor="dropLocation"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Drop Location *
              </label>
              <input
                type="text"
                id="dropLocation"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g., London"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Pickup Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-semibold text-primary-950 mb-2"
              >
                Pickup Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {selectedVan && (
            <div className="mb-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-lg font-bold text-primary-950 mb-2">
                Selected Van Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <p className="text-primary-700 font-semibold">Size</p>
                  <p className="text-primary-900">{selectedVan.size}</p>
                </div>
                <div>
                  <p className="text-primary-700 font-semibold">Weight</p>
                  <p className="text-primary-900">{selectedVan.weightSupport}kg</p>
                </div>
                <div>
                  <p className="text-primary-700 font-semibold">Waiting</p>
                  <p className="text-primary-900">£{selectedVan.waitingCharges}</p>
                </div>
                <div>
                  <p className="text-primary-700 font-semibold">Handball</p>
                  <p className="text-primary-900">£{selectedVan.handballCharges}</p>
                </div>
              </div>
              <p className="text-primary-900 text-sm mt-2">
                <span className="font-semibold">Coverage:</span>{" "}
                {selectedVan.areaCoverage}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#52D172" }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#3DBA5A";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#52D172";
            }}
          >
            {loading ? "Submitting..." : "Submit Quote Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
