import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`font-mono text-[12.5px] tracking-[0.12em] mb-4 flex items-center gap-2.5 ${dark ? "text-gold" : "text-slate"}`}>
      <span className={`w-6 h-px inline-block ${dark ? "bg-gold" : "bg-slate"}`} />
      {children}
    </div>
  );
}

export function Button({
  children,
  primary,
  dark,
  href,
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  dark?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  const classes = `font-body text-[14.5px] font-semibold px-6 py-3 inline-flex items-center gap-2 cursor-pointer border ${
    primary
      ? "bg-gold text-ink border-transparent"
      : dark
      ? "bg-transparent text-white border-linedark"
      : "bg-transparent text-charcoal border-line"
  }`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function CTABand() {
  return (
    <div className="bg-ink px-6 py-[72px] border-t border-linedark">
      <div className="max-w-content mx-auto flex flex-wrap justify-between items-center gap-6">
        <h3 className="font-display text-[28px] text-white font-medium max-w-[480px]">
          Have something worth building?
        </h3>
        <Button primary href="/contact">
          Start a project <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
