import { Eyebrow, Reveal, Section, TextCta, mailto } from "./primitives";

const OPTIONS = [
  {
    n: "01",
    title: "Invite a keynote or masterclass",
    body: "Give your audience a clear, practical view of AI, agents, the future of work, and AI-native companies.",
    fit: "Best for conferences, leadership groups, and large audiences.",
  },
  {
    n: "02",
    title: "Run a student bootcamp",
    body: "Move from concepts to capability through live tools, AI-assisted building, agents, automation, and rapid prototypes.",
    fit: "Best for schools, colleges, MBA and engineering cohorts.",
  },
  {
    n: "03",
    title: "Enable your faculty",
    body: "Help faculty use AI for teaching, research, assessment, mentoring, content, and department workflows.",
    fit: "Best for FDPs, faculty groups, and academic leaders.",
  },
  {
    n: "04",
    title: "Build an AI-ready campus",
    body: "Create a practical adoption roadmap spanning literacy, use-case discovery, champions, projects, and long-term programs.",
    fit: "Best for institutions planning AI adoption beyond one event.",
  },
];

const FIELD_GUIDE = [
  "Generative AI & LLMs",
  "AI agents & multi-agent systems",
  "Workflow automation",
  "AI for engineering, management & research",
  "AI-native project management",
  "Productivity, analysis & decisions",
  "AI entrepreneurship & rapid prototyping",
  "Future of work & careers",
  "Websites, apps & workflows with AI",
];

export function StartHere() {
  return (
    <Section id="start">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Eyebrow>Start here</Eyebrow>
          <div className="mt-6 w-20 border-t border-hairline" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-[clamp(2.5rem,6vw,4.5rem)]">
            <span className="block text-cream">Looking for an</span>
            <span className="block text-lime">AI partner?</span>
          </h2>
          <div className="mt-12 grid gap-10 border-t border-hairline pt-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choose a format below. Each engagement is designed to leave people with a clearer
              mental model, practical outputs, and a next step they can actually use.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Maaz brings together AI, education, business transformation, workforce readiness,
              and entrepreneurship—so the conversation connects to real work.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Engage() {
  return (
    <Section id="engage" alt>
      <Reveal>
        <Eyebrow>02 / What I do</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)] text-cream">
          Make the abstract
          <br />
          <span className="text-lime">practical.</span>
        </h2>
        <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
          Select the outcome you want. Then start a conversation about audience, format, and
          timing.
        </p>
      </Reveal>

      <div className="mt-16 grid border-t border-l border-hairline md:grid-cols-2">
        {OPTIONS.map((opt, i) => (
          <Reveal key={opt.n} delay={i * 70}>
            <article className="flex h-full flex-col border-r border-b border-hairline p-8 transition-colors hover:bg-ink/40 md:p-10">
              <p className="label-mono text-clay">{opt.n}</p>
              <h3 className="mt-6 font-display text-2xl text-cream">{opt.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{opt.body}</p>
              <p className="label-mono mt-8 text-lime">Good fit</p>
              <p className="mt-2 text-sm text-muted-foreground">{opt.fit}</p>
              <div className="mt-auto pt-8">
                <TextCta href={mailto(opt.title)}>Discuss this option</TextCta>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <Eyebrow>The field guide</Eyebrow>
        <ul className="mt-8 flex flex-wrap gap-3">
          {FIELD_GUIDE.map((topic) => (
            <li
              key={topic}
              className="label-mono border border-hairline px-4 py-3 text-muted-foreground transition-colors hover:border-lime hover:text-lime"
            >
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
