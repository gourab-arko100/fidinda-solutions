"use client";

import { Moon, Sun } from "./Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const el = document.documentElement;
    const dark = !el.classList.contains("dark");
    el.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage blocked — theme still switches for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/15 text-fg transition-colors hover:border-brand-red hover:text-brand-red ${className}`}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
    >
      <Moon size={18} className="dark:hidden" />
      <Sun size={18} className="hidden dark:block" />
    </button>
  );
}
