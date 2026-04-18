'use client';

export default function Contact() {
  return (
    <section className="py-12 px-6" id="contact">
      <div className="container">
        <div className="bg-surface-1 border border-white/6 rounded-lg p-8 md:p-12 text-center">
          <div className="text-xs text-fg-muted font-mono mb-3">// Get in touch</div>
          <h3 className="text-3xl font-inter-tight font-semibold -tracking-wider mb-2">The next move is yours.</h3>
          <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
            Interested in a property? Have questions about our parcels? Drop us a message and we'll get back to you within 24 hours.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:info@oplands.com" className="btn btn-primary">
              info@oplands.com
            </a>
            <a href="tel:5127877961" className="btn btn-ghost">
              (512) 787-7961
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
