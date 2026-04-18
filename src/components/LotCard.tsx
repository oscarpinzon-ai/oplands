'use client';

import { Lot } from '@/lib/types';
import { formatUSD } from '@/lib/utils';
import Image from 'next/image';

interface LotCardProps {
  lot: Lot;
}

export default function LotCard({ lot }: LotCardProps) {
  const imgSrc = lot.images?.[0];

  return (
    <article className="bg-surface-1 rounded-lg overflow-hidden border border-white/6 hover:border-cyan/30 transition">
      <div
        className="h-48 bg-cover relative overflow-hidden"
        style={{ background: lot.image_grad }}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={lot.display_address}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {!imgSrc && (
          <div className="absolute inset-0 flex items-center justify-center text-fg-muted text-sm text-center">
            [ lot photo<br />{lot.parcel_id} ]
          </div>
        )}
        <span className="absolute top-3 right-3 bg-black/50 backdrop-blur text-xs font-medium px-2 py-1 rounded">
          {lot.tag}
        </span>
      </div>

      <div className="p-4">
        <div className="font-inter-tight font-semibold mb-2 text-sm">{lot.display_address}</div>
        <div className="flex items-center gap-1.5 text-xs text-fg-muted mb-3">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {lot.city}, {lot.state} · {lot.county} County
        </div>
        <div className="text-xs text-fg-dim font-mono mb-3">PARCEL · {lot.parcel_id}</div>

        <div className="flex justify-between items-end mb-4">
          <div className="text-lg font-semibold">
            {formatUSD(lot.amv)}
            <span className="text-xs text-fg-muted ml-1">USD</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-fg-muted">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 6H3M21 12H3M21 18H3"/></svg>
            {lot.lot_size_acres} ac
          </div>
        </div>

        <div className="flex gap-2 text-xs">
          <a href="#contact" className="flex-1 btn btn-ghost justify-center">View details →</a>
          <a href="#contact" className="flex-1 btn btn-primary justify-center">Reserve</a>
        </div>
      </div>
    </article>
  );
}
