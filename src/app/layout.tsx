// app/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // hook to read current URL :contentReference[oaicite:1]{index=1}
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../../components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // e.g. '/' or '/about' :contentReference[oaicite:2]{index=2}

  // helper to decide if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-start h-16">
              <Link
                href="/"
                className={`font-bold text-xl mr-8 ${
                  isActive("/")
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                    : "text-gray-600 hover:text-orange-500 transition-colors"
                }`}
              >
                FruityCan
              </Link>
              <div className="space-x-6">
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600 hover:text-orange-500 transition-colors"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={
                    isActive("/about")
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600 hover:text-orange-500 transition-colors"
                  }
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={
                    isActive("/contact")
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : "text-gray-600 hover:text-orange-500 transition-colors"
                  }
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
