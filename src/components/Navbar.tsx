"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-green-500/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center gap-4">

            <div className="relative w-14 h-14">

              <Image
                src="/images/logo.png"
                alt="GreenZoneIT Logo"
                fill
                className="object-contain"
              />

            </div>

            <h1 className="text-3xl font-black tracking-wide">

              GreenZone

              <span className="text-green-400">
                IT
              </span>

            </h1>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-lg text-gray-300">

            <Link
              href="/about"
              className="hover:text-green-400 transition"
            >
              About
            </Link>

            <Link
              href="/products"
              className="hover:text-green-400 transition"
            >
              Products
            </Link>

            <Link
              href="/industries"
              className="hover:text-green-400 transition"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={34} />
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="fixed inset-0 z-[100] bg-black flex flex-col">

          {/* TOP */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-green-500/10">

            <div className="flex items-center gap-4">

              <div className="relative w-12 h-12">

                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />

              </div>

              <h1 className="text-3xl font-black">

                GreenZone

                <span className="text-green-400">
                  IT
                </span>

              </h1>

            </div>

            <button onClick={() => setMenuOpen(false)}>
              <X size={34} />
            </button>

          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-3xl font-semibold">

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              About
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              Products
            </Link>

            <Link
              href="/industries"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>

          </div>

        </div>

      )}

    </>
  );
}