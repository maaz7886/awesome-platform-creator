import { createFileRoute } from "@tanstack/react-router";

import { SPEAKING_TOPICS } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { InTheRoom } from "@/components/site/InTheRoom";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, InquiryCta, Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/speaking")({
  head: () =>
    meta(
      "Speaking & keynotes — Maaz Patel",
      "Keynotes and masterclasses on AI-native companies, AI agents, entrepreneurship and the future of work — for campuses, conferences and leadership teams.",
    ),
  component: SpeakingPage,
});

function SpeakingPage() {
  const featured = SPEAKING_TOPICS.find((t) => t.featured);
  const rest = SPEAKING_TOPICS.filter((t) => !t.featured);

  return (
    <PageShell>
      <PageHero
        eyebrow="Speaking"
        title={
          <>
            Talks that end in <span className="text-lime">decisions.</span>
          </>
        }
        lede="Keynotes, masterclasses and leadership briefings — built from systems that were actually shipped, not from a slide library."
      >
        <InquiryCta type="speaking" variant="solid">
          Invite Maaz to speak
        </InquiryCta>
      </PageHero>

      <Section>
        {featured ? (
          <Reveal>
            <article className="border border-lime bg-ink-alt p-10 md:p-14">
              <Eyebrow>Signature keynote</Eyebrow>
              <h2 className="display mt-6 text-[clamp(2rem,5vw,3.5rem)] text-cream">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {featured.subtitle}
              </p>
              <p className="label-mono mt-8 text-lime">{featured.format}</p>
            </article>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal key={t.title} delay={i * 40}>
              <article className="h-full bg-ink p-8 transition-colors hover:bg-ink-alt">
                <h3 className="display text-2xl leading-snug text-cream">{t.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t.subtitle}</p>
                <p className="label-mono mt-6 text-clay">{t.format}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <InTheRoom />
      <ContactCta />
    </PageShell>
  );
}
