
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* Light mode logo (black) */}
            <Image
              src="/logo.png"
              alt="PB11 Transport Logo"
              width={232}
              height={32}
              className="dark:hidden"
            />
            {/* Dark mode logo (white) */}
            <Image
              src="/logo-white.png"
              alt="PB11 Transport Logo"
              width={232}
              height={32}
              className="hidden dark:block"
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary"
            >
              Tracking
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary"
            >
              Shipping
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary"
            >
              Location
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary"
            >
              Support
            </a>
            <button className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
