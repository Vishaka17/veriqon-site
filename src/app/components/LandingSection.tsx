export default function LandingSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Logo & Company Name */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/logo.png"
            alt="Veriqon Advisory Logo"
            className="w-12 h-12"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-purple-900">
            VERIQON ADVISORY
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 font-medium mb-10">
          Empower Excellence. Igniting Potential.
        </p>

        {/* Mission Statement */}
        <div className="space-y-3">
          <p className="text-2xl md:text-3xl font-semibold text-slate-800">
            Driving <span className="text-purple-700">Quality</span> &{" "}
            <span className="text-teal-600">Growth</span>
          </p>
          <p className="text-xl md:text-2xl font-medium text-slate-700">
            Through{" "}
            <span className="text-purple-900 font-bold">Zero-Defect Culture</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
