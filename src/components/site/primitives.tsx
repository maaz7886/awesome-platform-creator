import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const MAIL = "maazaivalytics@gmail.com";

export function mailto(subject: string) {
  return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Contextual inquiry path — preselects the inquiry type on the contact form. */
export function inquiry(type: string) {
  return { to: "/contact", search: { type } } as const;
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
        if (entry?.isIntersecting) {
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
      className={`${alt ? "bg-ink-alt" : "bg-ink"} px-6 py-24 md:px-12 md:py-32 ${className}`}
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

const solid =
  "label-mono group inline-flex items-center gap-4 bg-lime px-6 py-4 text-lime-foreground transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";
const ghost =
  "label-mono group inline-flex items-center gap-4 border border-hairline px-6 py-4 text-cream transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";
const text =
  "label-mono group inline-flex items-center gap-3 text-lime transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

const styles = { solid, ghost, text } as const;

type CtaProps = {
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
};

/** Internal CTA that routes to the contact form with a preselected inquiry type. */
export function InquiryCta({
  type,
  children,
  variant = "text",
  className = "",
}: CtaProps & { type: string }) {
  return (
    <Link to="/contact" search={{ type }} className={`${styles[variant]} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function RouteCta({
  to,
  children,
  variant = "text",
  className = "",
}: CtaProps & { to: string }) {
  return (
    <Link to={to as never} className={`${styles[variant]} ${className}`}>
      {children}
      <Arrow />
    </Link>
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
    <a href={href} className={`${solid} ${className}`}>
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
    <a href={href} className={`${text} ${className}`}>
      {children}
      <Arrow />
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-hairline bg-ink px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-[1200px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] text-cream">{title}</h1>
        {lede ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
        ) : null}
        {children ? <div className="mt-10 flex flex-wrap items-center gap-6">{children}</div> : null}
      </div>
    </section>
  );
}
