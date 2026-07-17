"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Bits";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real endpoint (Formspree, Resend, or a Supabase function)
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-8 font-body text-[15px] text-ink">
        Thanks — we&apos;ve got your message and will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <div>
        <label className="font-mono text-xs text-charcoalsoft tracking-[0.06em]">NAME</label>
        <input
          required
          className="font-body w-full px-3.5 py-3 border border-line bg-white text-[15px] mt-1.5 focus:outline-2 focus:outline-gold"
        />
      </div>
      <div>
        <label className="font-mono text-xs text-charcoalsoft tracking-[0.06em]">EMAIL</label>
        <input
          required
          type="email"
          className="font-body w-full px-3.5 py-3 border border-line bg-white text-[15px] mt-1.5 focus:outline-2 focus:outline-gold"
        />
      </div>
      <div>
        <label className="font-mono text-xs text-charcoalsoft tracking-[0.06em]">WHAT DO YOU NEED?</label>
        <select className="font-body w-full px-3.5 py-3 border border-line bg-white text-[15px] mt-1.5 focus:outline-2 focus:outline-gold">
          <option>Brand & identity</option>
          <option>Graphic design</option>
          <option>Video editing</option>
          <option>Motion graphics</option>
          <option>Web development</option>
          <option>AI automation</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label className="font-mono text-xs text-charcoalsoft tracking-[0.06em]">MESSAGE</label>
        <textarea
          rows={5}
          required
          className="font-body w-full px-3.5 py-3 border border-line bg-white text-[15px] mt-1.5 resize-y focus:outline-2 focus:outline-gold"
        />
      </div>
      <Button primary>
        Send message <ArrowRight size={16} />
      </Button>
    </form>
  );
}
