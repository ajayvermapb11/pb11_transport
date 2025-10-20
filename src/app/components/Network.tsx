
import Image from "next/image";

export default function Network() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-15 dark:bg-[#E3F9E7] rounded-2xl">
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
            <h2 className="text-4xl font-bold mb-6">
              Extensive Coverage Across the UK
            </h2>
            <p className="mb-6">
              With our main office in Reading and a wide service area, PB11 Transport provides reliable van rental services throughout the United Kingdom. We are committed to supporting your delivery needs, wherever they may be.
            </p>
            <button className="bg-primary-400 text-white px-8 py-3 rounded-md hover:bg-primary-500 font-semibold">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
