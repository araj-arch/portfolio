import { ArrowUpRight } from "lucide-react";
import { bio, site } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="container-page">
        <SectionHeading
          index="01"
          kicker="About"
          title="Building across the stack, with AI at the core."
          intro="From LLM-integrated platforms to computer-vision systems — I care about products that actually ship."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5">
            {bio.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 pt-2 font-mono text-sm text-accent link-underline"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="surface-card grid grid-cols-2 gap-px overflow-hidden bg-border p-px">
              {bio.facts.map((fact) => (
                <div key={fact.label} className="bg-surface p-5">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-base font-medium text-text sm:text-lg">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
