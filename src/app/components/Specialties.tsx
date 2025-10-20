export default function Specialties() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-950 mb-4">
            Our specialties
          </h2>
          <p className="text-primary-900">
            We focus on providing a seamless and efficient van rental
            experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                01
              </div>
            </div>
            <div>
              Our easy-to-use online booking system lets you reserve a van in
              minutes.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                02
              </div>
            </div>
            <div>
              We offer competitive rates with no hidden fees, so you know exactly what you&apos;re paying.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                03
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Modern, Reliable Fleet</h3>
              <p className="text-primary-900">
                Our vans are well-maintained and equipped to ensure a safe and
                smooth journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
