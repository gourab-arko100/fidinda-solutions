"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { ArrowRight, ChevronDown, Close, Menu, divisionIcon } from "./Icons";
import { divisions } from "@/data/divisions";
import { navLinks } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropdown(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b bg-page/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "border-line/10 shadow-card" : "border-transparent"
        }`}
      >
        <nav className="container flex h-[76px] items-center justify-between gap-4" aria-label="Main">
          <Link href="/" className="shrink-0 rounded-md" aria-label="Fidinda Solutions — Home">
            <Logo className="h-10 w-auto sm:h-11" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) =>
              "dropdown" in l && l.dropdown ? (
                <li
                  key={l.href}
                  ref={dropRef}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={l.href}
                      className={`nav-link ${isActive(l.href) ? "nav-link-active" : ""}`}
                      aria-current={isActive(l.href) ? "page" : undefined}
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      className="-ml-2 rounded-md p-1.5 text-fg/60 hover:text-brand-red"
                      aria-expanded={dropdown}
                      aria-controls="divisions-menu"
                      aria-label="Show divisions"
                      onClick={() => setDropdown((v) => !v)}
                    >
                      <ChevronDown size={16} className={`transition-transform ${dropdown ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <div
                    id="divisions-menu"
                    className={`absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      dropdown ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-line/10 bg-card shadow-lift">
                      <div className="h-1 bg-gradient-to-r from-brand-red to-navy" aria-hidden />
                      <ul className="p-2">
                        {divisions.map((d) => {
                          const Icon = divisionIcon[d.icon];
                          return (
                            <li key={d.slug}>
                              <Link
                                href={`/divisions#${d.slug}`}
                                onClick={() => setDropdown(false)}
                                className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-soft focus-visible:bg-soft"
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-brand-red">
                                  <Icon size={19} />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block text-sm font-bold text-fg">{d.name}</span>
                                  <span className="block truncate text-xs text-fg/55">{d.tags.slice(0, 3).join(" · ")}</span>
                                </span>
                                <ArrowRight size={16} className="text-fg/30 transition-all group-hover:translate-x-0.5 group-hover:text-brand-red" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <Link
                        href="/divisions"
                        onClick={() => setDropdown(false)}
                        className="flex items-center justify-between border-t border-line/10 px-5 py-3 text-sm font-bold text-brand-red hover:bg-soft"
                      >
                        Compare all divisions <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`nav-link ${isActive(l.href) ? "nav-link-active" : ""}`}
                    aria-current={isActive(l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary hidden sm:inline-flex">
              Get in Touch
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line/10 bg-page shadow-lift transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="container py-6">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-xl px-4 py-3 text-lg font-bold ${
                    isActive(l.href) ? "bg-soft text-brand-red" : "text-fg"
                  }`}
                >
                  {l.label}
                </Link>
                {"dropdown" in l && l.dropdown && (
                  <ul className="mb-2 ml-4 mt-1 space-y-1 border-l-2 border-brand-red/40 pl-3">
                    {divisions.map((d) => {
                      const Icon = divisionIcon[d.icon];
                      return (
                        <li key={d.slug}>
                          <Link
                            href={`/divisions#${d.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 font-medium text-fg/80"
                          >
                            <Icon size={18} className="text-brand-red" />
                            {d.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary mt-6 w-full justify-center">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
