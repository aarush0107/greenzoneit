export default function Footer() {
  return (
    <footer className="bg-[#020805] border-t border-green-500/10 py-16 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-4xl font-black text-white">
            GreenZone<span className="text-green-400">IT</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            Exporters of enterprise infrastructure products including UPS
            systems, batteries, server racks, fire safety systems, passive IT
            solutions, and commercial infrastructure products.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/industries">Industries</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">
            <p>info@greenzoneit.com</p>
            <p>+91 98749 77280</p>
            <p>Kolkata, India</p>
          </div>
        </div>

      </div>

      <div className="border-t border-green-500/10 mt-14 pt-8 text-center text-gray-500">
        © 2026 GreenZoneIT. All rights reserved.
      </div>

    </footer>
  );
}