
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Reliable Van Rentals for Your Delivery Needs{" "}
              <span className="relative inline-block">
                <span className="relative z-10">in the UK</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-300 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              PB11 Transport offers a modern fleet of delivery vans for rental. Whether for business or personal use, we provide flexible and affordable solutions across the United Kingdom.
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter Tracking Number"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 font-semibold">
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
  );
}
