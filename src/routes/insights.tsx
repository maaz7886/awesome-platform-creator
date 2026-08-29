import { createFileRoute } from "@tanstack/react-router";

import { PageShell, meta } from "@/components/site/PageShell";
import { NotesGrid } from "@/components/site/Notes";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/insights")({
  head: () =>
    meta(
      "Insights — Maaz Patel",
      "Notes on AI-native companies, agents and automation, AI in education, and the future of work — written from inside the build.",
    ),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from inside the <span className="text-lime">build.</span>
          </>
        }
        lede="Short, opinionated writing on what actually changes when agents enter the operating layer."
      />

      <Section>
        <Reveal>
          <NotesGrid />
        </Reveal>
      </Section>

      <ContactCta />
    </PageShell>
  );
}
