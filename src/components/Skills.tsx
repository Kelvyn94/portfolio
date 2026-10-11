import { skillGroups } from "../data/site";
import { SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          intro="Technologies I use to build web software."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups
            .filter((g) => g.items.length > 0)
            .map((g) => (
              <div key={g.title} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-xl">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-ink/15 bg-card/60 px-3 py-1 text-sm"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
