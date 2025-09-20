export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="VERIQON ADVISORY" width={28} height={28} className="rounded" />
            <span className="font-semibold">VERIQON ADVISORY</span>
          </div>
          <p className="mt-3 text-gray-600">Japanese Excellence. Global Impact.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#resources" className="hover:underline">Resources</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Email: <a href="mailto:contact@veriqonadvisory.com" className="underline">contact@veriqonadvisory.com</a></li>
            <li>Phone: <a href="tel:+19911438654" className="underline">+91 99114 38654</a></li>
            <li>Global • Based in MI, USA</li>
          </ul>
          <a href="#contact" className="inline-block mt-3 px-4 py-2 rounded-xl bg-black text-white">Request a Proposal</a>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} VERIQON ADVISORY. All rights reserved.</span>
          <div className="space-x-3">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
