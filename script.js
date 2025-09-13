/* NEXA — Site Script (mobile-first helpers)
   - Smooth anchor scrolling
   - Accessible mobile menu (ESC to close, focus trap)
   - Scroll lock when menu is open
   - iOS 100vh fix via --vh custom property
   This script is idempotent: safe to include on all pages.
*/
(function(){
  if (window.NEXA_INITED) return; // prevent double init
  window.NEXA_INITED = true;

  const d = document;
  const $ = (sel, ctx=d)=>ctx.querySelector(sel);
  const $$ = (sel, ctx=d)=>Array.from(ctx.querySelectorAll(sel));

  // ===== Smooth scroll for internal anchors
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = d.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // ===== Mobile nav controls
  const menuBtn = $('#menuBtn');
  const mobileNav = $('#mobileNav');
  let scrollRestore = '';

  function openNav(){
    if (!mobileNav) return;
    // style fallback (works without extra CSS)
    mobileNav.style.display = 'block';
    menuBtn?.setAttribute('aria-expanded','true');
    // scroll lock
    scrollRestore = d.body.style.overflow;
    d.body.style.overflow = 'hidden';
    // focus management
    const focusables = $$('a, button, [tabindex="0"]', mobileNav);
    (focusables[0]||mobileNav).focus({preventScroll:true});
  }
  function closeNav(){
    if (!mobileNav) return;
    mobileNav.style.display = 'none';
    menuBtn?.setAttribute('aria-expanded','false');
    d.body.style.overflow = scrollRestore || '';
    menuBtn?.focus({preventScroll:true});
  }

  menuBtn?.addEventListener('click', () => {
    const open = mobileNav && getComputedStyle(mobileNav).display !== 'none';
    open ? closeNav() : openNav();
  });
  mobileNav?.querySelectorAll('a').forEach(el => el.addEventListener('click', closeNav));
  d.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  // focus trap when nav open
  d.addEventListener('keydown', e => {
    if (e.key !== 'Tab' || !mobileNav) return;
    const visible = getComputedStyle(mobileNav).display !== 'none';
    if (!visible) return;
    const focusEls = $$('a, button, [tabindex]:not([tabindex="-1"])', mobileNav);
    if (!focusEls.length) return;
    const first = focusEls[0];
    const last = focusEls[focusEls.length-1];
    if (e.shiftKey && d.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && d.activeElement === last){ e.preventDefault(); first.focus(); }
  });

  // ===== iOS 100vh fix (sets --vh = 1% of viewport height)
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    d.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVH();
  window.addEventListener('resize', setVH);
})();
// ===== Language switch (robusto) =====
(function () {
  // Normaliza la ruta (quita slash final excepto "/" y "/en/")
  function norm(p) {
    if (p.endsWith("/") && p !== "/" && p !== "/en/") p = p.slice(0, -1);
    return p;
  }

  // Mapas ES <-> EN (asegúrate que los archivos EXISTEN con esos nombres/casos)
  const ES2EN = new Map([
    ["/", "/en/"],
    ["/index", "/en/"],
    ["/index.html", "/en/"],
    ["/servicios", "/en/services.html"],
    ["/servicios.html", "/en/services.html"],
    ["/contacto", "/en/contact.html"],
    ["/contacto.html", "/en/contact.html"],
  ]);
  const EN2ES = new Map([
    ["/en/", "/"],
    ["/en/index", "/"],
    ["/en/index.html", "/"],
    ["/en/services", "/servicios.html"],
    ["/en/services.html", "/servicios.html"],
    ["/en/contact", "/contacto.html"],
    ["/en/contact.html", "/contacto.html"],
  ]);

  function currentLang() {
    return location.pathname.startsWith("/en/") ? "en" : "es";
  }

  function counterpartPath(target) {
    const p = norm(location.pathname);
    if (target === "en") return ES2EN.get(p) || "/en/";
    return EN2ES.get(p) || "/";
  }

  function init() {
    const lang = currentLang();
    document.querySelectorAll(".lang-btn").forEach((a) => {
      a.setAttribute("aria-pressed", String(a.dataset.lang === lang));
      const href = counterpartPath(a.dataset.lang);
      a.setAttribute("href", href);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
