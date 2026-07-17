"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="bg-ink border-b border-linedark">
      <div className="max-w-content mx-auto px-6 py-[18px] flex items-center justify-between">
        <Link href="/" className="font-mono flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-gold inline-block" />
          <span className="text-white text-sm tracking-[0.08em]">KING&apos;SMIND LABS</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`font-body text-sm pb-1 border-b ${
                  active ? "text-gold border-gold" : "text-[#C7CDD8] border-transparent"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
          <Link href="/contact" className="font-body bg-gold text-ink px-[18px] py-2.5 text-[13.5px] font-semibold">
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
