'use client';

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: '#E3F9E7' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="PB11 Transport Logo"
                width={232}
                height={32}
              />
            </div>
            <p className="text-sm" style={{ color: '#718096' }}>
              PB11 Transport LTD is a premier van service service based in the UK, offering reliable and affordable solutions for your delivery and transportation needs.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#1a202c' }}>Quick link</h4>
            <ul className="space-y-2" style={{ color: '#718096' }}>
              <li>
                <a href="#" className="hover:underline" style={{ color: '#718096' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: '#718096' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: '#718096' }}>
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: '#718096' }}>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#1a202c' }}>Contact us</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#718096' }}>
              <li>PB11 TRANSPORT LTD</li>
              <li>33 Havergate Way, Reading, RG2 0FX, United Kingdom</li>
              <li>ajayverma@pb11transport.com</li>
              <li>+44 74000 50093</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#1a202c' }}>Subscribe</h4>
            <p className="text-sm mb-4" style={{ color: '#718096' }}>
              Subscribe for update
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900"
              />
              <button 
                className="text-white px-6 py-2 rounded-md text-sm font-semibold"
                style={{ backgroundColor: '#52D172' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3DBA5A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#52D172'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm" style={{ color: '#718096' }}>
          <p>Copyright 2025 Pb11transport - All right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
