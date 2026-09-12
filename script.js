(function () {
  const WA = "573176323054";
  const waUrl = (text) =>
    `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

  // Prefill links that use data-wa-msg
  document.querySelectorAll("[data-wa-msg]").forEach((el) => {
    const msg = el.getAttribute("data-wa-msg");
    el.setAttribute("href", waUrl(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Mobile nav
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

  // Smooth active section highlight (optional light)
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

  // Lightbox for fichas técnicas
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbClose = document.getElementById("lightboxClose");
  function openLb(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "Ficha técnica visual";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    lbClose?.focus();
  }
  function closeLb() {
    if (!lb) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    if (lbImg) lbImg.removeAttribute("src");
  }
  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      openLb(el.getAttribute("data-lightbox") || el.querySelector("img")?.src, el.querySelector("img")?.alt);
    });
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openLb(el.getAttribute("data-lightbox") || el.querySelector("img")?.src, el.querySelector("img")?.alt);
      }
    });
  });
  lbClose?.addEventListener("click", closeLb);
  lb?.addEventListener("click", (e) => {
    if (e.target === lb) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLb();
  });
})();
