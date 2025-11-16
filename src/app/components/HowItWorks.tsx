import { Package, Truck, MapPin } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-950 mb-4">
            How PB11 Transport works
          </h2>
          <p className="text-primary-900 ">
            Our straightforward process makes renting a van quick and easy.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
              <Package className="w-10 h-10 " />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-950 ">
              Booking
            </h3>
            <p className="text-primary-900 text-sm">
              Select your dates and van type through our simple online booking
              form.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
              <svg
                className="w-10 h-10 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-950 ">
              Collection
            </h3>
            <p className="text-primary-900 text-sm">
              Prepare your goods for transport. Our vans are ready for you.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
              <Truck className="w-10 h-10 " />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-950 ">
              Transportation
            </h3>
            <p className="text-primary-900 text-sm">
              Pick up your van and transport your goods at your own pace.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-4">
              <MapPin className="w-10 h-10 " />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-950 ">
              Delivery
            </h3>
            <p className="text-primary-900 text-sm">
              Return the van to the designated location once your delivery is
              complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
