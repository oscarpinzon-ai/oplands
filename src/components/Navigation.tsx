'use client';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-lg bg-bg/72 border-b border-white/6">
      <div className="container flex items-center justify-between h-15">
        <a href="#top" className="flex items-center gap-2.5 font-inter-tight font-semibold text-sm -tracking-tighter whitespace-nowrap">
          <div className="w-5.5 h-5.5 rounded bg-gradient-to-br from-cyan to-cyan-deep flex items-center justify-center text-black font-black text-xs shadow-lg" style={{ boxShadow: '0 0 0 1px rgba(103,232,249,0.3), 0 0 20px rgba(103,232,249,0.25)' }}>
            OP
          </div>
          <span>OP Lands</span>
          <span className="text-fg-muted font-normal text-xs hide-mobile">/ Group LLC</span>
        </a>

        <div className="flex gap-7 items-center">
          <a href="#properties" className="hide-mobile text-xs text-fg-muted hover:text-fg transition">Properties</a>
          <a href="#features" className="hide-mobile text-xs text-fg-muted hover:text-fg transition">Why us</a>
          <a href="#pricing" className="hide-mobile text-xs text-fg-muted hover:text-fg transition">Pricing</a>
          <a href="#faq" className="hide-mobile text-xs text-fg-muted hover:text-fg transition">FAQ</a>
          <a href="#contact" className="btn btn-primary text-xs">
            Reserve a lot →
          </a>
        </div>
      </div>
    </nav>
  );
}
