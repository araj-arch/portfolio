import { BrainCircuit, Code2, Database, LayoutTemplate, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  layout: LayoutTemplate,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border bg-bg-soft">
      <div className="container-page">
        <SectionHeading
          index="02"
          kicker="Skills"
          title="The toolkit."
          intro="Languages, applied ML, and the web stack I use to take ideas from notebook to production."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.05} className="h-full">
                <article className="surface-card flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
