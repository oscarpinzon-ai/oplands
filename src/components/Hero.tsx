'use client';

export default function Hero() {
  return (
    <section className="relative py-22 overflow-hidden" id="top">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-56 -mt-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.06) 35%, transparent 70%)',
        }}>
      </div>

      <div className="container text-center relative z-2">
        <div className="inline-flex items-center gap-2 text-xs text-fg-muted bg-surface-2 border border-white/6 px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-hot" style={{ boxShadow: '0 0 8px var(--cyan-hot)' }}></span>
          9 new parcels live · April 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-inter-tight font-semibold -tracking-wider max-w-4xl mx-auto mb-5">
          Where do you want <br />to <span className="accent">build next?</span>
        </h1>

        <p className="text-lg text-fg-muted max-w-2xl mx-auto mb-8">
          Premium vacant land in Pennsylvania's Pocono Mountains. Curated parcels, transparent deals, financing in minutes — not months.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a href="#properties" className="btn btn-primary">
            Explore properties
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Talk to a specialist</a>
        </div>

        <div className="flex gap-6 justify-center flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
            No hidden fees
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
            Owner financing available
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
            Clear title · guaranteed
          </div>
        </div>
      </div>
    </section>
  );
}
