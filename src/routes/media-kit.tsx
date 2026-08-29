import { createFileRoute } from "@tanstack/react-router";

import { IDENTITY, PROOF_LINE, SPEAKING_TOPICS } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, Eyebrow, TextCta, mailto } from "@/components/site/primitives";

const SHORT_BIO = `${IDENTITY.name} is the ${IDENTITY.title}. He builds AI systems, programs and operating models that help institutions, founders and teams become AI-native.`;

const LONG_BIO = `${IDENTITY.name} is an AI platform architect, speaker and founder based in ${IDENTITY.base}. As ${IDENTITY.title}, he designs and ships AI systems — agents, automation, internal tools and decision-support platforms — and builds the programs that help people operate them. He has engaged 25,000+ students, worked with 20+ startups, and delivered sessions and programs across India for engineering and MBA institutions, universities, schools and startup ecosystems. His signature talk, "The rise of AI-native companies", explores how small expert teams amplified by agents will build the next generation of businesses.`;

export const Route = createFileRoute("/media-kit")({
  head: () =>
    meta(
      "Media kit — Maaz Patel",
      "Speaker bio, titles, topics and contact details for event organizers, press and institutional partners.",
    ),
  component: MediaKitPage,
});

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="bg-ink p-8">
      <p className="label-mono text-clay">{label}</p>
      <p className="mt-5 leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function MediaKitPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Media kit"
        title={
          <>
            Everything an organizer <span className="text-lime">needs.</span>
          </>
        }
        lede="Bios, titles, topics and contact details — copy directly from this page."
      >
        <TextCta href={mailto("Media kit / press request")}>Request assets</TextCta>
      </PageHero>

      <Section>
        <Reveal>
          <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            <Block label="Name" body={IDENTITY.name} />
            <Block label="Title" body={IDENTITY.title} />
            <Block label="Descriptor" body={IDENTITY.descriptor} />
            <Block label="Based in" body={IDENTITY.base} />
            <Block label="Proof line" body={PROOF_LINE} />
            <Block label="Positioning" body={IDENTITY.statement} />
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid gap-px border border-hairline bg-hairline">
            <Block label="Short bio" body={SHORT_BIO} />
            <Block label="Long bio" body={LONG_BIO} />
          </div>
        </Reveal>
      </Section>

      <Section alt>
        <Reveal>
          <Eyebrow>Topics</Eyebrow>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {SPEAKING_TOPICS.map((t) => (
              <li key={t.title} className="bg-ink-alt p-8">
                <h3 className="display text-xl leading-snug text-cream">{t.title}</h3>
                <p className="label-mono mt-4 text-clay">{t.format}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ContactCta />
    </PageShell>
  );
}
