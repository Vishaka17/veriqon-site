export default function Logo({
  size = 48,
  stacked = false,
}: { size?: number; stacked?: boolean }) {
  return (
    <div className={stacked ? "flex flex-col items-start gap-3" : "flex items-center gap-4"}>
      {/* Mark */}
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="rounded-xl shadow-sm">
        <defs>
          <linearGradient id="vg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#F8FAFC" />
        <path
          d="M12 16l14 32 8-16 8 16 10-20"
          fill="none"
          stroke="url(#vg)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="leading-tight">
        {/* Bigger brand name */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
          VERIQON ADVISORY
        </div>
        {/* New tagline */}
        <div className="text-sm md:text-base text-slate-600">
          Empower Excellence. Igniting Potential.
        </div>
      </div>
    </div>
  );
}
