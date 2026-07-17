import { Eyebrow, CTABand } from "@/components/Bits";

export const metadata = { title: "About — King'smind Labs" };

export default function AboutPage() {
  return (
    <>
      <div className="bg-ink px-6 pt-[72px] pb-14">
        <div className="max-w-content mx-auto">
          <Eyebrow dark>ABOUT</Eyebrow>
          <h1 className="font-display text-[32px] md:text-[48px] text-white font-medium max-w-[700px]">
            A small studio, built to be trusted with real work.
          </h1>
        </div>
      </div>
      <div className="bg-paper px-6 py-[72px]">
        <div className="max-w-[760px] mx-auto">
          <p className="font-body text-[16.5px] text-charcoal leading-loose mb-6">
            King&apos;smind Labs (KMLABS) started in Kaduna, Nigeria, out of a simple observation: most businesses
            need a lot of different things done well — branding, design, video, a website, and increasingly, AI —
            and rarely find one place that treats all of it with the same seriousness.
          </p>
          <p className="font-body text-[16.5px] text-charcoal leading-loose mb-6">
            We&apos;re led by Jathniel Alexander, Strategist and Strategic Developer, and a small, senior-minded team
            split across design, engineering, and growth. Our flagship product, CampusAssist, is proof of how we
            work — built, deployed, and actively evolving, not just a pitch deck.
          </p>
          <p className="font-body text-[16.5px] text-charcoal leading-loose mb-12">
            We&apos;re starting from Nigeria, but we&apos;re not building a regional agency. The goal from day one
            has been to do work that holds up anywhere in the world.
          </p>
          <div className="border-t border-line pt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            <div>
              <div className="font-mono text-[12.5px] text-gold mb-2">BASED IN</div>
              <div className="font-body text-[15px] text-ink">Kaduna, Nigeria</div>
            </div>
            <div>
              <div className="font-mono text-[12.5px] text-gold mb-2">BUILDING FOR</div>
              <div className="font-body text-[15px] text-ink">Clients worldwide</div>
            </div>
            <div>
              <div className="font-mono text-[12.5px] text-gold mb-2">FLAGSHIP PRODUCT</div>
              <div className="font-body text-[15px] text-ink">CampusAssist</div>
            </div>
          </div>
        </div>
      </div>
      <CTABand />
    </>
  );
}
