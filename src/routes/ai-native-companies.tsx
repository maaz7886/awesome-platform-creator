import { createFileRoute } from "@tanstack/react-router";

import { PRINCIPLES } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { Thesis } from "@/components/site/Thesis";
import { ShapeFramework, PhasesFramework } from "@/components/site/SignatureThinking";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, InquiryCta, Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/ai-native-companies")({
  head: () =>
    meta(
      "The rise of AI-native companies — Maaz Patel",
      "The signature thesis: small expert teams amplified by AI agents, automation and shared context are rewriting how companies are built and operated.",
    ),
  component: AiNativePage,
});

function AiNativePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Signature thinking"
        title={
          <>
            The rise of <span className="text-lime">AI-native companies.</span>
          </>
        }
        lede="How small teams and AI agents will build the next generation of businesses — and what that changes for leaders, institutions and careers."
      >
        <InquiryCta type="masterclass" variant="solid">
          Book the masterclass
        </InquiryCta>
      </PageHero>

      <Thesis />

      <Section>
        <Reveal>
          <Eyebrow>The SHAPE framework</Eyebrow>
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <ShapeFramework />
        </Reveal>
      </Section>

      <Section alt>
        <Reveal>
          <Eyebrow>Five phases of an AI-native company</Eyebrow>
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <PhasesFramework />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Operating principles</Eyebrow>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p} className="display bg-ink p-8 text-xl leading-snug text-cream">
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
