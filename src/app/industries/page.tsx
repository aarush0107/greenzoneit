"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Data Centers",
    image: "/images/datacentre.jpg",
    description:
      "Supporting modern data center environments with scalable server infrastructure, networking systems, and power continuity solutions.",
  },
  {
    title: "Telecom Infrastructure",
    image: "/images/telecom.jpg",
    description:
      "Enterprise infrastructure products supporting telecom operations, networking systems, and communication facilities.",
  },
  {
    title: "Commercial Buildings",
    image: "/images/commbuilding.jpg",
    description:
      "Commercial infrastructure systems designed for enterprise offices, business campuses, and modern commercial facilities.",
  },
  {
    title: "Manufacturing",
    image: "/images/manufacturing.jpg",
    description:
      "Reliable infrastructure and power continuity solutions supporting industrial and manufacturing operations.",
  },
  {
    title: "Enterprise IT",
    image: "/images/enterpriseit.jpg",
    description:
      "Enterprise-grade networking and server infrastructure products designed for modern IT environments.",
  },
  {
    title: "Infrastructure Projects",
    image: "/images/infra.jpg",
    description:
      "Scalable export solutions supporting infrastructure development projects and industrial operations globally.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-16">

        <div className="absolute inset-0">

          <Image
            src="/images/datacentre.jpg"
            alt="Industries"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#021a15]/90 to-black"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-green-400 mb-6 text-sm">
            Industries We Support
          </p>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] max-w-5xl">

            Infrastructure Solutions

            <span className="text-green-400">
              {" "}Built
            </span>

            <br />

            For Modern Industries

          </h1>

          <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-4xl">
            GreenZoneIT provides enterprise infrastructure products and
            export solutions supporting commercial, industrial,
            and technology-driven sectors worldwide.
          </p>

        </div>

      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-28 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {industries.map((industry, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#081512] border border-green-500/10 rounded-3xl overflow-hidden hover:border-green-400"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-10">

                  <h2 className="text-3xl font-black text-green-400 mb-6">
                    {industry.title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {industry.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* SUPPORT SECTION */}
      <section className="py-32 px-6 lg:px-16 bg-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">

            <Image
              src="/images/infra.jpg"
              alt="Infrastructure"
              fill
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Industry-Focused Infrastructure
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Supporting Critical Infrastructure Across Global Industries
            </h2>

            <p className="mt-10 text-lg text-gray-300 leading-relaxed">
              GreenZoneIT provides export-ready infrastructure products
              tailored for industries requiring operational reliability,
              enterprise scalability, and long-term performance.
            </p>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              Our solutions support environments where networking infrastructure,
              safety systems, power continuity, and enterprise operations are
              essential for business continuity and infrastructure growth.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}