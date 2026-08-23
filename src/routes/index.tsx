import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StartHere, Engage } from "@/components/site/Engage";
import { Audience } from "@/components/site/Audience";
import { Campus, SignatureTopic } from "@/components/site/Campus";
import { Room, WhyThisWork } from "@/components/site/Room";
import { Contact, Footer } from "@/components/site/Contact";

const TITLE = "Maaz Patel — AI Platform Architect & Keynote Speaker";
const DESCRIPTION =
  "Keynotes, student bootcamps, faculty enablement, and AI-ready campus programs. Maaz Patel turns AI capability into working systems and measurable progress.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink text-foreground">
      <Header />
      <main>
        <Hero />
        <StartHere />
        <Engage />
        <Audience />
        <Campus />
        <SignatureTopic />
        <Room />
        <WhyThisWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
