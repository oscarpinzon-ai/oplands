'use client';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-inter-tight font-semibold text-sm -tracking-tighter mb-3">
              <div className="w-5.5 h-5.5 rounded bg-gradient-to-br from-cyan to-cyan-deep flex items-center justify-center text-black font-black text-xs">
                OP
              </div>
              <span>OP Lands Group LLC</span>
            </div>
            <p className="text-xs text-fg-muted">
              Where trust meets opportunity. Premium vacant land across Pennsylvania — curated, verified, and priced with zero surprise.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-xs text-fg-muted hover:text-fg transition">About</a></li>
              <li><a href="#properties" className="text-xs text-fg-muted hover:text-fg transition">Properties</a></li>
              <li><a href="#faq" className="text-xs text-fg-muted hover:text-fg transition">FAQ</a></li>
              <li><a href="#contact" className="text-xs text-fg-muted hover:text-fg transition">Contact</a></li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Regions</h4>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-xs text-fg-muted hover:text-fg transition">Monroe County</a></li>
              <li><a href="#properties" className="text-xs text-fg-muted hover:text-fg transition">Pike County</a></li>
              <li><a href="#properties" className="text-xs text-fg-muted hover:text-fg transition">Wayne County</a></li>
              <li><a href="#properties" className="text-xs text-fg-muted hover:text-fg transition">Lackawanna</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li className="text-fg-muted">414 NE Ravenna Blvd Ste A<br />Seattle, WA 98115</li>
              <li><a href="tel:5127877961" className="text-fg-muted hover:text-fg transition">(512) 787-7961</a></li>
              <li><a href="mailto:info@oplands.com" className="text-fg-muted hover:text-fg transition">info@oplands.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/6 text-xs text-fg-dim">
          <span>© 2026 OP Lands Group LLC · All rights reserved</span>
          <span className="mono">v1.0.0 — Apr 2026</span>
        </div>
      </div>
    </footer>
  );
}
