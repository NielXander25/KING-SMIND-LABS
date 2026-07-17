import { Mail, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/Bits";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — King'smind Labs" };

export default function ContactPage() {
  return (
    <>
      <div className="bg-ink px-6 pt-[72px] pb-14">
        <div className="max-w-content mx-auto">
          <Eyebrow dark>CONTACT</Eyebrow>
          <h1 className="font-display text-[32px] md:text-[48px] text-white font-medium max-w-[700px]">
            Tell us what you&apos;re building.
          </h1>
        </div>
      </div>
      <div className="bg-paper px-6 pt-[72px] pb-24">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14">
          <ContactForm />
          <div>
            <div className="border border-line p-8">
              <div className="flex gap-3 items-start mb-6">
                <Mail size={18} className="text-gold mt-0.5" />
                <div>
                  <div className="font-body text-[13.5px] text-charcoalsoft mb-1">Email</div>
                  <div className="font-body text-[15px] text-ink">hello@kmlabs.studio</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-gold mt-0.5" />
                <div>
                  <div className="font-body text-[13.5px] text-charcoalsoft mb-1">Based in</div>
                  <div className="font-body text-[15px] text-ink">Kaduna, Nigeria — working worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
