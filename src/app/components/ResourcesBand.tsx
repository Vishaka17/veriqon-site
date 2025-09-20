export default function ResourcesBand() {
  const posts = [
    { title: "Zero-Defect Checklist", tag: "Guide", href: "#resources" },
    { title: "5S Audit Sheet", tag: "Template", href: "#resources" },
    { title: "Lean for Academia", tag: "Playbook", href: "#resources" },
  ];

  return (
    <section id="resources" className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Insights &amp; Resources</h2>
            <p className="mt-2 text-purple-100">Tools and frameworks you can start using today.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-xl bg-white text-purple-800 font-medium hover:bg-purple-50">
            Request a Proposal
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="rounded-2xl bg-white/10 p-5 hover:bg-white/15 transition">
              <div className="text-xs uppercase tracking-wide text-purple-200">{p.tag}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <div className="mt-3 text-sm text-purple-100">Download →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
