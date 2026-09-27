import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="container-page">
        <SectionHeading
          index="03"
          kicker="Experience"
          title="Where I've applied it."
          intro="Hands-on industry training in retail sales analytics and ETL pipelines."
        />

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-5 top-2 hidden h-full w-px bg-border sm:block"
          />
          <div className="space-y-5">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.06}>
                <article className="relative sm:pl-16">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-full border border-border bg-surface text-accent sm:grid"
                  >
                    <Briefcase className="h-4 w-4" />
                  </span>

                  <div className="surface-card p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <p className="eyebrow mb-2">{job.duration}</p>
                        <h3 className="font-display text-xl font-semibold sm:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted sm:text-base">
                          <span className="text-text">{job.company}</span>
                          <span aria-hidden="true"> · </span>
                          {job.period}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li key={tag} className="pill">
                          {tag}
                        </li>
                      ))}
                    </ul>
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
