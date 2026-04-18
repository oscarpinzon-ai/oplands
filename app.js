// OP Lands Landing — behavior
(function () {
  const lots = window.OPLANDS_LOTS || [];

  const fmtUSD = (n) => "$" + n.toLocaleString("en-US");

  // ---------- Render hero lot preview (top 5) ----------
  const heroGrid = document.getElementById("hero-lots");
  if (heroGrid) {
    const featured = lots.slice(0, 5);
    heroGrid.innerHTML = featured
      .map((l) => {
        const img = l.images && l.images[0];
        return `
      <div class="hero-lot" style="background:${l.image_grad};">
        ${img ? `<img src="${img}" alt="" class="hero-lot-img" loading="lazy" />` : ""}
        <span class="hero-lot-badge">${l.tag}</span>
        <div class="hero-lot-info">
          <div class="hero-lot-info-left">
            <div class="hero-lot-title">${l.display_address.split(",")[0]}</div>
            <div class="hero-lot-meta">
              <span>${l.county}, PA</span>
              <span>· ${l.lot_size_acres} ac</span>
            </div>
          </div>
          <div class="hero-lot-price">${fmtUSD(l.amv)}</div>
        </div>
      </div>`;
      })
      .join("");
  }

  // ---------- Render lot cards ----------
  const grid = document.getElementById("lots-grid");
  const countEl = document.getElementById("lot-count");
  const totalEl = document.getElementById("lot-total");
  if (totalEl) totalEl.textContent = lots.length;

  function renderLots(filter) {
    if (!grid) return;
    const filtered = filter && filter !== "all" ? lots.filter((l) => l.county === filter) : lots;
    if (countEl) countEl.textContent = filtered.length;
    grid.innerHTML = filtered
      .map((l) => {
        const img = l.images && l.images[0];
        return `
      <article class="lot-card">
        <div class="lot-card-media" style="background:${l.image_grad};">
          ${img ? `<img src="${img}" alt="${l.display_address}" class="lot-img" loading="lazy" />` : `<span class="lot-placeholder-label">[ lot photo<br/>${l.parcel_id} ]</span>`}
          <span class="lot-tag">${l.tag}</span>
        </div>
        <div class="lot-card-body">
          <div class="lot-address">${l.display_address}</div>
          <div class="lot-loc">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${l.city}, ${l.state} · ${l.county} County
          </div>
          <div class="lot-parcel">PARCEL · ${l.parcel_id}</div>
          <div class="lot-meta-row">
            <div class="lot-price">${fmtUSD(l.amv)}<span class="unit"> USD</span></div>
            <div class="lot-acres">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 6H3M21 12H3M21 18H3"/></svg>
              ${l.lot_size_acres} ac
            </div>
          </div>
          <div class="lot-cta">
            <a href="#contact" class="lot-view-link">View details →</a>
            <a href="#contact" class="reserve-btn">Reserve</a>
          </div>
        </div>
      </article>`;
      })
      .join("");
  }

  renderLots("all");

  // ---------- Filter chips ----------
  const chips = document.querySelectorAll("#filter-chips .chip");
  chips.forEach((c) => {
    c.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      renderLots(c.dataset.filter);
    });
  });

  // ---------- FAQ ----------
  const faqs = [
    {
      q: "Where are your parcels located?",
      a: "All of our active inventory is in Pennsylvania — primarily Monroe, Pike, Wayne, Lackawanna, and Carbon counties. Most lots sit inside the Pocono Mountains region, within a 2-hour drive of NYC and Philadelphia.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes. We finance in-house with 10% down, terms from 12 to 60 months, and rates starting at 9% APR. No banks, no credit gymnastics — run your numbers in our calculator and reserve online.",
    },
    {
      q: "Are the lots buildable?",
      a: "Buildability is marked on each listing. We verify zoning, access, and perc-test potential before publishing a lot. For lots that need a perc test, we can coordinate it with a local surveyor.",
    },
    {
      q: "What's included when I reserve?",
      a: "A signed reservation locks your price and holds the parcel for 14 days while we prepare the title work, deed, and closing docs. Due diligence package includes parcel ID, county tax record, and GPS coordinates.",
    },
    {
      q: "Are there HOA fees or back taxes?",
      a: "Each listing clearly states HOA dues (where applicable) and tax status. We never sell a lot with unpaid back taxes — your title is clear at closing or we don't sell it.",
    },
    {
      q: "Can I visit the lot before buying?",
      a: "Absolutely. We'll send you GPS coordinates and local access directions. For out-of-state buyers, we offer on-site video walkthroughs by request.",
    },
  ];

  const faqList = document.getElementById("faq-list");
  if (faqList) {
    faqList.innerHTML = faqs
      .map(
        (f, i) => `
      <div class="faq-item" data-i="${i}">
        <button class="faq-q">
          <span>${f.q}</span>
          <span class="faq-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </span>
        </button>
        <div class="faq-a">${f.a}</div>
      </div>`
      )
      .join("");

    faqList.querySelectorAll(".faq-item").forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        faqList.querySelectorAll(".faq-item").forEach((x) => x.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
    // open first
    faqList.querySelector(".faq-item")?.classList.add("open");
  }

  // ---------- Financing calculator ----------
  const calcLotSel = document.getElementById("calc-lot");
  const calcDown = document.getElementById("calc-down");
  const calcDownRange = document.getElementById("calc-down-range");
  const calcDownAmt = document.getElementById("calc-down-amt");
  const calcDownAmt2 = document.getElementById("calc-down-amt-2");
  const calcTerm = document.getElementById("calc-term");
  const calcTermRange = document.getElementById("calc-term-range");
  const calcMonthly = document.getElementById("calc-monthly");
  const calcPrice = document.getElementById("calc-price");
  const calcFinanced = document.getElementById("calc-financed");
  const calcInterest = document.getElementById("calc-interest");
  const calcTotal = document.getElementById("calc-total");
  const calcLotName = document.getElementById("calc-lot-name");

  if (calcLotSel) {
    calcLotSel.innerHTML = lots
      .map((l) => `<option value="${l.id}">${l.display_address} — ${fmtUSD(l.amv)}</option>`)
      .join("");

    function recalc() {
      const lot = lots.find((x) => String(x.id) === calcLotSel.value) || lots[0];
      const price = lot.amv;
      const downPct = +calcDownRange.value;
      const term = +calcTermRange.value;
      const apr = 9; // fixed

      const downAmt = price * (downPct / 100);
      const financed = price - downAmt;
      const r = apr / 100 / 12;
      const monthly = r === 0 ? financed / term : (financed * r * Math.pow(1 + r, term)) / (Math.pow(1 + r, term) - 1);
      const totalPaid = monthly * term + downAmt;
      const interest = totalPaid - price;

      calcLotName.textContent = `#${lot.parcel_id}`;
      calcDown.textContent = downPct + "%";
      calcDownAmt.textContent = fmtUSD(Math.round(downAmt));
      calcDownAmt2.textContent = fmtUSD(Math.round(downAmt));
      calcTerm.textContent = term + " mo";
      const ti = document.getElementById("calc-term-inline");
      if (ti) ti.textContent = term;
      calcMonthly.textContent = "$" + monthly.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      calcPrice.textContent = fmtUSD(price);
      calcFinanced.textContent = fmtUSD(Math.round(financed));
      calcInterest.textContent = fmtUSD(Math.round(interest));
      calcTotal.textContent = fmtUSD(Math.round(totalPaid));
    }

    [calcLotSel, calcDownRange, calcTermRange].forEach((el) => el.addEventListener("input", recalc));
    recalc();
  }

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- TWEAKS ----------
  const ACCENTS = {
    cyan: { main: "#67e8f9", hot: "#22d3ee", deep: "#0891b2", soft: "rgba(103,232,249,0.14)", glow: "rgba(34,211,238,0.35)", markFg: "#04181e" },
    lime: { main: "#a3e635", hot: "#84cc16", deep: "#4d7c0f", soft: "rgba(163,230,53,0.14)", glow: "rgba(163,230,53,0.35)", markFg: "#1a2006" },
    violet: { main: "#a78bfa", hot: "#8b5cf6", deep: "#6d28d9", soft: "rgba(167,139,250,0.14)", glow: "rgba(167,139,250,0.35)", markFg: "#16092e" },
    amber: { main: "#fbbf24", hot: "#f59e0b", deep: "#b45309", soft: "rgba(251,191,36,0.14)", glow: "rgba(251,191,36,0.35)", markFg: "#2a1a03" },
  };

  function applyTweaks(t) {
    const a = ACCENTS[t.accent] || ACCENTS.cyan;
    const root = document.documentElement;
    root.style.setProperty("--cyan", a.main);
    root.style.setProperty("--cyan-hot", a.hot);
    root.style.setProperty("--cyan-deep", a.deep);
    root.style.setProperty("--cyan-soft", a.soft);
    root.style.setProperty("--cyan-glow", a.glow);
    // set mark foreground via inline style on brand-mark
    document.querySelectorAll(".brand-mark").forEach((m) => (m.style.color = a.markFg));

    // grid
    document.querySelector(".grid-bg").style.display = t.grid === "off" ? "none" : "block";

    // glow
    const hero = document.querySelector(".hero");
    if (hero) {
      const map = { subtle: "0.08", medium: "0.18", bold: "0.32" };
      hero.style.setProperty("--hero-glow-alpha", map[t.glow] || "0.18");
      // apply via a style tag override
      let override = document.getElementById("__glow_override");
      if (!override) {
        override = document.createElement("style");
        override.id = "__glow_override";
        document.head.appendChild(override);
      }
      override.textContent = `.hero::before{background: radial-gradient(ellipse at center, rgba(34,211,238,${map[t.glow] || 0.18}) 0%, rgba(34,211,238,${(map[t.glow] || 0.18) * 0.3}) 35%, transparent 70%) !important;}`;
    }

    // reflect in panel
    document.querySelectorAll("#tweak-accent .swatch").forEach((s) => s.classList.toggle("active", s.dataset.accent === t.accent));
    document.querySelectorAll("#tweak-grid button").forEach((b) => b.classList.toggle("active", b.dataset.grid === t.grid));
    document.querySelectorAll("#tweak-glow button").forEach((b) => b.classList.toggle("active", b.dataset.glow === t.glow));
  }

  const tweaks = { ...(window.TWEAK_DEFAULTS || TWEAK_DEFAULTS) };
  applyTweaks(tweaks);

  function setTweak(key, val) {
    tweaks[key] = val;
    applyTweaks(tweaks);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*");
    } catch (_) {}
  }

  document.querySelectorAll("#tweak-accent .swatch").forEach((s) =>
    s.addEventListener("click", () => setTweak("accent", s.dataset.accent))
  );
  document.querySelectorAll("#tweak-grid button").forEach((b) =>
    b.addEventListener("click", () => setTweak("grid", b.dataset.grid))
  );
  document.querySelectorAll("#tweak-glow button").forEach((b) =>
    b.addEventListener("click", () => setTweak("glow", b.dataset.glow))
  );

  // Tweaks host protocol
  const panel = document.getElementById("tweaks-panel");
  document.getElementById("tweaks-close")?.addEventListener("click", () => panel.classList.remove("open"));
  window.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "__activate_edit_mode") panel.classList.add("open");
    if (d.type === "__deactivate_edit_mode") panel.classList.remove("open");
  });
  try {
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
  } catch (_) {}
})();
