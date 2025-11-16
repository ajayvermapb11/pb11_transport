import Image from "next/image";

export default function Partners() {
 return (
 <section className="py-5 bg-primary-100 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-wrap justify-between items-center gap-12">
 <div className="flex flex-col items-center">
 <Image src="/assets/images/amazon.png" alt="Amazon Logo" width={120} height={56} />
 </div>
 <div className="flex flex-col items-center">
 <Image src="/assets/images/dhl.png" alt="DHL Logo" width={120} height={56} />
 </div>
 <div className="flex flex-col items-center">
 <Image src="/assets/images/dpd.png" alt="DPD Logo" width={120} height={56} />
 </div>
 <div className="flex flex-col items-center">
 <Image src="/assets/images/evri.png" alt="Evri Logo" width={120} height={56} />
 </div>
 <div className="flex flex-col items-center">
 <Image src="/assets/images/fedex.png" alt="FedEx Logo" width={120} height={56} />
 </div>
 <div className="flex flex-col items-center">
 <Image src="/assets/images/ups.png" alt="UPS Logo" width={80} height={56} />
 </div>
 </div>
 </div>
 </section>
 );
}
