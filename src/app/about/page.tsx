export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 lg:px-16">

        <div className="absolute inset-0 bg-gradient-to-b from-[#031a15] to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-green-400 mb-6 text-sm">
            About GreenZoneIT
          </p>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] max-w-5xl">
            Building Reliable
            <span className="text-green-400"> Infrastructure</span>
            <br />
            For Global Enterprises
          </h1>

          <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-4xl">
            GreenZoneIT is a private export company specializing in enterprise
            infrastructure solutions including UPS systems, batteries, server
            racks, fire safety systems, passive IT products, and commercial
            infrastructure solutions for global industries.
          </p>

        </div>

      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-28 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Company Overview
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Exporting Technology Infrastructure With Reliability & Precision
            </h2>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">

            <p>
              GreenZoneIT focuses on delivering dependable infrastructure
              products and enterprise technology solutions tailored for
              commercial, industrial, and institutional environments.
            </p>

            <p>
              Our export operations are centered around quality assurance,
              long-term partnerships, scalable supply capabilities, and
              customer-focused service for international markets.
            </p>

            <p>
              We work with businesses requiring reliable infrastructure
              systems that support modern operations, power continuity,
              networking environments, and safety standards.
            </p>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-28 px-6 lg:px-16 bg-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* MISSION */}
          <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-12">

            <p className="uppercase tracking-[0.25em] text-green-400 mb-5 text-sm">
              Our Mission
            </p>

            <h3 className="text-4xl font-black mb-8">
              Delivering Reliable Enterprise Infrastructure
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to provide high-quality infrastructure and
              enterprise technology products that help businesses operate
              efficiently, securely, and reliably across global markets.
            </p>

          </div>

          {/* VISION */}
          <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-12">

            <p className="uppercase tracking-[0.25em] text-green-400 mb-5 text-sm">
              Our Vision
            </p>

            <h3 className="text-4xl font-black mb-8">
              Supporting Modern Global Infrastructure
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              We aim to become a trusted international supplier of enterprise
              infrastructure products by focusing on reliability, scalability,
              innovation, and long-term customer partnerships.
            </p>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Why Choose GreenZoneIT
            </p>

            <h2 className="text-4xl md:text-5xl font-black max-w-4xl leading-tight">
              Trusted Export Solutions For Enterprise Infrastructure
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-[#081512] p-10 rounded-3xl border border-green-500/10">
              <h3 className="text-3xl font-bold text-green-400 mb-6">
                Quality Focus
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                We prioritize reliable products designed for enterprise-grade
                performance and durability.
              </p>
            </div>

            <div className="bg-[#081512] p-10 rounded-3xl border border-green-500/10">
              <h3 className="text-3xl font-bold text-green-400 mb-6">
                Global Reach
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Serving businesses and infrastructure projects across
                international markets.
              </p>
            </div>

            <div className="bg-[#081512] p-10 rounded-3xl border border-green-500/10">
              <h3 className="text-3xl font-bold text-green-400 mb-6">
                Scalable Supply
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Supporting enterprise-scale infrastructure requirements and
                bulk export operations.
              </p>
            </div>

            <div className="bg-[#081512] p-10 rounded-3xl border border-green-500/10">
              <h3 className="text-3xl font-bold text-green-400 mb-6">
                Reliable Support
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Focused on long-term partnerships, responsiveness, and
                customer satisfaction.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}