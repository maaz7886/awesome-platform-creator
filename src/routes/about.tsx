import { createFileRoute } from "@tanstack/react-router";

import { PRINCIPLES } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { Founder, Aivalytics } from "@/components/site/Founder";
import { Proof } from "@/components/site/Proof";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, Eyebrow, RouteCta } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Maaz Patel — Founder & CEO, AIValytics",
      "AI platform architect, speaker and founder building AI-ready people, institutions and organizations for the AI-native economy.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            Operator first. <span className="text-lime">Speaker second.</span>
          </>
        }
        lede="Maaz Patel is the Founder & CEO of AIValytics, building AI systems and programs that make people, institutions and organizations AI-ready."
      >
        <RouteCta to="/media-kit">Media kit &amp; bio</RouteCta>
      </PageHero>

      <Founder />
      <Aivalytics />
      <Proof />

      <Section alt>
        <Reveal>
          <Eyebrow>Principles</Eyebrow>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p} className="display bg-ink-alt p-8 text-xl leading-snug text-cream">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ContactCta />
    </PageShell>
  );
}
