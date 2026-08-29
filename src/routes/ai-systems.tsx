import { createFileRoute } from "@tanstack/react-router";

import { STACK } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { BuildsGrid } from "@/components/site/Built";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, InquiryCta, Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/ai-systems")({
  head: () =>
    meta(
      "AI systems & automation — Maaz Patel",
      "Agents, multi-agent orchestration, workflow automation, internal tools and decision-support systems built for teams that need working software, not pilots.",
    ),
  component: AiSystemsPage,
});

function AiSystemsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AI systems"
        title={
          <>
            Systems that <span className="text-lime">run.</span>
          </>
        }
        lede="Agents, automations, internal tools and decision-support systems — scoped, built and deployed with a human checkpoint where it matters."
      >
        <InquiryCta type="ai-system" variant="solid">
          Discuss an AI system
        </InquiryCta>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>What gets built</Eyebrow>
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <BuildsGrid />
        </Reveal>
      </Section>

      <Section alt>
        <Reveal>
          <Eyebrow>Working stack</Eyebrow>
          <ul className="mt-8 flex flex-wrap gap-3">
            {STACK.map((s) => (
              <li key={s} className="label-mono border border-hairline px-4 py-2 text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ContactCta />
    </PageShell>
  );
}
