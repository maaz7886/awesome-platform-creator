import { INSTITUTIONS, STATS } from "@/content/site";
import { Eyebrow, Reveal, Section } from "./primitives";

export function Proof() {
  return (
    <Section id="proof" alt>
      <Reveal>
        <Eyebrow>02 / Selected impact</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.25rem,6vw,4rem)] text-cream">
          Proof, not positioning.
        </h2>
      </Reveal>

      <dl className="mt-14 grid border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 60} className="border-b border-r border-hairline">
            <div className="p-8">
              <dt className="display text-[clamp(2rem,4vw,3rem)] text-lime">{s.value}</dt>
              <dd className="label-mono mt-4 leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          </Reveal>
        ))}
        <div className="hidden border-b border-r border-hairline lg:block" />
      </dl>

      <Reveal delay={80}>
        <p className="label-mono mt-16 text-clay">Institutions & ecosystems engaged</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {INSTITUTIONS.map((name) => (
            <li
              key={name}
              className="label-mono border border-hairline px-4 py-3 text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
