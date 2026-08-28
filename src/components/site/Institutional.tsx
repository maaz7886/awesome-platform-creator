import { PROGRAMS } from "@/content/site";
import { Eyebrow, InquiryCta, Reveal, Section } from "./primitives";

const AUDIENCES = [
  { t: "Educational institutions", b: "Universities, colleges and schools." },
  { t: "Innovation ecosystems", b: "Incubators, E-cells, startup programs and innovation centres." },
  { t: "Founders & startups", b: "Early-stage founders and building teams." },
  { t: "Companies", b: "Business teams, leadership and project teams." },
  { t: "Students & professionals", b: "People preparing for an AI-native economy." },
];

export function AudienceMatrix() {
  return (
    <div className="grid border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
      {AUDIENCES.map((a) => (
        <div key={a.t} className="border-b border-r border-hairline p-7">
          <h3 className="display text-xl text-cream">{a.t}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{a.b}</p>
        </div>
      ))}
      <div className="hidden border-b border-r border-hairline lg:block" />
    </div>
  );
}

export function ProgramCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PROGRAMS.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 70}>
          <article className="flex h-full flex-col border border-hairline bg-ink-alt p-8">
            <h3 className="display text-2xl text-cream">{p.title}</h3>
            <dl className="mt-6 grid gap-3">
              {[
                ["Audience", p.audience],
                ["Duration", p.duration],
                ["Format", p.format],
                ["Outcome", p.outcome],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                  <dt className="label-mono text-clay">{k}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.deliverables.map((d) => (
                <li key={d} className="label-mono border border-hairline px-3 py-2 text-muted-foreground">
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <InquiryCta type={p.inquiry}>Plan this program</InquiryCta>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Institutional() {
  return (
    <Section id="institutional" alt>
      <Reveal>
        <Eyebrow>10 / Institutional & organizational work</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
          Productized engagements, not “custom workshop available”.
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-14">
          <p className="label-mono text-clay">Who Maaz works with</p>
          <div className="mt-6">
            <AudienceMatrix />
          </div>
        </div>
      </Reveal>

      <div className="mt-14">
        <ProgramCards />
      </div>
    </Section>
  );
}
