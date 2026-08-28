import { TESTIMONIALS } from "@/content/site";
import { Eyebrow, Reveal, Section } from "./primitives";

const TIER_LABEL: Record<number, string> = {
  1: "Institutional leadership & founders",
  2: "Faculty & professionals",
  3: "Students",
};

export function Testimonials() {
  const tiers = [1, 2, 3].filter((t) => TESTIMONIALS.some((x) => x.tier === t));

  return (
    <Section id="testimonials">
      <Reveal>
        <Eyebrow>11 / Validation</Eyebrow>
        <h2 className="display mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4rem)] text-cream">
          What the people who booked the work say.
        </h2>
      </Reveal>

      {tiers.length === 0 ? (
        <Reveal delay={60}>
          <p className="mt-10 max-w-2xl border-l-2 border-lime pl-5 leading-relaxed text-muted-foreground">
            Verified testimonials from directors, HODs, TPOs and founders are published here as each
            engagement is documented. Nothing is displayed until it can be attributed to a named
            person and organization.
          </p>
        </Reveal>
      ) : (
        tiers.map((tier) => (
          <div key={tier} className="mt-12">
            <p className="label-mono text-clay">{TIER_LABEL[tier]}</p>
            <div
              className={`mt-6 grid gap-6 ${tier === 1 ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {TESTIMONIALS.filter((t) => t.tier === tier).map((t) => (
                <figure
                  key={t.name + t.quote}
                  className="border border-hairline bg-ink-alt p-8"
                >
                  <blockquote
                    className={`leading-relaxed text-cream ${tier === 1 ? "display text-xl leading-snug" : ""}`}
                  >
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="label-mono mt-6 text-muted-foreground">
                    {t.name} · {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))
      )}
    </Section>
  );
}
