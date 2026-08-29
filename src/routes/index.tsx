import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { Thesis } from "@/components/site/Thesis";
import { SelectedWork } from "@/components/site/SelectedWork";
import { WhatIDo } from "@/components/site/WhatIDo";
import { Founder, Aivalytics } from "@/components/site/Founder";
import { SignatureThinking } from "@/components/site/SignatureThinking";
import { Built } from "@/components/site/Built";
import { InTheRoom } from "@/components/site/InTheRoom";
import { Institutional } from "@/components/site/Institutional";
import { Testimonials } from "@/components/site/Testimonials";
import { Notes } from "@/components/site/Notes";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Contact";

const TITLE = "Maaz Patel — AI Platform Architect, Speaker & Founder of AIValytics";
const DESCRIPTION =
  "Maaz Patel builds AI systems, programs and operating models that make institutions, founders and teams AI-native. 25,000+ students engaged, 20+ startups, programs across India.";

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
        <Proof />
        <Thesis />
        <SelectedWork />
        <WhatIDo />
        <Founder />
        <SignatureThinking />
        <Aivalytics />
        <Built />
        <InTheRoom />
        <Institutional />
        <Testimonials />
        <Notes />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
