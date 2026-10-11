import type { ReactNode } from "react";

type Tone = "light" | "dark";
type Variant = "primary" | "secondary" | "ghost";

const styles: Record<string, string> = {
  "primary-dark": "bg-accent text-navy-900 hover:bg-paper",
  "primary-light":
    "bg-navy-900 text-paper hover:bg-navy-700 dark:bg-accent dark:text-navy-900 dark:hover:bg-paper",
  "secondary-dark":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper/10",
  "secondary-light":
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
  "ghost-dark": "text-paper/80 hover:text-accent",
  "ghost-light": "text-ink/70 hover:text-accent-deep",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 ${styles[`${variant}-${tone}`]}`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <p
        className={`text-sm font-medium uppercase tracking-[0.2em] ${dark ? "text-accent" : "text-accent-deep"}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-2xl sm:text-3xl">{title}</h2>
      {intro && (
        <p
          className={`mt-4 text-base ${dark ? "text-paper/70" : "text-ink/70"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
