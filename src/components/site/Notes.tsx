import { NOTES } from "@/content/site";
import { Eyebrow, Reveal, RouteCta, Section } from "./primitives";

export function NotesGrid() {
  return (
    <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
      {NOTES.map((n) => (
        <article key={n.title} className="bg-ink p-8 transition-colors hover:bg-ink-alt">
          <p className="label-mono text-clay">{n.category}</p>
          <h3 className="display mt-5 text-2xl leading-snug text-cream">{n.title}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{n.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export function Notes() {
  return (
    <Section id="insights" alt>
      <Reveal>
        <Eyebrow>12 / Insights</Eyebrow>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
          Notes from inside the <span className="text-lime">build.</span>
        </h2>
      </Reveal>

      <Reveal delay={60} className="mt-12">
        <NotesGrid />
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <RouteCta to="/insights">Read the insights</RouteCta>
      </Reveal>
    </Section>
  );
}
