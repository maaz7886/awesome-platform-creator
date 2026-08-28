import portraitAsset from "@/assets/maaz-portrait.jpg.asset.json";
import { PROOF_LINE } from "@/content/site";
import { InquiryCta, RouteCta } from "./primitives";

const portrait = portraitAsset.url;

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pt-28 md:pt-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={portrait}
          alt=""
          width={728}
          height={1568}
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-[72%_top] opacity-45 md:w-[58%] md:opacity-70 md:object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/80" />
      </div>

      <div className="mx-auto grid max-w-[1320px] items-stretch gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center py-16 lg:py-32">
          <p className="label-mono text-clay">Maaz Patel · Founder &amp; CEO, AIValytics</p>

          <h1 className="display mt-8 text-[clamp(2.75rem,9vw,6.5rem)]">
            <span className="block text-cream">Technical depth.</span>
            <span className="block text-lime">Real execution.</span>
          </h1>

          <p className="mt-9 max-w-xl border-l-2 border-lime pl-5 text-lg leading-relaxed text-muted-foreground">
            I build AI systems, programs and operating models that help institutions, founders and
            teams become AI-native. From agents and automation to capability-building and
            organizational transformation — the work turns AI from an idea into execution.
          </p>

          <p className="label-mono mt-10 border-y border-hairline py-4 text-cream">{PROOF_LINE}</p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <RouteCta to="/work" variant="solid">
              See the work
            </RouteCta>
            <InquiryCta type="other" variant="ghost">
              Work with Maaz
            </InquiryCta>
            <InquiryCta type="speaking">Invite Maaz to speak</InquiryCta>
          </div>
        </div>

        <div className="hidden lg:block lg:min-h-[680px]" />
      </div>
    </section>
  );
}
