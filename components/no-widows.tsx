"use client";

import { useEffect } from "react";

const TARGET_SELECTOR = [
  "p",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  ".subtitle",
  ".section-sub",
  ".kicker",
  ".chip",
  ".hp-badge",
  ".hp-legend",
  ".note",
  ".btn"
].join(", ");

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "SELECT", "OPTION", "CODE", "PRE"]);

function fixWidow(text: string): string {
  if (!text || text.indexOf(" ") === -1) return text;

  const trimmed = text.trim();
  if (trimmed.length < 6) return text;

  const words = trimmed.split(/\s+/);
  if (words.length < 3) return text;

  return text.replace(/(\s+)(\S+)\s*$/, "\u00A0$2");
}

function applyNoWidows(root: ParentNode): void {
  const nodes = root.querySelectorAll<HTMLElement>(TARGET_SELECTOR);

  nodes.forEach((el) => {
    if (el.dataset.noWidow === "off") return;
    if (SKIP_TAGS.has(el.tagName)) return;

    const textNodes = Array.from(el.childNodes).filter(
      (node): node is Text => node.nodeType === Node.TEXT_NODE
    );

    textNodes.forEach((node) => {
      const original = node.nodeValue ?? "";
      const next = fixWidow(original);
      if (next !== original) node.nodeValue = next;
    });
  });
}

export function NoWidows() {
  useEffect(() => {
    let frame = 0;
    let destroyed = false;

    const schedule = () => {
      if (destroyed || frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        applyNoWidows(document);
      });
    };

    schedule();

    const observer = new MutationObserver(() => schedule());
    const shell = document.querySelector(".site-shell") ?? document.body;
    observer.observe(shell, { childList: true, subtree: true });

    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);

    return () => {
      destroyed = true;
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
