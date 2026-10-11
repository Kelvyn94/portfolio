import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const items = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-navy-900/90 text-paper backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="font-display text-lg">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="text-paper/75 transition hover:text-accent"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-paper/10 px-5 pb-4 md:hidden"
        >
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-paper/85"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
