/**
 * Embudo misma pestaña: marca → línea → tipo → grilla → ficha
 */
(function () {
  const C = window.VA_CATALOG;
  if (!C) return;

  const state = { step: "brands", brand: null, line: null, type: null, product: null };
  const el = {
    body: document.getElementById("funnelBody"),
    crumbs: document.getElementById("funnelCrumbs"),
    back: document.getElementById("funnelBack"),
    lightbox: document.getElementById("lightbox"),
    lightboxImg: document.getElementById("lightboxImg"),
  };

  const WA_ICON =
    '<svg class="icon-wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function go(step, patch) {
    Object.assign(state, patch || {});
    state.step = step;
    if (step === "brands") {
      state.brand = state.line = state.type = state.product = null;
    } else if (step === "lines") {
      state.line = state.type = state.product = null;
    } else if (step === "types") {
      state.type = state.product = null;
    } else if (step === "products") {
      state.product = null;
    }
    render();
    const tienda = document.getElementById("tienda");
    if (tienda && step !== "brands") {
      tienda.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderCrumbs() {
    const parts = [];
    parts.push(crumb("Marcas", "brands", state.step === "brands"));
    if (state.brand) {
      const b = C.getBrand(state.brand);
      parts.push('<span class="crumb-sep">›</span>');
      parts.push(crumb(b ? b.name : state.brand, "lines", state.step === "lines"));
    }
    if (state.line) {
      parts.push('<span class="crumb-sep">›</span>');
      parts.push(crumb(state.line, "types", state.step === "types"));
    }
    if (state.type) {
      const t = C.getType(state.type);
      parts.push('<span class="crumb-sep">›</span>');
      parts.push(crumb(t ? t.name : state.type, "products", state.step === "products"));
    }
    if (state.product) {
      const p = C.getProduct(state.product);
      parts.push('<span class="crumb-sep">›</span>');
      parts.push(crumb(p ? p.ref : "Ficha", "detail", true));
    }
    el.crumbs.innerHTML = parts.join("");
    el.crumbs.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const step = btn.getAttribute("data-go");
        go(step);
      });
    });
    el.back.hidden = state.step === "brands";
  }

  function crumb(label, step, active) {
    return (
      '<button type="button" class="crumb' +
      (active ? " active" : "") +
      '" data-go="' +
      step +
      '">' +
      escapeHtml(label) +
      "</button>"
    );
  }

  function renderBrands() {
    el.body.innerHTML =
      '<div class="brand-grid">' +
      C.brands
        .map(
          (b) =>
            '<button type="button" class="brand-card" data-brand="' +
            b.id +
            '">' +
            '<div class="brand-mono" aria-hidden="true">' +
            escapeHtml(b.monogram) +
            "</div>" +
            "<h3>" +
            escapeHtml(b.name) +
            "</h3>" +
            "<p>" +
            escapeHtml(C.brandTagline) +
            "</p>" +
            "</button>"
        )
        .join("") +
      "</div>";
    el.body.querySelectorAll("[data-brand]").forEach((btn) => {
      btn.addEventListener("click", () => go("lines", { brand: btn.getAttribute("data-brand") }));
    });
  }

  function renderLines() {
    const lines = C.linesFor(state.brand);
    if (!lines.length) {
      el.body.innerHTML =
        '<div class="empty-state"><p>Sin líneas documentadas aún para esta marca en el catálogo PDF.</p><a class="btn btn-wa" target="_blank" rel="noopener" href="' +
        C.waUrl("Hola, busco repuestos " + (C.getBrand(state.brand) || {}).name) +
        '">' +
        WA_ICON +
        " Consultar por WhatsApp</a></div>";
      return;
    }
    el.body.innerHTML =
      '<div class="line-grid">' +
      lines
        .map(
          (ln) =>
            '<button type="button" class="line-card" data-line="' +
            escapeHtml(ln) +
            '"><h3>' +
            escapeHtml(ln) +
            "</h3></button>"
        )
        .join("") +
      "</div>";
    el.body.querySelectorAll("[data-line]").forEach((btn) => {
      btn.addEventListener("click", () => go("types", { line: btn.getAttribute("data-line") }));
    });
  }

  function renderTypes() {
    const types = C.typesFor(state.brand, state.line);
    if (!types.length) {
      el.body.innerHTML =
        '<div class="empty-state"><p>No hay tipos listados para esta línea en el PDF. Escríbanos por WhatsApp.</p><a class="btn btn-wa" target="_blank" rel="noopener" href="' +
        C.waUrl(
          "Hola, busco repuestos " +
            (C.getBrand(state.brand) || {}).name +
            " " +
            state.line
        ) +
        '">' +
        WA_ICON +
        " Consultar</a></div>";
      return;
    }
    el.body.innerHTML =
      '<div class="type-grid">' +
      types
        .map(
          (t) =>
            '<button type="button" class="type-card" data-type="' +
            t.id +
            '"><h3>' +
            escapeHtml(t.name) +
            "</h3><p>" +
            escapeHtml(t.label) +
            "</p></button>"
        )
        .join("") +
      "</div>";
    el.body.querySelectorAll("[data-type]").forEach((btn) => {
      btn.addEventListener("click", () => go("products", { type: btn.getAttribute("data-type") }));
    });
  }

  function renderProducts() {
    const list = C.productsFor(state.brand, state.line, state.type);
    if (!list.length) {
      el.body.innerHTML = '<div class="empty-state"><p>Sin productos en este filtro.</p></div>';
      return;
    }
    el.body.innerHTML =
      '<div class="product-grid">' +
      list
        .map(
          (p) =>
            '<button type="button" class="product-card" data-product="' +
            p.id +
            '"><div class="thumb"><img src="' +
            escapeHtml(p.image) +
            '" alt="' +
            escapeHtml(p.title) +
            '" loading="lazy"></div><div class="meta"><div class="ref">' +
            escapeHtml(p.ref) +
            "</div><h3>" +
            escapeHtml(p.title) +
            "</h3></div></button>"
        )
        .join("") +
      "</div>";
    el.body.querySelectorAll("[data-product]").forEach((btn) => {
      btn.addEventListener("click", () => go("detail", { product: btn.getAttribute("data-product") }));
    });
  }

  function renderDetail() {
    const p = C.getProduct(state.product);
    if (!p) {
      el.body.innerHTML = '<div class="empty-state"><p>Producto no encontrado.</p></div>';
      return;
    }
    const fit = (p.fits || []).find((f) => f.brand === state.brand);
    const lines = fit ? fit.lines : p.lines;
    el.body.innerHTML =
      '<div class="detail">' +
      '<div class="detail-img"><img src="' +
      escapeHtml(p.image) +
      '" alt="' +
      escapeHtml(p.title) +
      '" data-zoom></div>' +
      '<div class="detail-copy">' +
      '<span class="detail-ref">' +
      escapeHtml(p.ref) +
      "</span>" +
      "<h3>" +
      escapeHtml(p.title) +
      "</h3>" +
      "<p>" +
      escapeHtml(p.description) +
      "</p>" +
      '<ul class="detail-fits">' +
      lines.map((ln) => "<li>" + escapeHtml(ln) + "</li>").join("") +
      "</ul>" +
      '<div class="hero-actions">' +
      '<a class="btn btn-wa" target="_blank" rel="noopener noreferrer" href="' +
      C.waUrl(C.waMessage(p)) +
      '">' +
      WA_ICON +
      " Cotizar por WhatsApp</a>" +
      '<button type="button" class="btn btn-ghost" id="detailBackProducts">Volver a la grilla</button>' +
      "</div></div></div>";
    const zoom = el.body.querySelector("[data-zoom]");
    if (zoom) {
      zoom.addEventListener("click", () => openLightbox(p.image, p.title));
    }
    const backBtn = document.getElementById("detailBackProducts");
    if (backBtn) backBtn.addEventListener("click", () => go("products"));
  }

  function render() {
    renderCrumbs();
    if (state.step === "brands") renderBrands();
    else if (state.step === "lines") renderLines();
    else if (state.step === "types") renderTypes();
    else if (state.step === "products") renderProducts();
    else if (state.step === "detail") renderDetail();
  }

  function openLightbox(src, alt) {
    if (!el.lightbox) return;
    el.lightboxImg.src = src;
    el.lightboxImg.alt = alt || "";
    el.lightbox.classList.add("open");
    el.lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLightbox() {
    if (!el.lightbox) return;
    el.lightbox.classList.remove("open");
    el.lightbox.setAttribute("aria-hidden", "true");
  }

  el.back.addEventListener("click", () => {
    if (state.step === "detail") go("products");
    else if (state.step === "products") go("types");
    else if (state.step === "types") go("lines");
    else if (state.step === "lines") go("brands");
  });

  const lbClose = document.getElementById("lightboxClose");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (el.lightbox) {
    el.lightbox.addEventListener("click", (e) => {
      if (e.target === el.lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  render();
})();
