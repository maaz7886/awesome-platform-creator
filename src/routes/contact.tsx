import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { IDENTITY, INQUIRY_OPTIONS } from "@/content/site";
import { PageShell, meta } from "@/components/site/PageShell";
import { PageHero, Reveal, Section, Eyebrow, TextCta, mailto } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    type: typeof search.type === "string" ? search.type : "other",
  }),
  head: () =>
    meta(
      "Contact — Maaz Patel",
      "Start a conversation about a keynote, an institutional program, a founder workshop or an AI system build.",
    ),
  component: ContactPage,
});

const field =
  "mt-3 w-full border border-hairline bg-ink px-4 py-3 text-cream outline-none transition-colors placeholder:text-muted-foreground focus:border-lime";

function ContactPage() {
  const { type } = Route.useSearch();
  const [inquiryType, setInquiryType] = useState(type);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [details, setDetails] = useState("");

  const label = INQUIRY_OPTIONS.find((o) => o.value === inquiryType)?.label ?? "Enquiry";
  const body = `Name: ${name}\nOrganization: ${org}\nInquiry type: ${label}\n\n${details}`;
  const href = `${mailto(`${label} — enquiry`)}&body=${encodeURIComponent(body)}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell me what you're <span className="text-lime">planning.</span>
          </>
        }
        lede="Share the audience, the outcome and the timing. You'll get a concrete shape for the engagement back — format, duration and what participants leave with."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              className="border border-hairline bg-ink-alt p-8 md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = href;
              }}
            >
              <label className="block">
                <span className="label-mono text-clay">Inquiry type</span>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className={field}
                >
                  {INQUIRY_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-ink">
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-8 block">
                <span className="label-mono text-clay">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={field}
                  placeholder="Full name"
                  required
                />
              </label>

              <label className="mt-8 block">
                <span className="label-mono text-clay">Organization</span>
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className={field}
                  placeholder="Institution, company or cohort"
                />
              </label>

              <label className="mt-8 block">
                <span className="label-mono text-clay">Details</span>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={6}
                  className={field}
                  placeholder="Audience, outcome, dates, location"
                  required
                />
              </label>

              <button
                type="submit"
                className="label-mono mt-10 inline-flex items-center gap-4 bg-lime px-6 py-4 text-lime-foreground transition-colors hover:bg-cream"
              >
                Send enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>Direct</Eyebrow>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="label-mono text-clay">Email</p>
                <TextCta href={mailto("Engagement enquiry")}>{IDENTITY.email}</TextCta>
              </li>
              <li>
                <p className="label-mono text-clay">LinkedIn</p>
                <TextCta href={IDENTITY.linkedin}>Connect with Maaz</TextCta>
              </li>
              <li>
                <p className="label-mono text-clay">Company</p>
                <TextCta href={IDENTITY.company}>AIValytics</TextCta>
              </li>
              <li>
                <p className="label-mono text-clay">Based in</p>
                <p className="mt-2 text-cream">{IDENTITY.base}</p>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
