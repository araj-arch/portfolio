import { ExternalLink, Sparkles } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { GithubIcon } from "./icons";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent sm:text-sm"
        aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
      >
        <GithubIcon className="h-4 w-4" />
        Source
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 sm:text-sm"
        aria-label={`${project.title} live demo (opens in a new tab)`}
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        Live demo
      </a>
    </div>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech} className="pill">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
      <span className="text-accent">{project.kind}</span>
      <span aria-hidden="true">·</span>
      <span>{project.year}</span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="container-page">
        <SectionHeading
          index="04"
          kicker="Projects"
          title="Selected work."
          intro="The core of what I do — full-stack AI products, computer vision, and data-driven systems."
        />

        <div className="space-y-5">
          {featured ? (
            <Reveal>
              <article className="surface-card relative overflow-hidden p-6 sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
                  style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent bg-accent-soft text-accent">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      Featured project
                    </p>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    <div>
                      <ProjectMeta project={featured} />
                      <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                        {featured.title}
                      </h3>
                      <p className="mt-1 text-base text-muted sm:text-lg">
                        {featured.subtitle}
                      </p>
                      <p className="mt-5 leading-relaxed text-muted">
                        {featured.summary}
                      </p>
                      <div className="mt-6">
                        <ProjectLinks project={featured} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {featured.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 rounded-lg border border-border bg-surface-2 p-4 text-sm leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <StackList stack={featured.stack} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06} className="h-full">
                <article className="surface-card flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                  <ProjectMeta project={project} />
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <StackList stack={project.stack} />
                  </div>

                  <div className="mt-auto">
                    <ProjectLinks project={project} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
