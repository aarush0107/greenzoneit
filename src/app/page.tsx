"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-24">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <Image
            src="/images/serverroom.jpg"
            alt="Server Room"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#021a15]/90 to-black"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.35em] text-green-400 mb-6 text-sm">
              Global Technology Infrastructure Exporters
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">

              Powering

              <br />

              <span className="text-green-400">
                Enterprise
              </span>

              <br />

              Infrastructure

            </h1>

            <p className="mt-10 text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl">
              GreenZoneIT exports enterprise-grade UPS systems, batteries,
              server racks, passive IT products, fire safety systems,
              and commercial infrastructure solutions for global industries.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-6">

              <Link href="/products">

                <button className="bg-green-500 hover:bg-green-400 text-black px-10 py-5 rounded-full text-lg font-semibold transition flex items-center gap-3">

                  Explore Products

                  <ArrowRight />

                </button>

              </Link>

              <Link href="/contact">

                <button className="border border-green-400 px-10 py-5 rounded-full text-lg hover:bg-green-500 hover:text-black transition">

                  Contact Us

                </button>

              </Link>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >

            <div className="bg-[#081512]/80 backdrop-blur-xl border border-green-500/10 rounded-3xl p-10 h-[220px] flex flex-col justify-center hover:border-green-400 transition">

              <h3 className="text-5xl font-black text-green-400">
                20+
              </h3>

              <p className="mt-4 text-gray-300 text-xl">
                Export Regions
              </p>

            </div>

            <div className="bg-[#081512]/80 backdrop-blur-xl border border-green-500/10 rounded-3xl p-10 h-[220px] flex flex-col justify-center hover:border-green-400 transition">

              <h3 className="text-5xl font-black text-green-400">
                50+
              </h3>

              <p className="mt-4 text-gray-300 text-xl">
                Product Categories
              </p>

            </div>

            <div className="bg-[#081512]/80 backdrop-blur-xl border border-green-500/10 rounded-3xl p-10 h-[220px] flex flex-col justify-center hover:border-green-400 transition">

              <h3 className="text-5xl font-black text-green-400">
                24/7
              </h3>

              <p className="mt-4 text-gray-300 text-xl">
                Support
              </p>

            </div>

            <div className="bg-[#081512]/80 backdrop-blur-xl border border-green-500/10 rounded-3xl p-10 h-[220px] flex flex-col justify-center hover:border-green-400 transition">

              <h3 className="text-5xl font-black text-green-400">
                100%
              </h3>

              <p className="mt-4 text-gray-300 text-xl">
                Quality Focused
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-32 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Enterprise Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-4xl">
              Infrastructure Products Designed For Modern Industries
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#081512] border border-green-500/10 rounded-3xl overflow-hidden"
            >

              <div className="relative h-[260px]">

                <Image
                  src="/images/ups.jpg"
                  alt="UPS"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-10">

                <h3 className="text-3xl font-black text-green-400 mb-5">
                  UPS Systems
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Reliable uninterrupted power supply systems designed for
                  enterprise continuity and industrial operations.
                </p>

              </div>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#081512] border border-green-500/10 rounded-3xl overflow-hidden"
            >

              <div className="relative h-[260px]">

                <Image
                  src="/images/serverrack.jpg"
                  alt="Server Rack"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-10">

                <h3 className="text-3xl font-black text-green-400 mb-5">
                  Server Racks
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Enterprise-grade server rack infrastructure supporting
                  modern networking and data center environments.
                </p>

              </div>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#081512] border border-green-500/10 rounded-3xl overflow-hidden"
            >

              <div className="relative h-[260px]">

                <Image
                  src="/images/firepanel.jpg"
                  alt="Fire Panel"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-10">

                <h3 className="text-3xl font-black text-green-400 mb-5">
                  Fire Systems
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Advanced fire alarm and safety infrastructure systems
                  built for commercial and enterprise facilities.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}