import portraitAsset from "@/assets/maaz-portrait.jpg.asset.json";
import { mailto, SolidCta } from "./primitives";

const portrait = portraitAsset.url;


const TICKER = [
  "15,000+ learner interactions",
  "Schools to MBA & engineering",
  "Cross-disciplinary by design",
  "AI knowledge partner",
];

export function Hero() {
  return (
    <>
      <section id="top" className="relative isolate overflow-hidden bg-ink pt-28 md:pt-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <img
            src={portrait}
            alt=""
            width={728}
            height={1568}
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-[75%_center] opacity-60 md:w-[62%] md:object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        </div>

        <div className="mx-auto grid max-w-[1400px] items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
          <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:py-28">

            <p className="label-mono flex items-center gap-3 text-muted-foreground">
              <span className="inline-block size-1.5 rounded-full bg-lime" />
              Bangalore · India
            </p>

            <p className="label-mono mt-14 text-clay">
              Maaz Patel · Founder &amp; CEO, Aivalytics · AI Platform Architect
            </p>

            <h1 className="display mt-8 text-[clamp(3rem,9vw,6.5rem)]">
              <span className="block text-cream">Technical</span>
              <span className="block text-lime">depth.</span>
              <span className="text-outline block">Real execution.</span>
            </h1>

            <p className="mt-10 max-w-xl border-l-2 border-lime pl-5 text-lg leading-relaxed text-muted-foreground">
              I turn AI capability into working systems, stronger teams, and measurable
              progress—for institutions, founders, and the people building what comes next.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <SolidCta href="#engage">Choose an engagement</SolidCta>
              <a
                href="https://www.linkedin.com/in/maazpatel"
                target="_blank"
                rel="noreferrer"
                className="label-mono text-muted-foreground transition-colors hover:text-cream"
              >
                LinkedIn
              </a>
            </div>

            <a
              href="#start"
              className="label-mono mt-16 inline-flex flex-col items-center gap-2 self-center text-muted-foreground transition-colors hover:text-lime"
            >
              Scroll to read
              <span aria-hidden="true" className="text-lime">
                ↓
              </span>
            </a>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[720px]">
            <img
              src={portrait}
              alt="Maaz Patel, founder and CEO of Aivalytics, in a black suit"
              width={1024}
              height={1536}
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-lime py-3.5">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {TICKER.map((item) => (
                <span
                  key={item}
                  className="label-mono flex items-center gap-10 whitespace-nowrap px-10 font-semibold text-lime-foreground"
                >
                  {item}
                  <span aria-hidden="true" className="opacity-50">
                    ●
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <a href={mailto("Starting a conversation")} className="sr-only">
        Email Maaz Patel
      </a>
    </>
  );
}
