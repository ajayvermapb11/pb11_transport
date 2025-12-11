"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call logout API to clear cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state regardless
      dispatch(logout());
      router.push("/");
    }
  };

  return (
    <nav className="w-full shadow-sm" style={{ backgroundColor: "#E3F9E7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="PB11 Transport Logo"
              width={232}
              height={32}
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "#718096" }}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:underline"
              style={{ color: "#718096" }}
            >
              About Us
            </Link>
            <Link
              href="/my-quotes"
              className="hover:underline"
              style={{ color: "#718096" }}
            >
              My Quotes
            </Link>
            <Link
              href="/support"
              className="hover:underline"
              style={{ color: "#718096" }}
            >
              Support
            </Link>
            {isAuthenticated && user?.role === 'admin' && (
              <Link
                href="/dashboard/admin/quotes"
                className="hover:underline"
                style={{ color: "#718096" }}
              >
                Admin
              </Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span style={{ color: "#1a202c" }}>Welcome, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-md text-white"
                  style={{ backgroundColor: "#ef4444" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#dc2626")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ef4444")
                  }
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button
                  className="px-6 py-2 rounded-md text-white"
                  style={{ backgroundColor: "#52D172" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3DBA5A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#52D172")
                  }
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
