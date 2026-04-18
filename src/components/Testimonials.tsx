'use client';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: 'Bought our weekend parcel in Tobyhanna after years of getting lost in MLS listings. OP Lands had the title work and survey ready — we closed in nine days.',
      name: 'Marcus R.',
      role: 'Brooklyn, NY · Monroe County lot',
      initials: 'MR',
      gradient: 'linear-gradient(135deg,#67e8f9,#22d3ee)',
    },
    {
      stars: 5,
      quote: 'The financing calculator was a game-changer. I saw the exact monthly payment before I even picked up the phone. No fluff, no pressure, no sales tricks.',
      name: 'Jenna L.',
      role: 'Hoboken, NJ · Pike County lot',
      initials: 'JL',
      gradient: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
    },
    {
      stars: 5,
      quote: 'I\'ve flipped three lots through OP Lands. They verify access, perc potential, and zoning before listing — saves me weeks of diligence on every parcel.',
      name: 'David T.',
      role: 'Philadelphia, PA · Investor',
      initials: 'DT',
      gradient: 'linear-gradient(135deg,#fde68a,#f59e0b)',
    },
  ];

  return (
    <section className="py-20" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs text-fg-muted font-mono mb-3">// Buyers</div>
          <h2 className="text-4xl md:text-5xl font-inter-tight font-semibold -tracking-wider mb-3">Real people. Real parcels.</h2>
          <p className="text-fg-muted">What our buyers are saying about working with OP Lands Group.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface-1 border border-white/6 rounded-lg p-6">
              <div className="text-sm text-fg-muted mb-3">★ ★ ★ ★ ★</div>
              <p className="text-sm text-fg-muted mb-4">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-fg-dim">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
