import { IDENTITY } from "@/content/site";
import { Eyebrow, InquiryCta, Reveal, Section, TextCta, mailto } from "./primitives";

export function ContactCta() {
  return (
    <Section id="contact">
      <Reveal>
        <Eyebrow>13 / Open channel</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.5rem,7vw,4.75rem)] text-cream">
          Let's build what's <span className="text-lime">next.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {IDENTITY.statement} Tell me the audience, the timeline and the outcome you need — I'll
          reply with a concrete shape for the engagement.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-12 flex flex-wrap items-center gap-6">
        <InquiryCta type="speaking" variant="solid">
          Invite Maaz to speak
        </InquiryCta>
        <InquiryCta type="institutional" variant="ghost">
          Start an institutional program
        </InquiryCta>
        <InquiryCta type="ai-system">Build an AI system</InquiryCta>
      </Reveal>

      <Reveal delay={140}>
        <dl className="mt-16 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          <div className="bg-ink p-8">
            <dt className="label-mono text-clay">Email</dt>
            <dd className="mt-4">
              <TextCta href={mailto("Engagement enquiry")}>{IDENTITY.email}</TextCta>
            </dd>
          </div>
          <div className="bg-ink p-8">
            <dt className="label-mono text-clay">LinkedIn</dt>
            <dd className="mt-4">
              <TextCta href={IDENTITY.linkedin}>Connect with Maaz</TextCta>
            </dd>
          </div>
          <div className="bg-ink p-8">
            <dt className="label-mono text-clay">Based in</dt>
            <dd className="mt-4 text-cream">{IDENTITY.base}</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}
