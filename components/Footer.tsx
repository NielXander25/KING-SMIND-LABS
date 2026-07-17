import Link from "next/link";

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <div className="bg-ink border-t border-linedark px-6 pt-14 pb-8">
      <div className="max-w-content mx-auto">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          <div className="max-w-[320px]">
            <div className="font-mono text-white text-sm tracking-[0.08em] mb-3">KING&apos;SMIND LABS</div>
            <p className="font-body text-[#8D97A8] text-sm leading-relaxed">
              A full-service digital studio based in Kaduna, Nigeria, building brand, motion, web, and AI work for
              clients wherever they are.
            </p>
          </div>
          <div className="flex gap-14 flex-wrap">
            <div>
              <div className="font-mono text-[#8D97A8] text-xs mb-3.5 tracking-[0.08em]">MENU</div>
              {items.map((it) => (
                <div key={it.href} className="mb-2.5">
                  <Link href={it.href} className="font-body text-[#C7CDD8] text-sm">
                    {it.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <div className="font-mono text-[#8D97A8] text-xs mb-3.5 tracking-[0.08em]">CONTACT</div>
              <div className="font-body text-[#C7CDD8] text-sm mb-2.5">hello@kmlabs.studio</div>
              <div className="font-body text-[#C7CDD8] text-sm">Kaduna, Nigeria</div>
            </div>
          </div>
        </div>
        <div className="border-t border-linedark pt-6 font-body text-[#6B7688] text-[12.5px]">
          © {new Date().getFullYear()} King&apos;smind Labs. Built to be believed.
        </div>
      </div>
    </div>
  );
}
