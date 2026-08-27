import { Eyebrow, Reveal, Section, TextCta, mailto } from "./primitives";

const SIGNALS = [
  { n: "15K+", l: "Learner interactions" },
  { n: "01", l: "Operator, not spectator" },
  { n: "03", l: "Tech · Business · Education" },
  { n: "∞", l: "Systems shipped, not slides" },
];

const FACTS = [
  { k: "Role", v: "Founder & CEO, Aivalytics" },
  { k: "Focus", v: "AI platform architecture & applied execution" },
  { k: "Reach", v: "15,000+ learner interactions" },
  { k: "Base", v: "Bangalore · India" },
];

export function Founder() {
  return (
    <Section id="founder">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative overflow-hidden border border-hairline bg-ink-alt">
            <img
              src={portrait}
              alt="Maaz Patel, Founder and CEO of Aivalytics"
              width={728}
              height={1568}
              loading="lazy"
              className="h-full w-full object-cover object-[center_20%] grayscale-[35%]"
            />
            <p className="label-mono absolute bottom-0 left-0 bg-lime px-4 py-2 text-lime-foreground">
              Maaz Patel
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Eyebrow>01 / The founder</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)] text-cream">
            Built by an
            <br />
            <span className="text-lime">operator,</span>
            <br />
            not a spectator.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Maaz Patel is the Founder &amp; CEO of Aivalytics, an AI platform architect who builds
            the systems he talks about—agents, automation, and intelligent software shipped into
            real environments.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            He works at the intersection of technology, business, and education: designing AI
            platforms for teams, and translating that field experience for institutions, founders,
            and the people preparing to build next.
          </p>

          <dl className="mt-12 grid border-t border-l border-hairline sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.k} className="border-r border-b border-hairline p-6">
                <dt className="label-mono text-clay">{f.k}</dt>
                <dd className="mt-3 text-cream">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <TextCta href={mailto("Conversation with Maaz Patel")}>Start a conversation</TextCta>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
