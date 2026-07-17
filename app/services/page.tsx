import { Eyebrow, CTABand } from "@/components/Bits";
import { services } from "@/lib/data";

export const metadata = { title: "Services — King'smind Labs" };

export default function ServicesPage() {
  return (
    <>
      <div className="bg-ink px-6 pt-[72px] pb-14">
        <div className="max-w-content mx-auto">
          <Eyebrow dark>SERVICES</Eyebrow>
          <h1 className="font-display text-[32px] md:text-[48px] text-white font-medium max-w-[700px]">
            Everything a business needs to look and work like it means it.
          </h1>
        </div>
      </div>
      <div className="bg-paper px-6 pt-[72px] pb-24">
        <div className="max-w-content mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-px bg-line">
          {services.map((s) => (
            <div key={s.n} className="bg-paper px-8 py-9">
              <div className="font-mono text-[13px] text-gold mb-4">{s.n}</div>
              <s.icon size={26} className="text-slate mb-4" />
              <div className="font-body text-[19px] font-semibold text-ink mb-2.5">{s.name}</div>
              <div className="font-body text-[14.5px] text-charcoalsoft leading-relaxed">{s.blurb}</div>
            </div>
          ))}
        </div>
      </div>
      <CTABand />
    </>
  );
}
