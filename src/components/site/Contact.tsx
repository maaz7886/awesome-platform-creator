import { Eyebrow, Reveal, Section, MAIL } from "./primitives";

const LINKS = [
  { label: MAIL, href: `mailto:${MAIL}`, icon: "✉" },
  { label: "+91 73858 54649", href: "tel:+917385854649", icon: "✆" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maazpatel", icon: "in" },
  { label: "maazpatel.com", href: "https://maazpatel.com", icon: "↗" },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Eyebrow>08 / Open channel</Eyebrow>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Know what you want to plan? Send the audience, desired outcome, and preferred timing.
            Maaz will help shape the right format.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display text-[clamp(2.75rem,7vw,5rem)]">
            <span className="block text-cream">Let’s build</span>
            <span className="block text-lime">what’s next.</span>
          </h2>

          <ul className="mt-14 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="label-mono flex items-center gap-3 text-muted-foreground transition-colors hover:text-lime"
                >
                  <span aria-hidden="true" className="text-lime">
                    {l.icon}
                  </span>
                  <span className="break-all">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <p className="label-mono text-muted-foreground">Maaz Patel / Aivalytics</p>
        <p className="label-mono text-muted-foreground">
          Built for the next operating model · Bangalore
        </p>
      </div>
    </footer>
  );
}
