import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV } from "@/content/site";

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
          : "border-transparent bg-ink/40 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 md:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Maaz Patel — home">
          <span className="display bg-lime px-2 py-1 text-lg text-lime-foreground">MP</span>
          <span className="label-mono hidden text-cream sm:inline">Maaz Patel</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-mono text-muted-foreground transition-colors hover:text-cream"
              activeProps={{ className: "label-mono text-lime" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            search={{ type: "other" }}
            className="label-mono hidden border border-lime px-5 py-3 text-lime transition-colors hover:bg-lime hover:text-lime-foreground sm:inline-block"
          >
            Work with Maaz
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="label-mono border border-hairline px-4 py-3 text-cream xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-hairline bg-ink px-6 py-6 xl:hidden">
          <ul className="flex flex-col gap-5">
            {[...NAV, { label: "Media Kit", to: "/media-kit" }, { label: "Contact", to: "/contact" }].map(
              (item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="label-mono text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
