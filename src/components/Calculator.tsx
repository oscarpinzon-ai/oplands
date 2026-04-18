'use client';

import { useState } from 'react';
import { LOTS } from '@/lib/lots';
import { formatUSD, calculateMonthlyPayment } from '@/lib/utils';

export default function Calculator() {
  const [selectedLot, setSelectedLot] = useState(LOTS[0]);
  const [downPercent, setDownPercent] = useState(5);
  const [term, setTerm] = useState(24);
  const APR = 0.09; // 9%

  const price = selectedLot?.amv || 0;
  const downPayment = Math.round((price * downPercent) / 100);
  const financed = price - downPayment;
  const monthlyPayment = calculateMonthlyPayment(financed, APR * 100, term);
  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - financed;

  return (
    <section className="py-20" id="pricing">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="text-xs text-fg-muted font-mono mb-3">// Plan your reservation</div>
          <h2 className="text-4xl md:text-5xl font-inter-tight font-semibold -tracking-wider mb-3">Financing calculator</h2>
          <p className="text-fg-muted max-w-2xl mx-auto">
            Reserve any lot with just <strong className="text-cyan">5% down</strong>. Terms up to <strong className="text-cyan">36 months</strong>. Drag the sliders to see your monthly payment in real time.
          </p>
        </div>

        <div className="bg-surface-1 border border-white/6 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <div>
              {/* Lot selection */}
              <div className="mb-6">
                <label className="text-xs text-fg-muted mb-2 block">Lot</label>
                <select
                  value={selectedLot?.id || ''}
                  onChange={(e) => {
                    const lotId = parseInt(e.target.value);
                    const lot = LOTS.find((l) => l.id === lotId);
                    if (lot) setSelectedLot(lot);
                  }}
                  className="w-full bg-surface-2 border border-white/6 rounded px-3 py-2 text-sm text-fg"
                >
                  {LOTS.map((lot) => (
                    <option key={lot.id} value={lot.id}>
                      {lot.display_address}
                    </option>
                  ))}
                </select>
              </div>

              {/* Down payment */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-xs text-fg-muted">Down payment</label>
                  <span className="text-xs font-mono text-fg">{downPercent}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={downPercent}
                  onChange={(e) => setDownPercent(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-fg-dim mt-1">
                  <span className="mono">{formatUSD(downPayment)}</span> · min 5%
                </div>
              </div>

              {/* Term */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-xs text-fg-muted">Term</label>
                  <span className="text-xs font-mono text-fg">{term} mo</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="6"
                  value={term}
                  onChange={(e) => setTerm(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-fg-dim mt-1">6 – 36 months</div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-surface-2 rounded-lg p-6">
              <div className="text-xs text-fg-muted mb-2">Estimated monthly payment</div>
              <div className="text-4xl font-mono font-semibold text-cyan mb-1">
                {formatUSD(Math.round(monthlyPayment))}
              </div>
              <div className="text-xs text-fg-dim mb-6">Fixed rate · 9% APR · {term} mo</div>

              <div className="space-y-2 text-xs mb-6">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-fg-muted">Lot price</span>
                  <span className="mono font-semibold">{formatUSD(price)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-fg-muted">Down payment</span>
                  <span className="mono font-semibold">{formatUSD(downPayment)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-fg-muted">Financed amount</span>
                  <span className="mono font-semibold">{formatUSD(financed)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-fg-muted">Total interest</span>
                  <span className="mono font-semibold">{formatUSD(Math.round(totalInterest))}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-fg-muted">Total paid</span>
                  <span className="mono font-semibold text-cyan">{formatUSD(Math.round(totalPayment))}</span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary w-full justify-center">
                Reserve this lot →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
