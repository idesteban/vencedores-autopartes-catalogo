(function () {
  const DEFAULT_WA = "573114560990";
  const catalog = window.VA_CATALOG || { brands: [], products: [], flyers: [], waLines: {}, waNumber: DEFAULT_WA };
  const WA = catalog.waNumber || DEFAULT_WA;
  const waLines = catalog.waLines || {};

  const waUrl = (text) =>
    `https://wa.me/${WA}?text=${encodeURIComponent(text || waLines.general || "Hola estoy muy interesado en sus productos.")}`;

  // Prefer authored wa.me href; repair only legacy wrong number 573176323054.
  document.querySelectorAll("[data-wa-msg]").forEach((el) => {
    const msg = el.getAttribute("data-wa-msg");
    const href = el.getAttribute("href") || "";
    if (href.includes("wa.me/")) {
      if (href.includes("573176323054")) {
        el.setAttribute("href", waUrl(msg));
      }
    } else {
      el.setAttribute("href", waUrl(msg));
    }
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  const toggle = document.getElementById("navToggle");
  const drawer = document.getElementById("navDrawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    drawer.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const links = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...links]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const map = new Map(sections.map((s, i) => [s, links[i]]));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const link = map.get(e.target);
          if (!link) return;
          if (e.isIntersecting) {
            links.forEach((l) => l.removeAttribute("aria-current"));
            link.setAttribute("aria-current", "page");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbClose = document.getElementById("lightboxClose");
  function openLb(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "Ficha tecnica visual";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    lbClose && lbClose.focus();
  }
  function closeLb() {
    if (!lb) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    if (lbImg) lbImg.removeAttribute("src");
  }
  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      openLb(el.getAttribute("data-lightbox") || (el.querySelector("img") && el.querySelector("img").src), el.querySelector("img") && el.querySelector("img").alt);
    });
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openLb(el.getAttribute("data-lightbox") || (el.querySelector("img") && el.querySelector("img").src), el.querySelector("img") && el.querySelector("img").alt);
      }
    });
  });
  lbClose && lbClose.addEventListener("click", closeLb);
  lb && lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  const SYNONYMS = {
    chevy: "chevrolet", chevrolet: "chevrolet", dimax: "d-max", dmax: "d-max",
    "d max": "d-max", luv: "chevrolet", pedal: "pedales", pedales: "pedales",
    forro: "pedales", forros: "pedales", freno: "pedales", embrague: "pedales",
    guardapolvo: "guardapolvos", guardapolvos: "guardapolvos", "g/polvo": "guardapolvos",
    gpolvo: "guardapolvos", fuelle: "fuelles", fuelles: "fuelles", direccion: "fuelles",
    cremallera: "fuelles", homocinetica: "guardapolvos", triceta: "guardapolvos",
    mezcla: "mezclas", mezclas: "mezclas", compuesto: "mezclas", caucho: "mezclas",
    hyunday: "hyundai", hyundia: "hyundai", acent: "accent", acento: "accent",
    mercedes: "mercedes-benz", mb: "mercedes-benz", buseton: "buseton",
    picanto: "picanto", ekotaxi: "eko taxi", ion: "picanto", morning: "picanto",
    renault: "renault", mazda: "mazda", nissan: "nissan", toyota: "toyota",
    kia: "kia", mitsubishi: "mitsubishi", suzuki: "suzuki", spark: "spark",
    chronos: "spark", aveo: "aveo", sail: "sail", corsa: "corsa", duster: "duster",
    logan: "logan", sandero: "sandero", clio: "clio", atos: "atos", twingo: "twingo",
    kangoo: "kangoo", symbol: "symbol", frontier: "frontier", prado: "prado",
    sprint: "sprint", swift: "swift"
  };

  function normalize(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s\-\/]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function expandTokens(text) {
    const n = normalize(text);
    if (!n) return [];
    const raw = n.split(/[\s\/]+/).filter(Boolean);
    const out = new Set();
    raw.forEach((t) => {
      out.add(t);
      if (SYNONYMS[t]) out.add(normalize(SYNONYMS[t]));
    });
    for (let i = 0; i < raw.length - 1; i++) {
      const bi = raw[i] + " " + raw[i + 1];
      if (SYNONYMS[bi]) out.add(normalize(SYNONYMS[bi]));
      out.add(bi);
    }
    return Array.from(out);
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const m = a.length, n = b.length;
    if (Math.abs(m - n) > 3) return 99;
    const row = new Array(n + 1);
    for (let j = 0; j <= n; j++) row[j] = j;
    for (let i = 1; i <= m; i++) {
      let prev = i - 1;
      row[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = row[j];
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
        prev = tmp;
      }
    }
    return row[n];
  }

  function tokenFuzzy(queryTok, hayTok) {
    if (!queryTok || !hayTok) return 0;
    if (hayTok === queryTok) return 12;
    if (hayTok.startsWith(queryTok) || queryTok.startsWith(hayTok)) return 8;
    if (hayTok.includes(queryTok) || queryTok.includes(hayTok)) return 5;
    if (queryTok.length >= 3 && hayTok.length >= 3) {
      const d = levenshtein(queryTok, hayTok);
      if (d === 1) return 4;
      if (d === 2 && queryTok.length >= 5) return 2;
    }
    return 0;
  }

  function productHaystack(p) {
    return normalize([
      p.ref, p.title, p.desc, p.brand,
      ...(p.brands || []), ...(p.models || []), ...(p.tags || []),
      ...(p.synonyms || []), p.type, ...(p.legacy || []), p.notes || ""
    ].join(" "));
  }

  function scoreProduct(p, query, brandFilter, typeFilter) {
    if (typeFilter && p.type !== typeFilter) return -1;
    if (brandFilter) {
      const bf = normalize(brandFilter);
      const brandHit =
        normalize(p.brand) === bf ||
        (p.brands || []).some((b) => normalize(b) === bf);
      if (p.type === "mezcla") {
        if (!typeFilter || typeFilter !== "mezcla") return -1;
      } else if (!brandHit) {
        return -1;
      }
    }

    const q = normalize(query);
    if (!q) return 1;

    let score = 0;
    const hay = productHaystack(p);
    const qTokens = expandTokens(query);

    if (normalize(p.ref) === q || normalize(p.ref).includes(q)) score += 40;
    if (hay.includes(q)) score += 25;

    const hayTokens = hay.split(" ").filter(Boolean);
    qTokens.forEach((qt) => {
      if ((p.brands || []).some((b) => normalize(b) === qt) || normalize(p.brand) === qt) score += 18;
      if ((p.models || []).some((m) => normalize(m).includes(qt))) score += 14;
      if ((p.synonyms || []).some((s) => normalize(s) === qt || normalize(s).includes(qt))) score += 10;
      if (
        (qt === "pedales" && p.type === "pedal") ||
        (qt === "fuelles" && p.type === "fuelle") ||
        (qt === "guardapolvos" && p.type === "guardapolvo") ||
        (qt === "mezclas" && p.type === "mezcla") ||
        normalize(p.type).includes(qt)
      ) score += 12;
      hayTokens.forEach((ht) => { score += tokenFuzzy(qt, ht); });
    });

    return score > 0 ? score : -1;
  }

  function typeLabel(t) {
    return { pedal: "Pedal", guardapolvo: "Guardapolvo", fuelle: "Fuelle", mezcla: "Mezcla" }[t] || t;
  }

  function countForBrand(brandName) {
    const bf = normalize(brandName);
    return catalog.products.filter(
      (p) =>
        p.type !== "mezcla" &&
        (normalize(p.brand) === bf || (p.brands || []).some((b) => normalize(b) === bf))
    ).length;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const brandGrid = document.getElementById("brandGrid");
  const productGrid = document.getElementById("productGrid");
  const metaEl = document.getElementById("tiendaMeta");
  const emptyEl = document.getElementById("tiendaEmpty");
  const queryEl = document.getElementById("tiendaQuery");
  const brandEl = document.getElementById("tiendaBrand");
  const typeEl = document.getElementById("tiendaType");
  const clearBtn = document.getElementById("tiendaClear");

  let activeBrandId = "";

  function populateBrandSelect() {
    if (!brandEl) return;
    catalog.brands.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.name;
      opt.textContent = b.name;
      brandEl.appendChild(opt);
    });
  }

  function renderBrands() {
    if (!brandGrid) return;
    brandGrid.innerHTML = "";
    catalog.brands.forEach((b) => {
      const n = countForBrand(b.name);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card brand-card" + (activeBrandId === b.id ? " is-active" : "");
      btn.setAttribute("data-brand-id", b.id);
      btn.setAttribute("aria-pressed", activeBrandId === b.id ? "true" : "false");
      const highlights = (b.highlights || []).slice(0, 3)
        .map((h) => "<span>" + escapeHtml(h) + "</span>")
        .join("");
      btn.innerHTML =
        '<div class="brand-card-visual">' +
        '<span class="brand-mono" aria-hidden="true">' + escapeHtml(b.monogram || b.name[0]) + "</span></div>" +
        '<div class="brand-card-body"><strong>' + escapeHtml(b.name) + "</strong>" +
        '<p class="tagline">' + escapeHtml(b.tagline || "") + "</p>" +
        '<div class="brand-highlights">' + highlights + "</div>" +
        '<span class="brand-count">' + n + " referencia" + (n === 1 ? "" : "s") + "</span></div>";
      btn.addEventListener("click", () => {
        if (activeBrandId === b.id) {
          activeBrandId = "";
          if (brandEl) brandEl.value = "";
        } else {
          activeBrandId = b.id;
          if (brandEl) brandEl.value = b.name;
        }
        renderAll();
        const title = document.getElementById("productResultsTitle");
        if (title) title.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      brandGrid.appendChild(btn);
    });
  }

  function waMsgFor(p) {
    const line = waLines[p.waLine] || waLines.general || "Hola estoy muy interesado en sus productos.";
    return line + " — Ref " + p.ref + ": " + p.title;
  }

  const WA_ICON = '<svg class="icon-wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function renderProducts() {
    if (!productGrid) return;
    const q = (queryEl && queryEl.value) || "";
    let brandFilter = (brandEl && brandEl.value) || "";
    if (activeBrandId) {
      const b = catalog.brands.find((x) => x.id === activeBrandId);
      if (b) brandFilter = b.name;
    }
    const typeFilter = (typeEl && typeEl.value) || "";

    const scored = catalog.products
      .map((p) => ({ p: p, s: scoreProduct(p, q, brandFilter, typeFilter) }))
      .filter((x) => x.s >= 0)
      .sort((a, b) => b.s - a.s || a.p.ref.localeCompare(b.p.ref, "es"));

    productGrid.innerHTML = "";
    if (!scored.length) {
      if (emptyEl) emptyEl.hidden = false;
      if (metaEl) metaEl.textContent = "0 productos · ajusta la busqueda o marca";
      return;
    }
    if (emptyEl) emptyEl.hidden = true;

    const filterBits = [];
    if (brandFilter) filterBits.push(brandFilter);
    if (typeFilter) filterBits.push(typeLabel(typeFilter));
    if (q.trim()) filterBits.push('"' + q.trim() + '"');
    if (metaEl) {
      metaEl.textContent =
        scored.length + " producto" + (scored.length === 1 ? "" : "s") +
        (filterBits.length ? " · " + filterBits.join(" · ") : " · catalogo completo") +
        " · sin precios — cotiza por WhatsApp";
    }

    scored.forEach(function (item) {
      const p = item.p;
      const models = (p.models || []).slice(0, 8)
        .map(function (m) { return "<span>" + escapeHtml(m) + "</span>"; })
        .join("");
      const more = (p.models || []).length > 8
        ? "<span>+" + ((p.models || []).length - 8) + "</span>"
        : "";
      const brandsLine = (p.brands || []).length
        ? escapeHtml((p.brands || []).join(" · "))
        : (p.type === "mezcla" ? "Mezclas (no asociado a marca)" : "");
      const note = p.notes ? '<p class="tp-note">' + escapeHtml(p.notes) + "</p>" : "";
      const legacy = p.legacy && p.legacy.length
        ? '<span class="pill" style="margin-left:.35rem">Legacy ' + escapeHtml(p.legacy.join(", ")) + "</span>"
        : "";
      const msg = waMsgFor(p);
      const article = document.createElement("article");
      article.className = "card tp-card";
      article.innerHTML =
        '<div class="ref"><span>' + escapeHtml(p.ref) + '</span>' +
        '<span class="tp-type is-' + escapeHtml(p.type) + '">' + escapeHtml(typeLabel(p.type)) + "</span>" +
        legacy + "</div>" +
        "<h3>" + escapeHtml(p.title) + "</h3>" +
        (brandsLine ? '<div class="tp-brands">' + brandsLine + "</div>" : "") +
        '<p class="desc">' + escapeHtml(p.desc || "") + "</p>" + note +
        '<div class="tp-models">' + models + more + "</div>" +
        '<a class="btn btn-wa btn-sm" href="' + waUrl(msg) + '" target="_blank" rel="noopener noreferrer">' +
        WA_ICON + " Cotizar " + escapeHtml(p.ref) + "</a>";
      productGrid.appendChild(article);
    });
  }

  const flyerCardGrid = document.getElementById("flyerCardGrid");
  const flyerDetail = document.getElementById("flyerDetail");
  const flyerPanel = document.getElementById("flyerPanel");
  const flyerClose = document.getElementById("flyerClose");
  let activeFlyerId = "";

  const BENEFITS = [
    { icon: "◆", label: "Alta durabilidad" },
    { icon: "◎", label: "Ajuste perfecto" },
    { icon: "★", label: "Calidad VA" },
    { icon: "➤", label: "Envíos Colombia" },
  ];

  function productMatchesFlyer(p, flyer) {
    if (p.type === "mezcla") return false;
    const pm = flyer.productMatch || {};
    const brands = pm.brands || [];
    const keys = (pm.modelKeywords || []).map(normalize);
    const refs = (pm.includeRefs || []).map(function (r) { return normalize(r); });

    const brandHit =
      !brands.length ||
      brands.some(function (b) {
        const bf = normalize(b);
        return normalize(p.brand) === bf || (p.brands || []).some(function (x) { return normalize(x) === bf; });
      });
    if (!brandHit) return false;

    // Brand overview: all products of that brand
    if (flyer.isBrandOverview) return true;

    if (refs.length && refs.indexOf(normalize(p.ref)) >= 0) return true;

    if (!keys.length) return brandHit;

    const hay = productHaystack(p);
    return keys.some(function (k) { return k && hay.indexOf(k) >= 0; });
  }

  function productsForFlyer(flyer) {
    const list = catalog.products.filter(function (p) { return productMatchesFlyer(p, flyer); });
    // Prefer includeRefs order first
    const refs = (flyer.productMatch && flyer.productMatch.includeRefs) || [];
    const order = {};
    refs.forEach(function (r, i) { order[normalize(r)] = i; });
    return list.sort(function (a, b) {
      const ia = order.hasOwnProperty(normalize(a.ref)) ? order[normalize(a.ref)] : 999;
      const ib = order.hasOwnProperty(normalize(b.ref)) ? order[normalize(b.ref)] : 999;
      if (ia !== ib) return ia - ib;
      return a.ref.localeCompare(b.ref, "es");
    });
  }

  function flyerImageSrc(flyer) {
    const src = flyer.heroImage || "";
    // fallback chain for missing files handled by onerror in HTML
    return src;
  }

  function waMsgFlyerProduct(p, flyer) {
    const line = waLines[p.waLine] || waLines.general || "Hola estoy muy interesado en sus productos.";
    return line + " — Modelo " + (flyer.modelsLabel || flyer.brand) + " — Ref " + p.ref + ": " + p.title;
  }

  function waMsgFlyerCta(flyer) {
    return "Hola, soy almacén. Quiero cotizar repuestos VA para " + (flyer.modelsLabel || flyer.brand) + " (" + flyer.brand + "). WhatsApp Jacobo.";
  }

  function renderFlyerCards() {
    if (!flyerCardGrid) return;
    const q = (queryEl && queryEl.value) || "";
    let brandFilter = (brandEl && brandEl.value) || "";
    if (activeBrandId) {
      const b = catalog.brands.find(function (x) { return x.id === activeBrandId; });
      if (b) brandFilter = b.name;
    }
    const flyers = catalog.flyers || [];
    const qn = normalize(q);
    const bf = normalize(brandFilter);

    flyerCardGrid.innerHTML = "";
    flyers.forEach(function (f) {
      if (bf && normalize(f.brand) !== bf && normalize(f.brandId || "") !== bf) return;
      if (qn) {
        const hay = normalize([f.brand, f.title, f.modelsLabel, (f.models || []).join(" "), f.slogan || ""].join(" "));
        if (hay.indexOf(qn) < 0 && !expandTokens(q).some(function (t) { return hay.indexOf(t) >= 0; })) return;
      }
      const prods = productsForFlyer(f);
      if (!prods.length) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "flyer-card" + (activeFlyerId === f.id ? " is-active" : "");
      btn.setAttribute("data-flyer-id", f.id);
      const img = flyerImageSrc(f);
      btn.innerHTML =
        '<div class="flyer-card-thumb">' +
        (img
          ? '<img src="' + escapeHtml(img) + '" alt="' + escapeHtml(f.heroAlt || f.brand) + '" loading="lazy" onerror="this.style.display=\'none\';this.parentNode.classList.add(\'no-img\')">'
          : "") +
        '<span class="flyer-card-badge">' + escapeHtml(f.brand) + "</span></div>" +
        '<div class="flyer-card-body"><strong>' + escapeHtml(f.modelsLabel || f.brand) + "</strong>" +
        '<span class="flyer-card-count">' + prods.length + " ref" + (prods.length === 1 ? "" : "s") + "</span></div>";
      btn.addEventListener("click", function () { openFlyer(f.id); });
      flyerCardGrid.appendChild(btn);
    });
  }

  function openFlyer(id) {
    const flyer = (catalog.flyers || []).find(function (f) { return f.id === id; });
    if (!flyer || !flyerPanel || !flyerDetail) return;
    activeFlyerId = id;
    const prods = productsForFlyer(flyer);
    const benefits = BENEFITS.map(function (b) {
      return '<div class="flyer-benefit"><span class="flyer-benefit-icon" aria-hidden="true">' + b.icon +
        '</span><span>' + escapeHtml(b.label) + "</span></div>";
    }).join("");

    const cells = prods.map(function (p) {
      const models = (p.models || []).slice(0, 5).map(function (m) {
        return "<span>" + escapeHtml(m) + "</span>";
      }).join("");
      const more = (p.models || []).length > 5 ? "<span>+" + ((p.models || []).length - 5) + "</span>" : "";
      const msg = waMsgFlyerProduct(p, flyer);
      return (
        '<article class="flyer-prod">' +
        '<div class="flyer-prod-top"><span class="tp-type is-' + escapeHtml(p.type) + '">' + escapeHtml(typeLabel(p.type)) +
        '</span><span class="flyer-prod-ref">' + escapeHtml(p.ref) + "</span></div>" +
        "<h4>" + escapeHtml(p.title) + "</h4>" +
        '<div class="tp-models">' + models + more + "</div>" +
        '<a class="btn btn-wa btn-sm" href="' + waUrl(msg) + '" target="_blank" rel="noopener noreferrer">' +
        WA_ICON + " Cotizar " + escapeHtml(p.ref) + "</a></article>"
      );
    }).join("");

    const caption = flyer.heroCaption
      ? '<p class="flyer-hero-caption">' + escapeHtml(flyer.heroCaption) + "</p>"
      : "";
    const ctaMsg = waMsgFlyerCta(flyer);

    flyerPanel.innerHTML =
      '<div class="flyer-hero">' +
      '<div class="flyer-hero-copy">' +
      '<p class="flyer-brand">' + escapeHtml(flyer.brand) + " · Vencedores Autopartes</p>" +
      '<h2 id="flyerTitle">' + escapeHtml(flyer.title) + "</h2>" +
      '<p class="flyer-slogan">' + escapeHtml(flyer.slogan || "") + "</p>" +
      '<p class="flyer-splash">Pedales · Guardapolvos · Fuelles — fabricados en caucho VA</p>' +
      "</div>" +
      '<div class="flyer-hero-photo">' +
      (flyer.heroImage
        ? '<img src="' + escapeHtml(flyerImageSrc(flyer)) + '" alt="' + escapeHtml(flyer.heroAlt || flyer.brand) +
          '" onerror="this.parentNode.classList.add(\'no-img\');this.remove()">'
        : "") +
      caption +
      "</div></div>" +
      '<div class="flyer-benefits">' + benefits + "</div>" +
      '<div class="flyer-grid">' + (cells || '<p class="muted">Sin referencias en catálogo para este flyer.</p>') + "</div>" +
      '<div class="flyer-cta">' +
      '<div><strong>Cotiza con Jacobo</strong><p>WhatsApp +57 311 456 0990 · Envíos Colombia (origen Bosa)</p></div>' +
      '<a class="btn btn-wa" href="' + waUrl(ctaMsg) + '" target="_blank" rel="noopener noreferrer">' +
      WA_ICON + " WhatsApp 311 456 0990</a></div>";

    flyerDetail.hidden = false;
    renderFlyerCards();
    flyerDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeFlyer() {
    activeFlyerId = "";
    if (flyerDetail) flyerDetail.hidden = true;
    if (flyerPanel) flyerPanel.innerHTML = "";
    renderFlyerCards();
  }

  flyerClose && flyerClose.addEventListener("click", closeFlyer);

  function renderAll() {
    renderFlyerCards();
    renderBrands();
    renderProducts();
  }

  function syncBrandFromSelect() {
    const name = (brandEl && brandEl.value) || "";
    const b = catalog.brands.find(function (x) { return x.name === name; });
    activeBrandId = b ? b.id : "";
    closeFlyer();
    renderAll();
  }

  if (brandGrid && productGrid) {
    populateBrandSelect();
    renderAll();
    queryEl && queryEl.addEventListener("input", function () { renderFlyerCards(); renderProducts(); });
    typeEl && typeEl.addEventListener("change", function () { renderProducts(); });
    brandEl && brandEl.addEventListener("change", syncBrandFromSelect);
    clearBtn && clearBtn.addEventListener("click", function () {
      if (queryEl) queryEl.value = "";
      if (brandEl) brandEl.value = "";
      if (typeEl) typeEl.value = "";
      activeBrandId = "";
      closeFlyer();
      renderAll();
      queryEl && queryEl.focus();
    });
  }
})();
