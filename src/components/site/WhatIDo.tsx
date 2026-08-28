import { PATHWAYS } from "@/content/site";
import { Eyebrow, InquiryCta, Reveal, Section } from "./primitives";

export function WhatIDo() {
  return (
    <Section id="what-i-do">
      <Reveal>
        <Eyebrow>05 / What I do</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
          Five ways the work enters an organization.
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-hairline">
        {PATHWAYS.map((p, i) => (
          <Reveal key={p.n} delay={i * 50}>
            <div className="grid gap-8 border-b border-hairline py-10 transition-colors hover:bg-ink-alt/60 lg:grid-cols-[5rem_1.1fr_1fr]">
              <p className="label-mono text-clay">{p.n}</p>
              <div>
                <h3 className="display text-2xl text-cream">{p.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-6">
                  <InquiryCta type={p.inquiry}>{p.cta}</InquiryCta>
                </div>
              </div>
              <ul className="grid gap-2 self-start sm:grid-cols-2">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="label-mono border border-hairline px-4 py-3 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
