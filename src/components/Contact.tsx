import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { links } from "../data/site";
import { SectionHeading } from "./ui";

type Row = { label: string; value: string; href: string };

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = links.email.trim();
  const phone = links.whatsapp.replace(/\D/g, "");

  const rows: Row[] = [
    { label: "GitHub", value: "github.com/Kelvyn94", href: links.github },
  ];
  if (phone) {
    const text = encodeURIComponent(
      "Hello Kelvin, I found your portfolio and would like to talk.",
    );
    rows.push({
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${phone}?text=${text}`,
    });
  }
  if (email) {
    const subject = encodeURIComponent("Hello from your portfolio");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}`;
    rows.push({
      label: "Email",
      value: email,
      href: isMobile ? `mailto:${email}?subject=${subject}` : gmail,
    });
  }
  if (links.linkedin)
    rows.push({
      label: "LinkedIn",
      value: "View profile",
      href: links.linkedin,
    });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the address is still visible on the page
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          intro="Message me on WhatsApp or send an email. I'll reply as soon as I can."
        />
        <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                {...(r.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center justify-between gap-4 py-6 transition hover:text-accent-deep"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-ink/60">
                  {r.label}
                </span>
                <span className="flex items-center gap-2 break-all font-display text-lg sm:text-xl">
                  {r.value}
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
        {email && (
          <p className="mt-4 text-sm text-ink/70">
            Email app didn't open?{" "}
            <a
              className="underline hover:text-accent-deep"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Write in Gmail
            </a>{" "}
            or{" "}
            <button
              type="button"
              onClick={copyEmail}
              className="underline hover:text-accent-deep"
            >
              {copied ? "Address copied" : "copy my address"}
            </button>
            .
          </p>
        )}
      </div>
    </section>
  );
}
