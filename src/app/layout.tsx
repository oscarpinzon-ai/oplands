import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'OP Lands Group — Premium Land in the Poconos',
  description: 'Premium vacant land in Pennsylvania\'s Pocono Mountains. Curated parcels, transparent deals, financing in minutes — not months.',
  keywords: 'land for sale, Pennsylvania, Pocono Mountains, real estate investment, land parcels',
  openGraph: {
    title: 'OP Lands Group — Premium Land in the Poconos',
    description: 'Premium vacant land in Pennsylvania\'s Pocono Mountains. Curated parcels, transparent deals, financing.',
    type: 'website',
    url: 'https://oplands.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OP Lands Group',
    description: 'Premium vacant land in the Pocono Mountains',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid-bg"></div>
        <div className="relative z-10">
          {children}
        </div>
        <Script src="/data/lots.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
