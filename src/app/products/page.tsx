"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "UPS Systems",
    image: "/images/ups.jpg",
    description:
      "Enterprise-grade uninterrupted power supply systems designed for industrial continuity and critical infrastructure environments.",
  },
  {
    title: "Industrial Batteries",
    image: "/images/batteries.jpg",
    description:
      "Reliable backup battery systems supporting enterprise operations, power continuity, and infrastructure resilience.",
  },
  {
    title: "Server Racks",
    image: "/images/serverrack.jpg",
    description:
      "Scalable server rack infrastructure designed for modern data centers and enterprise networking environments.",
  },
  {
    title: "Fire Alarm Systems",
    image: "/images/firepanel.jpg",
    description:
      "Integrated fire detection and alarm systems engineered for commercial safety and infrastructure protection.",
  },
  {
    title: "Passive IT Products",
    image: "/images/passiveitproducts.jpg",
    description:
      "Premium passive networking products supporting modern enterprise connectivity and IT infrastructure systems.",
  },
  {
    title: "False Ceilings",
    image: "/images/falseceilings.jpg",
    description:
      "Commercial-grade false ceiling solutions designed for enterprise, office, and industrial environments.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-16">

        <div className="absolute inset-0">

          <Image
            src="/images/serverroom.jpg"
            alt="Server Room"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021a15]/90 to-black"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-green-400 mb-6 text-sm">
            Product Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] max-w-5xl">

            Enterprise Infrastructure

            <span className="text-green-400">
              {" "}Solutions
            </span>

            <br />

            For Global Industries

          </h1>

          <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-4xl">
            GreenZoneIT exports enterprise-grade infrastructure products
            supporting modern industries, commercial operations,
            enterprise facilities, and technology-driven environments.
          </p>

        </div>

      </section>

      {/* PRODUCTS GRID */}
      <section className="py-28 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {products.map((product, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#081512] border border-green-500/10 rounded-3xl overflow-hidden hover:border-green-400"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-10">

                  <h2 className="text-3xl font-black text-green-400 mb-6">
                    {product.title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {product.description}
                  </p>

                  {/* BUTTON */}
                  <Link href="/contact">

                    <button className="mt-10 border border-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition">

                      Request Inquiry

                    </button>

                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* INFRASTRUCTURE SECTION */}
      <section className="py-32 px-6 lg:px-16 bg-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">

            <Image
              src="/images/serverroom.jpg"
              alt="Infrastructure"
              fill
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Enterprise Infrastructure
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Infrastructure Products Built For Reliability & Scalability
            </h2>

            <p className="mt-10 text-lg text-gray-300 leading-relaxed">
              GreenZoneIT supplies enterprise infrastructure products designed
              for environments where operational continuity, reliability,
              networking performance, and safety standards are essential.
            </p>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              Our product portfolio supports commercial operations,
              infrastructure contractors, industrial facilities,
              enterprise networking environments, and technology-driven sectors.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}