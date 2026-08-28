import { Link } from "@tanstack/react-router";
import { CASE_STUDIES, type CaseStudy } from "@/content/site";
import { Arrow, Eyebrow, Reveal, RouteCta, Section } from "./primitives";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      to={"/work" as never}
      hash={study.slug}
      className="group flex h-full flex-col border border-hairline bg-ink-alt p-8 transition-colors hover:border-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
    >
      <div className="flex items-center justify-between">
        <span className="label-mono text-clay">Case study {study.index}</span>
        <span className="label-mono text-muted-foreground">{study.category}</span>
      </div>
      <h3 className="display mt-8 text-2xl text-cream">{study.title}</h3>
      <p className="label-mono mt-3 text-muted-foreground">{study.organization}</p>
      <p className="mt-6 leading-relaxed text-muted-foreground">{study.problem}</p>
      <span className="label-mono mt-auto flex items-center gap-3 pt-8 text-lime">
        Read the case study
        <Arrow />
      </span>
    </Link>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" alt>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <Reveal>
          <Eyebrow>04 / Selected work</Eyebrow>
          <h2 className="display mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
            What has actually been built and delivered.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <RouteCta to="/work">All work</RouteCta>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.slice(0, 6).map((study, i) => (
          <Reveal key={study.slug} delay={(i % 3) * 70}>
            <CaseCard study={study} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
