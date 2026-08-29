import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Contact";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
