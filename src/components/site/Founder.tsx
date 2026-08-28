import { IDENTITY, PRINCIPLES } from "@/content/site";
import { Eyebrow, Reveal, RouteCta, Section, TextCta } from "./primitives";

const SIGNALS = [
  { n: "25K+", l: "Students engaged" },
  { n: "20+", l: "Startups worked with" },
  { n: "03", l: "Tech · Business · Education" },
  { n: "01", l: "Operator, not spectator" },
];

export function Founder() {
  return (
    <Section id="founder" alt>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden border border-hairline bg-ink p-8">
            <span
              aria-hidden="true"
              className="display pointer-events-none absolute -right-6 -top-16 select-none text-[14rem] leading-none text-cream/[0.04]"
            >
              MP
            </span>
            <div className="relative">
              <p className="label-mono text-clay">Signal</p>
              <div className="mt-8 grid grid-cols-2 border-l border-t border-hairline">
                {SIGNALS.map((s) => (
                  <div key={s.l} className="border-b border-r border-hairline p-5">
                    <p className="display text-3xl text-lime">{s.n}</p>
                    <p className="label-mono mt-3 leading-relaxed text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="display relative mt-10 text-2xl leading-tight text-cream">
              “Build the system first.
              <br />
              Then talk about it.”
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Eyebrow>06 / The founder</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.25rem,6vw,4rem)] text-cream">
            From training rooms to <span className="text-lime">operating models.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Maaz began with direct exposure to students and employability challenges through
            aptitude, soft-skills and development programs. That surfaced a larger problem:
            education and organizations were preparing people for an economy AI was already
            rewriting.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            The work expanded from training into entrepreneurship, technology, AI, automation, AI
            platforms, institutional transformation and startup execution. After 25,000+ student
            interactions and work across institutions, founders, project managers and developers,
            one question became central: how do we redesign people, institutions and organizations
            for an AI-native economy?
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            That question became AIValytics. Today the work spans AI, business, education,
            entrepreneurship and execution — including 20+ startups and programs delivered across
            India, with engagements connected to major educational ecosystems. Based in{" "}
            {IDENTITY.base}, working across cities and institutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <RouteCta to="/about">Read the full story</RouteCta>
            <TextCta href={IDENTITY.company}>Explore AIValytics</TextCta>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-20 border-t border-hairline pt-12">
          <p className="label-mono text-clay">What I believe</p>
          <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex gap-4 leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="text-lime">
                  —
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export function Aivalytics() {
  return (
    <Section id="aivalytics">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>The company</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.25rem,5.5vw,3.5rem)] text-cream">
            Building <span className="text-lime">AIValytics.</span>
          </h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            AIValytics is Maaz Patel's execution platform for building AI-ready people, founders and
            institutions — sitting between AI education, AI systems, agents, automation,
            institutional transformation, startup execution and workforce readiness.
          </p>
          <div className="mt-10">
            <TextCta href="https://aivalytics.com">Explore AIValytics</TextCta>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "AI Generalist",
              b: "Practical AI skills across tools, automation, agents and real-world projects.",
            },
            {
              t: "AI Fellowship",
              b: "A founder execution system — Build. Lead. Scale. Six tracks from AI foundations to capstone.",
            },
            {
              t: "AI-Driven Campus",
              b: "Institution-level transformation: curriculum, student upskilling, faculty enablement, AI systems.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="h-full border border-hairline bg-ink-alt p-7">
                <h3 className="display text-xl text-lime">{c.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
