import { process } from "../data/site";
import { SectionHeading } from "./ui";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-16 bg-navy-900 py-20 text-paper md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Approach" title="How I work" tone="dark" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((s, i) => (
            <li key={s.title} className="border-t border-paper/20 pt-5">
              <p className="font-display text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-paper/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
