import { useEffect, useRef, useState, type ReactNode } from "react";

export const MAIL = "maazaivalytics@gmail.com";

export function mailto(subject: string) {
  return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`label-mono text-clay ${className}`}>{children}</p>;
}

export function Section({
  id,
  children,
  alt = false,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-ink-alt" : "bg-ink"} px-6 py-24 md:px-12 md:py-36 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 12"
      className={`h-3 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 6h29M24 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function SolidCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`label-mono group inline-flex items-center gap-4 bg-lime px-6 py-4 text-lime-foreground transition-colors hover:bg-cream ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}

export function TextCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`label-mono group inline-flex items-center gap-3 text-lime transition-colors hover:text-cream ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
