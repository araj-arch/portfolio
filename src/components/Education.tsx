import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-border bg-bg-soft">
      <div className="container-page">
        <SectionHeading
          index="05"
          kicker="Education"
          title="Academic background."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.06} className="h-full">
              <article
                className={`surface-card flex h-full flex-col p-6 ${
                  item.highlight ? "border-accent" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-lg border ${
                      item.highlight
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border bg-surface-2 text-muted"
                    }`}
                  >
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.school}</p>

                <p
                  className={`mt-auto pt-5 font-mono text-sm ${
                    item.highlight ? "text-accent" : "text-text"
                  }`}
                >
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
