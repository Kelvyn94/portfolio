import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile, links } from "../data/site";
import { ButtonLink } from "./ui";
import { GithubIcon } from "./icons";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="scroll-mt-16 bg-navy-900 text-paper">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div>
          <p className="rise text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {profile.role}
          </p>
          <h1
            className="rise mt-5 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            {profile.headline}
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg text-paper/75"
            style={{ animationDelay: "160ms" }}
          >
            {profile.intro}
          </p>
          <div
            className="rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <ButtonLink href="#projects" tone="dark">
              Explore My Work{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" tone="dark" variant="secondary">
              Contact Me
            </ButtonLink>
            <ButtonLink href={links.github} tone="dark" variant="ghost">
              <GithubIcon className="h-4 w-4" /> GitHub
            </ButtonLink>
          </div>
        </div>

        <div
          className="rise mx-auto w-full max-w-sm md:max-w-none"
          style={{ animationDelay: "200ms" }}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-paper/15 bg-navy-800">
            {photoFailed ? (
              <div
                role="img"
                aria-label="Profile photo placeholder"
                className="flex h-full items-center justify-center font-display text-7xl text-paper/30"
              >
                KM
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={1000}
                height={1250}
                onError={() => setPhotoFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
