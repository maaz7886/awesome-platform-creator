import { useEffect, useState } from "react";
import { mailto } from "./primitives";

const NAV = [
  { label: "Ways to engage", href: "#engage" },
  { label: "Who it is for", href: "#audience" },
  { label: "Campus programs", href: "#campus" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-hairline bg-ink/90 py-3 backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 md:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Maaz Patel home">
          <span className="display bg-lime px-2 py-1 text-lg text-lime-foreground">MP</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono text-muted-foreground transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={mailto("Starting a conversation")}
            className="label-mono hidden border border-lime px-5 py-3 text-lime transition-colors hover:bg-lime hover:text-lime-foreground sm:inline-block"
          >
            Start a conversation
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="label-mono border border-hairline px-4 py-3 text-cream lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-ink px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label-mono text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
