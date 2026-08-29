import { createFileRoute } from "@tanstack/react-router";

import { CASE_STUDIES } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { CaseCard } from "@/components/site/SelectedWork";
import { Proof } from "@/components/site/Proof";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, Reveal, Section, InquiryCta } from "@/components/site/primitives";

export const Route = createFileRoute("/work")({
  head: () =>
    meta(
      "Selected work — Maaz Patel",
      "Case studies across education, startups and institutions: AI programs, founder workshops, faculty enablement and shipped AI systems.",
    ),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Evidence over <span className="text-lime">adjectives.</span>
          </>
        }
        lede="Every engagement below follows the same shape: a real problem, a defined role, something built, and an outcome that can be pointed at."
      >
        <InquiryCta type="other" variant="solid">
          Discuss a similar engagement
        </InquiryCta>
      </PageHero>

      <Section>
        <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={i * 60}>
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Proof />
      <ContactCta />
    </PageShell>
  );
}
