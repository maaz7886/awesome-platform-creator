import { Eyebrow, Reveal, Section } from "./primitives";

const STEPS = ["Understand", "Compare", "Demonstrate", "Build", "Apply"];

const PILLARS = [
  {
    title: "Technology",
    body: "Platform architecture, agents, automation, and the mechanics beneath the demo.",
  },
  {
    title: "Business",
    body: "Use cases tied to outcomes, operating models, and the leverage a team can actually sustain.",
  },
  {
    title: "Education",
    body: "Learning design, faculty enablement, and workforce readiness that travels beyond the room.",
  },
];

export function Room() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Eyebrow>06 / In the room</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4rem)] text-cream">
            Every
            <br />
            session
            <br />
            <span className="text-lime">moves.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ol className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="flex items-baseline gap-2">
                  <span className="label-mono text-clay">{`0${i + 1}`}</span>
                  <span className="font-display text-2xl text-cream md:text-3xl">{step}</span>
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-lime">
                    ›
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 border-t border-hairline pt-10 md:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground">
              The room leaves with a clearer mental model, a demonstration grounded in real work,
              and something built together.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              For schools, universities, MBA cohorts, engineering teams, faculty groups,
              leadership circles, and professionals who want to stay useful.
            </p>
          </div>

          <blockquote className="mt-14 border-l-2 border-lime pl-6 font-display text-2xl leading-snug text-cream md:text-3xl">
            “The goal is not to impress people with tools. It is to make them dangerous in the
            right direction.”
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}

export function WhyThisWork() {
  return (
    <Section alt>
      <div className="grid gap-14 lg:grid-cols-[1fr_2.5fr]">
        <Reveal>
          <Eyebrow>07 / Why this work</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-[clamp(2rem,4.5vw,3.75rem)] text-cream">
            Technology fluency is only useful when it changes a{" "}
            <span className="text-lime">decision.</span>
          </h2>
          <div className="mt-14 grid border-t border-hairline md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`py-8 md:px-8 ${i > 0 ? "md:border-l md:border-hairline" : ""} border-b border-hairline md:border-b-0`}
              >
                <h3 className="font-display text-xl text-cream">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
