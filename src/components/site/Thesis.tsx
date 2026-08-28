import { AI_NATIVE_STACK, TRADITIONAL_STACK } from "@/content/site";
import { Eyebrow, Reveal, RouteCta, Section } from "./primitives";

function Stack({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`border p-8 ${accent ? "border-lime bg-lime/[0.04]" : "border-hairline bg-ink-alt"}`}
    >
      <p className={`label-mono ${accent ? "text-lime" : "text-clay"}`}>{label}</p>
      <ol className="mt-8 space-y-1">
        {items.map((item, i) => (
          <li key={item}>
            <div
              className={`border px-5 py-4 font-display text-lg ${
                accent ? "border-lime/30 text-cream" : "border-hairline text-muted-foreground"
              }`}
            >
              {item}
            </div>
            {i < items.length - 1 && (
              <div
                aria-hidden="true"
                className={`mx-auto h-5 w-px ${accent ? "bg-lime/50" : "bg-hairline"}`}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Thesis() {
  return (
    <Section id="thesis">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Eyebrow>03 / The AI-native economy</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.5rem,6.5vw,4.5rem)] text-cream">
            The company is being{" "}
            <span className="text-lime">rewritten.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            AI is not a productivity add-on for a conventional company. It changes organizational
            structure, headcount, execution speed, management, product development, customer
            acquisition, research, decision-making and operations.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            The next generation of companies will not simply have employees using AI. Their
            operating systems will be designed around humans, AI agents, automation and software
            from day one — small expert teams with disproportionate output, human judgment at the
            decision points, and agents doing the repeatable work in between.
          </p>
          <div className="mt-10">
            <RouteCta to="/ai-native-companies">Read the full thesis</RouteCta>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal>
          <Stack label="Traditional company" items={TRADITIONAL_STACK} />
        </Reveal>
        <Reveal delay={80}>
          <Stack label="AI-native company" items={AI_NATIVE_STACK} accent />
        </Reveal>
      </div>
    </Section>
  );
}
