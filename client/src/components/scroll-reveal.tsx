import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps a block and animates it in the first time it scrolls into view.
 *
 * variant="card" (default) — the dramatic 3D tilt-up, used ONCE per
 * section to make the whole section read as a single floating card.
 *
 * variant="item" — a lighter fade/rise, used for things *inside* a card
 * (list rows, tiles) so they don't fight the section's own tilt.
 *
 * Pass `delay` (ms) to stagger a group of these one after another.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "card",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "card" | "item";
}) {
  // IMPORTANT: the IntersectionObserver watches an OUTER, untransformed
  // div. A rotated/scaled/translated element reports a different
  // bounding box than its real layout position, which made triggering
  // unreliable (some sections never firing). The outer div here always
  // reflects the element's true scroll position; the inner div is the
  // only one that gets the tilt/opacity treatment.
  const outerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = outerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === "card" ? "reveal" : "reveal-item";

  return (
    <div ref={outerRef}>
      <div
        className={`${base} ${visible ? "revealed" : ""} ${className}`}
        style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      >
        {children}
      </div>
    </div>
  );
}