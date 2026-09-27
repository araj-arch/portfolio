import { ArrowUp } from "lucide-react";
import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold">
            {site.name}
            <span className="text-muted font-normal"> — {site.title}</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            © {new Date().getFullYear()} · Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
