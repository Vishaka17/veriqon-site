import Image from "next/image";

export default function LandingSection() {
  return (
    <section aria-label="Introduction" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Top brand row */}
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.png" alt="VERIQON ADVISORY logo" width={56} height={56} />
        <div className="text-sm text-gray-500 leading-tight">
          <div className="font-semibold tracking-wide">VERIQON ADVISORY</div>
          <div>Japanese Excellence • Global Impact</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Advanced Quality Systems:
            <span className="block mt-1 underline decoration-amber-400 underline-offset-4">
              Enhancing Efficiency, Compliance & Performance
            </span>
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            We enable industries and universities to achieve breakthrough results with
            TQM, Lean/Six Sigma, TPM and Dantotsu zero-defect methods—built for measurable,
            repeatable outcomes.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium">
              Explore Services
            </a>
            <a href="#contact" className="px-5 py-3 rounded-2xl border text-sm font-medium">
              Request a Proposal
            </a>
          </div>

          {/* Key value bullets (from the deck’s themes) */}
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>✔ Data-driven decisions & continuous improvement</li>
            <li>✔ Reduce defects, lead time & cost; improve delivery & safety</li>
            <li>✔ Build zero-defect culture with practical QC/QA tools & PDCA</li>
          </ul>

          ## Error Type
Runtime ReferenceError

## Error Message
index is not defined


    at LandingSection (src\app\components\LandingSection.tsx:49:139)

## Code Frame
  47 |
  48 |           <p className="mt-3 text-xs text-gray-400">
> 49 |             Copy informed by “Advanced Quality Systems – Enhancing Efficiency, Compliance, and Performance.” :contentReference[oaicite:0]{index=0}
     |                                                                                                                                           ^
  50 |           </p>
  51 |         </div>
  52 |

Next.js version: 15.5.3 (Turbopack)


        {/* Visual placeholder (replace later with photo/video) */}
        <div className="relative">
          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner grid place-items-center">
            <span className="text-gray-500 text-sm">Place founder photo / short intro video here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
