import { about } from "../data/site";
import { SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-paper-dark py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
        <SectionHeading
          eyebrow="About"
          title="An IT graduate who likes building useful things"
        />
        <div className="space-y-5 text-lg text-ink/80">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
