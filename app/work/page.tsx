import { Eyebrow, CTABand } from "@/components/Bits";

export const metadata = { title: "Work — King'smind Labs" };

export default function WorkPage() {
  return (
    <>
      <div className="bg-ink px-6 pt-[72px] pb-14">
        <div className="max-w-content mx-auto">
          <Eyebrow dark>WORK</Eyebrow>
          <h1 className="font-display text-[32px] md:text-[48px] text-white font-medium max-w-[700px]">
            Proof over promises.
          </h1>
        </div>
      </div>
      <div className="bg-paper px-6 pt-[72px] pb-10">
        <div className="max-w-content mx-auto">
          <div className="bg-ink text-white px-10 py-12 mb-6">
            <div className="font-mono text-[12.5px] text-gold tracking-[0.1em] mb-4">
              PRODUCT · IN ACTIVE DEVELOPMENT
            </div>
            <div className="font-display text-[30px] font-medium mb-4">CampusAssist</div>
            <p className="font-body text-[15px] text-[#AEB8C8] max-w-[680px] leading-loose mb-5">
              Students have PDFs, lecture notes, and textbooks but no fast way to turn that into something they can
              actually study and test themselves on. CampusAssist lets a student upload their own course material
              and uses AI to generate structured study modules, flashcards, and CBT-style quizzes, with a 60% pass
              threshold to reinforce mastery. A blockbuster-style game feature is now in development to keep
              students opening the app daily, not just before exams.
            </p>
            <div className="flex gap-6 flex-wrap font-body text-[13.5px] text-[#8D97A8]">
              <span>Next.js · TypeScript · Tailwind</span>
              <span>Supabase</span>
              <span>Gemini API</span>
              <span>Paystack</span>
            </div>
          </div>
          <div className="border border-line px-10 py-10 text-center">
            <div className="font-body text-[14.5px] text-charcoalsoft">
              More case studies coming soon as new projects ship.
            </div>
          </div>
        </div>
      </div>
      <CTABand />
    </>
  );
}
