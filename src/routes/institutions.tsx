import { createFileRoute } from "@tanstack/react-router";

import { PageShell, meta } from "@/components/site/PageShell";
import { AudienceMatrix, ProgramCards } from "@/components/site/Institutional";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, InquiryCta, Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/institutions")({
  head: () =>
    meta(
      "Institutional AI programs — Maaz Patel",
      "AI-ready campus programs, faculty enablement, student bootcamps and long-term AI knowledge partnerships for universities, colleges and schools.",
    ),
  component: InstitutionsPage,
});

function InstitutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Institutions"
        title={
          <>
            Capability, not <span className="text-lime">awareness.</span>
          </>
        }
        lede="One workshop starts a conversation. An institution becomes AI-ready when leadership, faculty and students all change how they work."
      >
        <InquiryCta type="institutional" variant="solid">
          Explore institutional programs
        </InquiryCta>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>Who it is for</Eyebrow>
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <AudienceMatrix />
        </Reveal>
      </Section>

      <Section alt>
        <Reveal>
          <Eyebrow>Programs</Eyebrow>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.25rem,6vw,3.75rem)] text-cream">
            Formats that fit a real academic calendar.
          </h2>
        </Reveal>
        <Reveal delay={60} className="mt-12">
          <ProgramCards />
        </Reveal>
      </Section>

      <ContactCta />
    </PageShell>
  );
}
