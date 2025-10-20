
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Our Services
            </h2>
            <p className="text-text-secondary mb-8">
              PB11 Transport offers a range of services to meet your needs, including company portfolio and service presentation, an online booking system with form submission, and an administrative dashboard for booking management.
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 font-semibold">
              Read more
            </button>
          </div>
          <div className="relative h-96 bg-background-secondary rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/map.png"
              alt="Map Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
