import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/site";
import { ButtonLink, SectionHeading } from "./ui";
import { GithubIcon } from "./icons";

function Media({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  if (project.image && !failed) {
    return (
      <div className="bg-navy-800 p-3">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-auto w-full rounded-md border border-paper/20"
        />
      </div>
    );
  }
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center bg-navy-800 text-center">
      <div>
        <p className="font-display text-4xl text-paper/90">{initials}</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-paper/60">
          Screenshot to be added
        </p>
      </div>
    </div>
  );
}

function Card({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex overflow-hidden rounded-2xl border border-ink/10 bg-card/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10 motion-reduce:hover:translate-y-0 ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={featured ? "md:w-1/2" : ""}>
        <Media project={project} />
      </div>
      <div
        className={`flex flex-1 flex-col gap-4 p-6 ${featured ? "md:p-8" : ""}`}
      >
        <h3 className={`font-display ${featured ? "text-3xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <p className="text-ink/80">{project.summary}</p>
        {project.problem && (
          <p className="text-sm text-ink/70">
            <span className="font-medium text-ink">Problem: </span>
            {project.problem}
          </p>
        )}
        {project.role && (
          <p className="text-sm text-ink/70">
            <span className="font-medium text-ink">My role: </span>
            {project.role}
          </p>
        )}
        {project.note && (
          <p className="text-sm italic text-ink/60">{project.note}</p>
        )}
        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full bg-ink/10 px-3 py-1 text-xs font-medium text-ink/80"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.live && (
            <ButtonLink href={project.live}>
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">
                {" "}
                for {project.title} (opens in new tab)
              </span>
            </ButtonLink>
          )}
          {project.github && (
            <ButtonLink href={project.github} variant="secondary">
              <GithubIcon className="h-4 w-4" /> GitHub
              <span className="sr-only">
                {" "}
                repository for {project.title} (opens in new tab)
              </span>
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          intro="Live sites and source code for things I have built."
        />
        <div className="mt-12 grid gap-6">
          {featured.map((p) => (
            <Card key={p.id} project={p} featured />
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
