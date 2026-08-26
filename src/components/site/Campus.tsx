import { Eyebrow, Reveal, Section, TextCta, mailto } from "./primitives";

const STEPS = [
  {
    n: "01",
    title: "Make it legible",
    body: "AI literacy for every audience, without the hype cycle.",
  },
  {
    n: "02",
    title: "Enable the multipliers",
    body: "Faculty development, leadership alignment, and confident internal champions.",
  },
  {
    n: "03",
    title: "Find the leverage",
    body: "Real use-case discovery across teaching, research, administration, and student life.",
  },
  {
    n: "04",
    title: "Build in public",
    body: "Agents, automations, hackathons, and projects that make adoption visible.",
  },
];

export function Campus() {
  return (
    <Section id="campus">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>04 / Institution building</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.75rem,6vw,4.5rem)] text-cream">
            Build an
            <br />
            <span className="text-lime">AI-ready</span>
            <br />
            campus.
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            AI readiness is a culture, not a checkbox. I help institutions move from scattered
            enthusiasm to a shared, repeatable way of working.
          </p>
          <div className="mt-10">
            <TextCta href={mailto("Campus program enquiry")}>Discuss a campus program</TextCta>
          </div>
        </Reveal>

        <div className="border-t border-hairline">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="grid grid-cols-[3rem_1fr] gap-6 border-b border-hairline py-8 transition-colors hover:bg-ink-alt/60 md:grid-cols-[6rem_1fr]">
                <p className="label-mono text-clay">{s.n}</p>
                <div>
                  <h3 className="font-display text-2xl text-cream">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SignatureTopic() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden bg-lime px-6 py-24 md:px-12 md:py-36"
    >
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 text-[28rem] leading-none text-lime-foreground/[0.06] select-none"
      >
        AI
      </span>
      <div className="relative mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="label-mono text-lime-foreground/70">02 / Signature topic</p>
          <div className="mt-6 w-20 border-t border-lime-foreground/30" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-[clamp(2.75rem,7vw,5.5rem)] text-lime-foreground">
            The rise of
            <br />
            Veritative
            <br />
            Companies.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-lime-foreground/80">
            Smaller expert teams. Amplified by AI agents, intelligent software, automation, rapid
            iteration, and leveraged digital infrastructure.
          </p>
          <p className="label-mono mt-10 border-y border-lime-foreground/25 py-4 text-lime-foreground">
            Small teams · Intelligent systems · Larger leverage
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-lime-foreground/80">
              A practical comparison between traditional enterprise scale and the lean,
              high-leverage operating models emerging now.
            </p>
            <p className="leading-relaxed text-lime-foreground/80">
              Not a prediction from the sidelines — a field guide for founders, institutions, and
              the people preparing to build next.
            </p>
          </div>
          <a
            href={mailto("Invite: The rise of Veritative Companies")}
            className="label-mono group mt-12 inline-flex items-center gap-4 bg-lime-foreground px-6 py-4 text-lime transition-opacity hover:opacity-85"
          >
            Invite this conversation
            <svg viewBox="0 0 32 12" className="h-3 w-8 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
              <path d="M0 6h29M24 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

