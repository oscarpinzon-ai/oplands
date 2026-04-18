'use client';

import { useState, useEffect } from 'react';
import { LOTS } from '@/lib/lots';
import LotCard from './LotCard';

export default function Properties() {
  const [lots] = useState(LOTS);
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState(LOTS);

  useEffect(() => {
    const newFiltered =
      filter === 'all'
        ? lots
        : lots.filter((l) => l.county === filter);
    setFiltered(newFiltered);
  }, [filter, lots]);

  const counties = ['all', 'Monroe', 'Pike', 'Wayne', 'Lackawanna', 'Carbon'];

  return (
    <section className="py-20 px-6" id="properties">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="text-xs text-fg-muted font-mono mb-3">// Active inventory</div>
          <h2 className="text-4xl md:text-5xl font-inter-tight font-semibold -tracking-wider mb-3">Premium lots, ready to reserve.</h2>
          <p className="text-fg-muted">Filter by county. Every lot includes parcel ID, acreage, and assessed market value.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {counties.map((county) => (
              <button
                key={county}
                onClick={() => setFilter(county)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition ${
                  filter === county
                    ? 'bg-cyan text-black'
                    : 'bg-surface-2 text-fg-muted hover:bg-surface-3'
                }`}
              >
                {county.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="text-xs text-fg-muted">
            Showing <strong>{filtered.length}</strong> of <strong>{lots.length}</strong> parcels
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((lot) => (
            <LotCard key={lot.id} lot={lot} />
          ))}
        </div>
      </div>
    </section>
  );
}
