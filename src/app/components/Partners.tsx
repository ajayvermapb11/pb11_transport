
import { Package, Truck, Send, Plane, Boxes, ShoppingBag } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-text-secondary dark:text-gray-400">Trusted by Businesses Across the UK</h2>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-70">
          <div className="flex flex-col items-center">
            <Package className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              DPD
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              DHL
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Send className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              EVRi
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Plane className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              FedEx
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Boxes className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              UPS
            </span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag className="w-14 h-14 dark:text-white" />
            <span className="text-sm font-semibold text-text-secondary dark:text-gray-300 mt-2">
              Amazon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
