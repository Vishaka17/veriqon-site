export default function OurServices() {
  const items = [
    { title: "TQM & 5S", blurb: "Quality-first culture with visual management and Kaizen.", href: "#contact" },
    { title: "Lean & Six Sigma", blurb: "DMAIC, SPC, mistake-proofing to reduce defects & cost.", href: "#contact" },
    { title: "Leadership & Culture", blurb: "Gemba, A3 thinking, PDCA to sustain zero-defect mindsets.", href: "#contact" },
    { title: "TPM / OpEx", blurb: "Reliability-centered maintenance, loss analysis, Hoshin.", href: "#contact" },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Advisory Services</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Practical programs that create measurable, repeatable outcomes across operations and culture.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <a key={s.title} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.blurb}</p>
              <span className="mt-4 inline-block text-sm font-medium text-purple-700 group-hover:underline">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
