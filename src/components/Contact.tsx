import { Mail, Phone } from "lucide-react";
import { site } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anand-raj-182a0932a",
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/araj-arch",
    href: site.github,
    icon: GithubIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="container-page">
        <SectionHeading
          index="06"
          kicker="Contact"
          title="Let's build something."
          intro="Open to internships, freelance work, and collaborations in AI/ML and full-stack development."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              The fastest way to reach me is email — I usually reply within a day.
              Feel free to reach out about roles, project ideas, or just to talk
              shop about ML and the web.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block font-display text-2xl font-semibold text-accent link-underline sm:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              Based in {site.location}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.label} delay={i * 0.05} className="h-full">
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="surface-card group flex h-full flex-col justify-between gap-6 p-5 transition-colors hover:border-accent"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-2 text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                        {channel.label}
                        {channel.external ? " (opens in new tab)" : ""}
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium text-text transition-colors group-hover:text-accent sm:text-base">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
