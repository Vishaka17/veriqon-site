export default function ContactCta() {
  return (
    <section id="contact" className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Ready to transform performance?</h3>
          <p className="text-slate-600">Let’s scope a tailored engagement for your goals.</p>
        </div>
        <div className="flex gap-3">
          <a href="mailto:contact@veriqonadvisory.com" className="px-5 py-2.5 rounded-xl bg-purple-700 text-white font-medium hover:bg-purple-600">
            Request a Proposal
          </a>
          <a href="tel:+19911438654" className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-medium hover:bg-white">
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
