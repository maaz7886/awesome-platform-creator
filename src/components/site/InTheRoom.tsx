import { Eyebrow, InquiryCta, Reveal, Section } from "./primitives";

const MOMENTS = [
  { t: "Campus keynotes", b: "Auditorium sessions with engineering and MBA cohorts.", tag: "Sessions" },
  { t: "Founder workshops", b: "Operating-model teardowns with early-stage teams.", tag: "Workshops" },
  { t: "Faculty programs", b: "Hands-on enablement with teaching and research workflows.", tag: "Institutions" },
  { t: "Live builds", b: "Agents and automations built in the room, in front of the audience.", tag: "Builds" },
  { t: "Pitch & critique", b: "Student and founder pitches, reviewed on the spot.", tag: "Programs" },
  { t: "Open Q&A", b: "Unscripted questions from students, faculty and leadership.", tag: "Discussion" },
];

export function InTheRoom() {
  return (
    <Section id="in-the-room">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>09 / In the room</Eyebrow>
          <h2 className="display mt-8 text-[clamp(2.25rem,6vw,4rem)] text-cream">
            The work is designed to change how people build.
          </h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Not another presentation. Sessions are built around participation, live demonstration
            and something that runs by the end.
          </p>
          <div className="mt-10">
            <InquiryCta type="speaking">Invite Maaz to speak</InquiryCta>
          </div>
        </Reveal>

        <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {MOMENTS.map((m, i) => (
            <Reveal key={m.t} delay={(i % 3) * 60}>
              <div className="flex h-full flex-col bg-ink p-6">
                <span className="label-mono text-clay">{m.tag}</span>
                <h3 className="display mt-6 text-lg text-cream">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal>
        <p className="label-mono mt-12 border-t border-hairline pt-6 text-muted-foreground">
          Session photography and clips are added here as each engagement is documented.
        </p>
      </Reveal>
    </Section>
  );
}
