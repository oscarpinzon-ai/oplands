'use client';

export default function Features() {
  const features = [
    {
      icon: '📍',
      title: 'Curated parcels only',
      desc: 'Every lot is vetted for access, buildability, and clear title. No surprises, no rework — you get the details before you get attached.',
    },
    {
      icon: '💰',
      title: 'Transparent pricing',
      desc: 'Flat, honest pricing. See parcel ID, county assessed market value, and taxes up front — then run the numbers yourself in our calculator.',
    },
    {
      icon: '📈',
      title: 'Built-in financing',
      desc: 'Low down payments starting at 5%, terms up to 36 months. Reserve online, close in days. No banks, no paperwork maze.',
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-xs text-fg-muted font-mono mb-3">// Why OP Lands</div>
          <h2 className="text-4xl md:text-5xl font-inter-tight font-semibold -tracking-wider mb-3">Land, without the friction.</h2>
          <p className="text-fg-muted max-w-2xl mx-auto">From the Pocono Mountains to the Lehigh Valley — handpicked parcels with nature, privacy, and real investment potential.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-lg border border-white/6 bg-surface-1/50 hover:bg-surface-2 transition">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-surface-3 text-lg">
                {f.icon}
              </div>
              <h3 className="font-inter-tight font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-fg-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
