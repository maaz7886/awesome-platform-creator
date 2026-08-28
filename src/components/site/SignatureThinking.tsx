import { PHASES, SHAPE } from "@/content/site";
import { Eyebrow, InquiryCta, Reveal, Section } from "./primitives";

export function ShapeFramework() {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="display text-lime">SHAPE</span>
        <span className="label-mono text-muted-foreground">Five constraints on AI leverage</span>
      </div>
      <div className="mt-8 grid border-l border-t border-hairline md:grid-cols-2 lg:grid-cols-5">
        {SHAPE.map((s) => (
          <div key={s.letter} className="border-b border-r border-hairline p-6">
            <p className="display text-5xl text-lime/70">{s.letter}</p>
            <h4 className="display mt-5 text-lg text-cream">{s.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhasesFramework() {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="display text-lime">Five execution layers</span>
        <span className="label-mono text-muted-foreground">Where agents enter the company</span>
      </div>
      <div className="mt-8 border-t border-hairline">
        {PHASES.map((p) => (
          <div
            key={p.n}
            className="grid gap-6 border-b border-hairline py-7 md:grid-cols-[4rem_1fr_1fr]"
          >
            <p className="label-mono text-clay">{p.n}</p>
            <div>
              <h4 className="display text-xl text-cream">{p.title}</h4>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
            <p className="label-mono self-center leading-relaxed text-lime/80">{p.agents}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SignatureThinking() {
  return (
    <>
      <section
        id="signature"
        className="relative overflow-hidden bg-lime px-6 py-24 md:px-12 md:py-32"
      >
        <span
          aria-hidden="true"
          className="display pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[28rem] leading-none text-lime-foreground/[0.06]"
        >
          AI
        </span>
        <div className="relative mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="label-mono text-lime-foreground/70">07 / Signature thinking</p>
            <div className="mt-6 w-20 border-t border-lime-foreground/30" />
            <p className="label-mono mt-8 leading-relaxed text-lime-foreground/80">
              Keynote · 3-hour masterclass · Leadership workshop
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-[clamp(2.5rem,7vw,5rem)] text-lime-foreground">
              The rise of
              <br />
              AI-native
              <br />
              companies.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-lime-foreground/80">
              How small teams and AI agents will build the next generation of businesses — from the
              industrial and internet revolutions to agents as digital workers, small-team leverage,
              human-in-the-loop systems and employability in an agentic economy.
            </p>
            <div className="mt-10">
              <InquiryCta
                type="masterclass"
                className="bg-lime-foreground px-6 py-4 text-lime hover:opacity-85"
              >
                Invite Maaz for this session
              </InquiryCta>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-20">
          <Reveal>
            <ShapeFramework />
          </Reveal>
          <Reveal>
            <PhasesFramework />
          </Reveal>
        </div>
      </Section>
    </>
  );
}

export function SectionEyebrow({ children }: { children: string }) {
  return <Eyebrow>{children}</Eyebrow>;
}
