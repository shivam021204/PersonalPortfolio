import { useEffect, useRef } from "react";

/**
 * Mounts once at the top of the app. Renders a soft, blurred glow that
 * follows the cursor with a slight fluid lag (eased toward the real
 * pointer position each frame, rather than snapping to it) and a subtle
 * hue drift confined to a narrow pale algae-green range — so it reads as
 * a whitish bioluminescent light, not a colored spotlight.
 *
 * Writes three CSS custom properties onto <html>, consumed by .cursor-glow
 * in index.css:
 *   --mouse-x / --mouse-y : eased glow position
 *   --mouse-hue           : drifts ~135–175 based on horizontal position
 */
export default function CursorGlow() {
  const target = useRef({ x: 0.5, y: 0.3 });
  const current = useRef({ x: 0.5, y: 0.3 });
  const frame = useRef<number>();

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMove);

    const EASE = 0.09;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * EASE;
      current.current.y += (target.current.y - current.current.y) * EASE;

      const hue = 135 + current.current.x * 40; // stays inside a pale algae-green band

      const root = document.documentElement.style;
      root.setProperty("--mouse-x", `${current.current.x * 100}%`);
      root.setProperty("--mouse-y", `${current.current.y * 100}%`);
      root.setProperty("--mouse-hue", `${hue}`);

      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}