export default function ContactPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 lg:px-16">

        <div className="absolute inset-0 bg-gradient-to-b from-[#031a15] to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-green-400 mb-6 text-sm">
            Contact GreenZoneIT
          </p>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] max-w-5xl">
            Let’s Build
            <span className="text-green-400"> Global</span>
            <br />
            Business Partnerships
          </h1>

          <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-4xl">
            Reach out to GreenZoneIT for export inquiries, infrastructure
            solutions, enterprise requirements, partnerships, and product
            information.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 px-6 lg:px-16 bg-[#041311]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-400 mb-5 text-sm">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-10">
              Connect With Our Team
            </h2>

            <div className="space-y-8">

              {/* PHONE */}
              <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Phone Numbers
                </h3>

                <div className="space-y-3 text-lg text-gray-300">

                  <p>+91 9874977280</p>

                  <p>+91 7044529729</p>

                </div>

              </div>

              {/* EMAIL */}
              <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Email Address
                </h3>

                <p className="text-lg text-gray-300">
                  info@greenzoneit.com
                </p>

              </div>

              {/* LOCATION */}
              <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Operations
                </h3>

                <p className="text-lg text-gray-300">
                  Kolkata, India
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#081512] border border-green-500/10 rounded-3xl p-10">

            <p className="uppercase tracking-[0.25em] text-green-400 mb-5 text-sm">
              Inquiry Form
            </p>

            <h3 className="text-4xl font-black mb-10">
              Send Us An Inquiry
            </h3>

            <form className="space-y-6">

              {/* NAME */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
                />

              </div>

              {/* COMPANY */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full bg-black border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Inquiry Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Enter your inquiry"
                  className="w-full bg-black border border-green-500/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-green-400"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-5 rounded-2xl text-lg transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}