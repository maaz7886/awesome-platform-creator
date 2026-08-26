import { Eyebrow, Reveal, Section } from "./primitives";

const GROUPS = [
  {
    n: "01",
    title: "For institutions",
    body: "Build AI-ready students, AI-enabled faculty, and an adoption roadmap that can scale across campus.",
  },
  {
    n: "02",
    title: "For students",
    body: "Understand what is changing, build practical AI outputs, and prepare for new roles and ways of working.",
  },
  {
    n: "03",
    title: "For faculty",
    body: "Apply AI to teaching, research, assessment, content, mentoring, and everyday academic workflows.",
  },
  {
    n: "04",
    title: "For teams & founders",
    body: "Find leverage in agents, automation, product execution, and the operating model of a Veritative Company.",
  },
];

export function Audience() {
  return (
    <Section id="audience">
      <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Eyebrow>03 / Who it is for</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.25rem,4.5vw,3.5rem)] text-cream">
            The right conversation
            <br />
            <span className="text-lime">for your room.</span>
          </h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Whether you are planning one high-energy session or a longer adoption journey, the
            starting point is simple: tell Maaz who is in the room and what should change
            afterward.
          </p>
        </Reveal>

        <div className="grid border-t border-l border-hairline sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <Reveal key={g.n} delay={i * 70}>
              <div className="h-full border-r border-b border-hairline p-8 transition-colors hover:bg-ink-alt md:p-10">
                <p className="label-mono text-clay">{g.n}</p>
                <h3 className="mt-6 font-display text-2xl text-cream">{g.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
