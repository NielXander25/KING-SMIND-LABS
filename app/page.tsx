import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Eyebrow, Button, CTABand } from "@/components/Bits";
import { services, process } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <div className="bg-ink px-6 pt-24 pb-[88px]">
        <div className="max-w-content mx-auto">
          <Eyebrow dark>KADUNA, NIGERIA — BUILT FOR THE WORLD</Eyebrow>
          <h1 className="font-display text-[38px] md:text-[66px] text-white leading-[1.08] max-w-[780px] mb-7 font-medium">
            We build what businesses need to be believed.
          </h1>
          <p className="font-body text-lg text-[#AEB8C8] max-w-[560px] leading-relaxed mb-10">
            KMLABS is a full-service studio for brand design, video and motion, web development, and AI automation —
            for founders who need to move fast without looking like they&apos;re moving fast.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Button primary href="/work">
              See our work <ArrowRight size={16} />
            </Button>
            <Button dark href="/contact">
              Start a project
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-paper px-6 py-[88px]">
        <div className="max-w-content mx-auto">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="font-display text-[32px] text-ink mb-2.5 font-medium">Six disciplines, one studio.</h2>
          <p className="font-body text-[15.5px] text-charcoalsoft max-w-[560px] mb-12">
            Most agencies hand you off between vendors. We keep design, motion, engineering, and automation under
            one roof.
          </p>
          <div className="border-t border-line">
            {services.map((s) => (
              <div key={s.n} className="grid grid-cols-[56px_40px_1fr] gap-5 items-start py-6 border-b border-line">
                <div className="font-mono text-[13px] text-gold pt-1">{s.n}</div>
                <s.icon size={22} className="text-slate mt-0.5" />
                <div>
                  <div className="font-body text-[17px] font-semibold text-ink mb-1.5">{s.name}</div>
                  <div className="font-body text-[14.5px] text-charcoalsoft leading-relaxed max-w-[620px]">
                    {s.blurb}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-paper px-6 py-[88px]">
        <div className="max-w-content mx-auto">
          <Eyebrow>FEATURED WORK</Eyebrow>
          <h2 className="font-display text-[32px] text-ink mb-12 font-medium">Currently shipping.</h2>
          <a href="/work" className="block w-full text-left bg-ink px-10 py-12 text-white">
            <div className="font-mono text-[12.5px] text-gold tracking-[0.1em] mb-4">
              PRODUCT · IN ACTIVE DEVELOPMENT
            </div>
            <div className="font-display text-[30px] font-medium mb-3.5">CampusAssist</div>
            <p className="font-body text-[15px] text-[#AEB8C8] max-w-[620px] leading-relaxed mb-5">
              An AI-powered study platform that turns a student&apos;s own course material into structured modules,
              flashcards, and CBT-style quizzes — built for Nigerian campus students first.
            </p>
            <div className="font-body text-sm font-semibold text-gold flex items-center gap-1.5">
              Read the case study <ArrowUpRight size={16} />
            </div>
          </a>
        </div>
      </div>

      <div className="bg-paperdim px-6 py-[88px]">
        <div className="max-w-content mx-auto">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h2 className="font-display text-[32px] text-ink mb-12 font-medium">A process built for momentum.</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
            {process.map((p) => (
              <div key={p.n}>
                <div className="font-mono text-[13px] text-gold mb-3">{p.n}</div>
                <div className="font-body text-[17px] font-semibold text-ink mb-2">{p.name}</div>
                <div className="font-body text-sm text-charcoalsoft leading-relaxed">{p.blurb}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABand />
    </>
  );
}
