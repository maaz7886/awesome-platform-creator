import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Founder } from "@/components/site/Founder";
import { StartHere, Engage } from "@/components/site/Engage";
import { Audience } from "@/components/site/Audience";
import { Campus, SignatureTopic } from "@/components/site/Campus";
import { Room, WhyThisWork } from "@/components/site/Room";
import { Contact, Footer } from "@/components/site/Contact";

const TITLE = "Maaz Patel — Founder of Aivalytics & The Rise of Veritative Companies";
const DESCRIPTION =
  "Maaz Patel, Founder & CEO of Aivalytics, on the rise of Veritative Companies: small expert teams amplified by AI agents, automation, and intelligent systems.";


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
        <Founder />
        <SignatureTopic />
        <StartHere />
        <Engage />
        <Audience />
        <Campus />
        <Room />
        <WhyThisWork />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
