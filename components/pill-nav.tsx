"use client";

import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type PillNavProps = {
  items: PillNavItem[];
  activeHref: string;
  homeHref: string;
  homeAriaLabel: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
  mobileExtra?: React.ReactNode;
};

const isExternalLink = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("//") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("#");

export function PillNav({
  items,
  activeHref,
  homeHref,
  homeAriaLabel,
  className = "",
  ease = "power3.out",
  baseColor = "rgba(10, 12, 24, 0.78)",
  pillColor = "rgba(16, 22, 40, 0.5)",
  hoveredPillTextColor = "#eef5ff",
  pillTextColor,
  initialLoadAnimation = true,
  mobileExtra
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? "#dce8ff";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  const logoMarkRef = useRef<HTMLSpanElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);

  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const timelines = tlRefs.current;
    const activeTweens = activeTweenRefs.current;

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const w = rect.width;
        const h = Math.max(rect.height, 1);

        const r = ((w * w) / 4 + h * h) / (2 * h);
        const d = Math.ceil(2 * r) + 2;
        const delta = Math.ceil(r - Math.sqrt(Math.max(0, r * r - (w * w) / 4))) + 1;
        const originY = d - delta;

        circle.style.width = `${d}px`;
        circle.style.height = `${d}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();

        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);

    document.fonts?.ready.then(layout).catch(() => {
      // no-op
    });

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, y: 8 });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0 });
        gsap.to(logoRef.current, { scale: 1, duration: 0.55, ease });
      }

      if (navItemsRef.current) {
        gsap.set(navItemsRef.current, { width: 0, overflow: "hidden" });
        gsap.to(navItemsRef.current, {
          width: "auto",
          duration: 0.55,
          ease,
          onComplete: () => {
            if (navItemsRef.current) {
              navItemsRef.current.style.overflow = "visible";
            }
          }
        });
      }
    }

    return () => {
      window.removeEventListener("resize", layout);
      timelines.forEach((tl) => tl?.kill());
      activeTweens.forEach((tw) => tw?.kill());
      logoTweenRef.current?.kill();
    };
  }, [ease, initialLoadAnimation, items]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleEnter = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto"
    });
  };

  const handleLeave = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto"
    });
  };

  const handleLogoEnter = () => {
    if (!logoMarkRef.current) return;

    logoTweenRef.current?.kill();
    gsap.set(logoMarkRef.current, { rotate: 0 });
    logoTweenRef.current = gsap.to(logoMarkRef.current, {
      rotate: 360,
      duration: 0.22,
      ease,
      overwrite: "auto"
    });
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);

    if (line1Ref.current && line2Ref.current) {
      if (nextState) {
        gsap.to(line1Ref.current, { rotation: 45, y: 3, duration: 0.28, ease });
        gsap.to(line2Ref.current, { rotation: -45, y: -3, duration: 0.28, ease });
      } else {
        gsap.to(line1Ref.current, { rotation: 0, y: 0, duration: 0.24, ease });
        gsap.to(line2Ref.current, { rotation: 0, y: 0, duration: 0.24, ease });
      }
    }

    if (mobileMenuRef.current) {
      if (nextState) {
        gsap.set(mobileMenuRef.current, { visibility: "visible" });
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease, transformOrigin: "top center" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            if (mobileMenuRef.current) {
              gsap.set(mobileMenuRef.current, { visibility: "hidden" });
            }
          }
        });
      }
    }
  };

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    toggleMobileMenu();
  };

  const cssVars = {
    ["--pill-base" as const]: baseColor,
    ["--pill-bg" as const]: pillColor,
    ["--pill-hover-text" as const]: hoveredPillTextColor,
    ["--pill-text" as const]: resolvedPillTextColor,
    ["--pill-nav-h" as const]: "44px",
    ["--pill-pad-x" as const]: "18px",
    ["--pill-gap" as const]: "3px"
  } as React.CSSProperties;

  const renderLink = (
    item: PillNavItem,
    content: React.ReactNode,
    classNameValue: string,
    onClick?: () => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void
  ) => {
    if (isExternalLink(item.href)) {
      const isHash = item.href.startsWith("#");
      const rel = item.href.startsWith("http") ? "noopener noreferrer" : undefined;

      return (
        <a
          href={item.href}
          aria-label={item.ariaLabel ?? item.label}
          className={classNameValue}
          target={isHash ? undefined : rel ? "_blank" : undefined}
          rel={rel}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        aria-label={item.ariaLabel ?? item.label}
        className={classNameValue}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </Link>
    );
  };

  return (
    <div className={`pill-nav-shell ${className}`} style={cssVars}>
      <nav className="pill-nav" aria-label="Primary">
        <Link
          href={homeHref}
          aria-label={homeAriaLabel}
          className="pill-logo-btn"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          <span className="pill-logo-image-wrap" ref={logoMarkRef} aria-hidden="true">
            <Image src="/nexa-icon.svg" alt="" width={21} height={21} className="pill-logo-image" priority />
          </span>
        </Link>

        <div ref={navItemsRef} className="pill-nav-desktop">
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href} role="none" className="pill-list-item">
                  {renderLink(
                    item,
                    <>
                      <span
                        className="pill-hover-circle"
                        aria-hidden="true"
                        ref={(el) => {
                          circleRefs.current[index] = el;
                        }}
                      />
                      <span className="pill-label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">
                          {item.label}
                        </span>
                      </span>
                    </>,
                    `pill-link ${isActive ? "is-active" : ""}`,
                    undefined,
                    () => handleEnter(index),
                    () => handleLeave(index)
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className="pill-hamburger"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="pill-hamburger-line" ref={line1Ref} />
          <span className="pill-hamburger-line" ref={line2Ref} />
        </button>
      </nav>

      <div ref={mobileMenuRef} className="pill-mobile-menu" role="dialog" aria-hidden={!isMobileMenuOpen}>
        <ul>
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                {renderLink(
                  item,
                  item.label,
                  `pill-mobile-link ${isActive ? "is-active" : ""}`,
                  closeMobileMenu
                )}
              </li>
            );
          })}
        </ul>
        {mobileExtra ? <div className="pill-mobile-extra">{mobileExtra}</div> : null}
      </div>
    </div>
  );
}
