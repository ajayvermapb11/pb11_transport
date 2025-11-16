
'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function CalculatePrice() {
 const [startDate, setStartDate] = useState("");
 const [endDate, setEndDate] = useState("");
 const [vanType, setVanType] = useState("");
 const [pickupLocation, setPickupLocation] = useState("");
 const [dropoffLocation, setDropoffLocation] = useState("");

 return (
 <section className="max-w-7xl mx-auto">
 <div className="py-15 px-4 sm:px-6 lg:px-8 bg-primary-100 rounded-2xl">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="text-4xl font-bold text-text-primary mb-4">
 Get a Quote
 </h2>
 <p className="text-text-secondary mb-8">
 Quickly estimate the cost of your van service.
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
 <span className="w-6 h-6 bg-primary-500 text-white rounded flex items-center justify-center text-sm">
 1
 </span>
 Service Dates
 </label>
 <div className="grid grid-cols-2 gap-4">
 <input
 type="date"
 value={startDate}
 onChange={(e) => setStartDate(e.target.value)}
 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
 />
 <input
 type="date"
 value={endDate}
 onChange={(e) => setEndDate(e.target.value)}
 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
 />
 </div>
 </div>
 <div>
 <label className="flex items-center gap-2 text-text-primary font-semibold mb-2">
 <span className="w-6 h-6 bg-primary-500 text-white rounded flex items-center justify-center text-sm">
 2
 </span>
 Van Type
 </label>
 <select
 value={vanType}
 onChange={(e) => setVanType(e.target.value)}
 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
 >
 <option value="">Select Van Type</option>
 <option value="small">Small Van</option>
 <option value="medium">Medium Van</option>
 <option value="large">Large Van</option>
 </select>
 </div>
 <div>
 <label className="flex items-center gap-2 text-text-primary font-semibold mb-2">
 <span className="w-6 h-6 bg-primary-500 text-white rounded flex items-center justify-center text-sm">
 3
 </span>
 Locations
 </label>
 <div className="grid grid-cols-2 gap-4">
 <input
 type="text"
 placeholder="Pickup Location"
 value={pickupLocation}
 onChange={(e) => setPickupLocation(e.target.value)}
 className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
 />
 <input
 type="text"
 placeholder="Drop-off Location"
 value={dropoffLocation}
 onChange={(e) => setDropoffLocation(e.target.value)}
 className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
 />
 </div>
 </div>
 <button className="w-full bg-primary-500 text-white py-3 rounded-md hover:bg-primary-600 font-semibold">
 Calculate
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
