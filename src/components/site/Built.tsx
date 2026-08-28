import { BUILDS, STACK } from "@/content/site";
import { Eyebrow, InquiryCta, Reveal, Section } from "./primitives";

export function BuildsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {BUILDS.map((b, i) => (
        <Reveal key={b.name} delay={(i % 2) * 70}>
          <article className="h-full border border-hairline bg-ink-alt p-8">
            <h3 className="display text-2xl text-cream">{b.name}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{b.what}</p>
            <dl className="mt-7 grid gap-4 border-t border-hairline pt-6">
              {[
                ["Problem", b.problem],
                ["System", b.tech],
                ["Built for", b.who],
                ["Result", b.result],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="label-mono text-clay">{k}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Built() {
  return (
    <Section id="built" alt>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <Reveal>
          <Eyebrow>08 / Built by Maaz</Eyebrow>
          <h2 className="display mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
            Systems shipped, <span className="text-lime">not slides.</span>
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <InquiryCta type="ai-system">Discuss an AI system</InquiryCta>
        </Reveal>
      </div>

      <div className="mt-14">
        <BuildsGrid />
      </div>

      <Reveal>
        <div className="mt-14 border-t border-hairline pt-8">
          <p className="label-mono text-clay">Tooling used where it earns its place</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {STACK.map((t) => (
              <li key={t} className="label-mono text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
