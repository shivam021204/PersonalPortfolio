import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

/**
 * Dark/light switch. Persists choice in localStorage and toggles the
 * `light` class on <html>, which flips every CSS variable in index.css
 * (see :root vs :root.light). Pair with the inline script in index.html
 * so the right theme applies before first paint (no flash).
 */
export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // ignore (e.g. storage blocked)
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      className="relative w-14 h-8 rounded-full border border-[var(--border)] bg-[var(--secondary)] flex-shrink-0 transition-colors duration-300"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center text-[10px] transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
}