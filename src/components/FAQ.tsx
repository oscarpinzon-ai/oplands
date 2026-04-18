'use client';

import { useState } from 'react';
import { FAQ as FAQType } from '@/lib/types';

export default function FAQ() {
  const faqs: FAQType[] = [
    {
      q: 'Where are your parcels located?',
      a: 'All of our active inventory is in Pennsylvania — primarily Monroe, Pike, Wayne, Lackawanna, and Carbon counties. Most lots sit inside the Pocono Mountains region, within a 2-hour drive of NYC and Philadelphia.',
    },
    {
      q: 'Do you offer financing?',
      a: 'Yes. We finance in-house with 10% down, terms from 12 to 60 months, and rates starting at 9% APR. No banks, no credit gymnastics — run your numbers in our calculator and reserve online.',
    },
    {
      q: 'Are the lots buildable?',
      a: 'Buildability is marked on each listing. We verify zoning, access, and perc-test potential before publishing a lot. For lots that need a perc test, we can coordinate it with a local surveyor.',
    },
    {
      q: 'What\'s included when I reserve?',
      a: 'A signed reservation locks your price and holds the parcel for 14 days while we prepare the title work, deed, and closing docs. Due diligence package includes parcel ID, county tax record, and GPS coordinates.',
    },
    {
      q: 'Are there HOA fees or back taxes?',
      a: 'Each listing clearly states HOA dues (where applicable) and tax status. We never sell a lot with unpaid back taxes — your title is clear at closing or we don\'t sell it.',
    },
    {
      q: 'Can I visit the lot before buying?',
      a: 'Absolutely. We\'ll send you GPS coordinates and local access directions. For out-of-state buyers, we offer on-site video walkthroughs by request.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs text-fg-muted font-mono mb-3">// FAQ</div>
          <h2 className="text-4xl md:text-5xl font-inter-tight font-semibold -tracking-wider mb-3">Questions, answered.</h2>
          <p className="text-fg-muted">Everything you need to know before reserving your first parcel.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-1 border border-white/6 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center px-6 py-4 hover:bg-surface-2 transition text-left"
              >
                <span className="font-inter-tight font-semibold text-sm">{faq.q}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-fg-muted border-t border-white/6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
