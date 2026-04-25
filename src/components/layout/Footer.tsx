import Link from "next/link";
import { siteConfig } from "../../config/site";

const FOOTER_LINKS = [
  { label: "Work",    href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: (
      <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden>
        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-subtle border-t border-white/[0.06]" role="contentinfo">
      <div className="container-padded py-12 md:py-14">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 items-start mb-10 pb-10 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-3">
              <span className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/30">
                <span className="text-accent-light font-bold text-sm leading-none font-display">A</span>
              </span>
              <span className="font-semibold text-sm text-foreground">
                {siteConfig.name.split(" ")[0]}
                <span className="text-muted font-normal">
                  {" "}{siteConfig.name.split(" ").slice(1).join(" ")}
                </span>
              </span>
            </Link>
            <p className="text-xs text-muted leading-relaxed">
              Technical Partner · Conversion Architect.
              <br />
              Building premium digital infrastructures from Kerala, India.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-dimmed mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-dimmed mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-dimmed">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-muted">Next.js · Tailwind CSS · Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
