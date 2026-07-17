import { useState } from "react";
import { ArrowRight, Menu, X, Palette, Video, Film, Code2, Bot, PenTool, Mail, MapPin, ArrowUpRight } from "lucide-react";

const c = {
  ink: "#0E1B2E",
  inkSoft: "#16263D",
  paper: "#F6F7F4",
  paperDim: "#EDEEE8",
  slate: "#3A5A8C",
  gold: "#B9903F",
  charcoal: "#1C2431",
  charcoalSoft: "#5B6473",
  line: "#D8DCE2",
  lineDark: "#28374F",
};

const display = { fontFamily: "'Fraunces', Georgia, serif" };
const body = { fontFamily: "'IBM Plex Sans', system-ui, sans-serif" };
const mono = { fontFamily: "'IBM Plex Mono', monospace" };

const services = [
  { n: "01", icon: PenTool, name: "Brand & Identity", blurb: "Names, marks, and visual systems that hold up across every surface a company touches." },
  { n: "02", icon: Palette, name: "Graphic Design", blurb: "Decks, print, packaging, and everyday collateral, designed with the same care as the logo." },
  { n: "03", icon: Video, name: "Video Editing", blurb: "Raw footage cut into something worth watching — ads, product films, social cuts." },
  { n: "04", icon: Film, name: "Motion Graphics", blurb: "Animated logos, explainers, and UI motion that make a product feel considered." },
  { n: "05", icon: Code2, name: "Web Development", blurb: "Fast, production-grade sites and web apps, built on React, Next.js, and modern infra." },
  { n: "06", icon: Bot, name: "AI Automation", blurb: "Custom AI workflows and assistants that take real work off a team's plate." },
];

const process = [
  { n: "01", name: "Discover", blurb: "We learn the business, the audience, and what actually needs to be true for this to work." },
  { n: "02", name: "Design", blurb: "Concepts get built, tested against the brief, and narrowed to the one worth building." },
  { n: "03", name: "Build", blurb: "Design becomes a shipped product — code, video, or asset — to production standard." },
  { n: "04", name: "Launch & support", blurb: "We stay on after launch. Most of what we build keeps evolving after it ships." },
];

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Services", "Work", "About", "Contact"];
  return (
    <div style={{ background: c.ink, borderBottom: `1px solid ${c.lineDark}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => setPage("Home")} style={{ ...mono, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 10, height: 10, background: c.gold, display: "inline-block" }} />
          <span style={{ color: "#fff", fontSize: 14, letterSpacing: "0.08em" }}>KING'SMIND LABS</span>
        </button>
        <div className="hidden md:flex" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {items.map((it) => (
            <button
              key={it}
              onClick={() => setPage(it)}
              style={{
                ...body,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                color: page === it ? c.gold : "#C7CDD8",
                paddingBottom: 4,
                borderBottom: page === it ? `1px solid ${c.gold}` : "1px solid transparent",
              }}
            >
              {it}
            </button>
          ))}
          <button
            onClick={() => setPage("Contact")}
            style={{ ...body, background: c.gold, color: c.ink, border: "none", padding: "10px 18px", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}
          >
            Start a project
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <div style={{ background: c.ink, borderTop: `1px solid ${c.lineDark}`, padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40, marginBottom: 40 }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ ...mono, color: "#fff", fontSize: 14, letterSpacing: "0.08em", marginBottom: 12 }}>KING'SMIND LABS</div>
            <p style={{ ...body, color: "#8D97A8", fontSize: 14, lineHeight: 1.7 }}>
              A full-service digital studio based in Kaduna, Nigeria, building brand, motion, web, and AI work for clients wherever they are.
            </p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <div style={{ ...mono, color: "#8D97A8", fontSize: 12, marginBottom: 14, letterSpacing: "0.08em" }}>MENU</div>
              {["Home", "Services", "Work", "About", "Contact"].map((it) => (
                <div key={it} style={{ marginBottom: 10 }}>
                  <button onClick={() => setPage(it)} style={{ ...body, background: "none", border: "none", color: "#C7CDD8", fontSize: 14, cursor: "pointer", padding: 0 }}>
                    {it}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div style={{ ...mono, color: "#8D97A8", fontSize: 12, marginBottom: 14, letterSpacing: "0.08em" }}>CONTACT</div>
              <div style={{ ...body, color: "#C7CDD8", fontSize: 14, marginBottom: 10 }}>hello@kmlabs.studio</div>
              <div style={{ ...body, color: "#C7CDD8", fontSize: 14 }}>Kaduna, Nigeria</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${c.lineDark}`, paddingTop: 24, ...body, color: "#6B7688", fontSize: 12.5 }}>
          © {new Date().getFullYear()} King'smind Labs. Built to be believed.
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children, dark }) {
  return (
    <div style={{ ...mono, fontSize: 12.5, letterSpacing: "0.12em", color: dark ? c.gold : c.slate, marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 24, height: 1, background: dark ? c.gold : c.slate, display: "inline-block" }} />
      {children}
    </div>
  );
}

function Button({ children, primary, dark, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...body,
        fontSize: 14.5,
        fontWeight: 600,
        padding: "13px 26px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: primary ? "none" : `1px solid ${dark ? "#3A4A63" : c.line}`,
        background: primary ? c.gold : "transparent",
        color: primary ? c.ink : dark ? "#fff" : c.charcoal,
      }}
    >
      {children}
    </button>
  );
}

function Hero({ setPage }) {
  return (
    <div style={{ background: c.ink, padding: "96px 24px 88px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow dark>KADUNA, NIGERIA — BUILT FOR THE WORLD</Eyebrow>
        <h1 style={{ ...display, fontSize: "clamp(38px, 5.5vw, 66px)", color: "#fff", lineHeight: 1.08, maxWidth: 780, marginBottom: 28, fontWeight: 500 }}>
          We build what businesses need to be believed.
        </h1>
        <p style={{ ...body, fontSize: 18, color: "#AEB8C8", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
          KMLABS is a full-service studio for brand design, video and motion, web development, and AI automation — for founders who need to move fast without looking like they're moving fast.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button primary onClick={() => setPage("Work")}>
            See our work <ArrowRight size={16} />
          </Button>
          <Button dark onClick={() => setPage("Contact")}>
            Start a project
          </Button>
        </div>
      </div>
    </div>
  );
}

function Manifest({ full }) {
  return (
    <div style={{ background: c.paper, padding: "88px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>WHAT WE DO</Eyebrow>
        <h2 style={{ ...display, fontSize: 32, color: c.ink, marginBottom: 10, fontWeight: 500 }}>Six disciplines, one studio.</h2>
        <p style={{ ...body, fontSize: 15.5, color: c.charcoalSoft, maxWidth: 560, marginBottom: 48 }}>
          Most agencies hand you off between vendors. We keep design, motion, engineering, and automation under one roof.
        </p>
        <div style={{ borderTop: `1px solid ${c.line}` }}>
          {services.slice(0, full ? 6 : 6).map((s, i) => (
            <div
              key={s.n}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 40px 1fr",
                gap: 20,
                alignItems: "start",
                padding: "26px 0",
                borderBottom: `1px solid ${c.line}`,
              }}
            >
              <div style={{ ...mono, fontSize: 13, color: c.gold, paddingTop: 4 }}>{s.n}</div>
              <s.icon size={22} color={c.slate} style={{ marginTop: 2 }} />
              <div>
                <div style={{ ...body, fontSize: 17, fontWeight: 600, color: c.ink, marginBottom: 6 }}>{s.name}</div>
                <div style={{ ...body, fontSize: 14.5, color: c.charcoalSoft, lineHeight: 1.6, maxWidth: 620 }}>{s.blurb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessBlock() {
  return (
    <div style={{ background: c.paperDim, padding: "88px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>HOW WE WORK</Eyebrow>
        <h2 style={{ ...display, fontSize: 32, color: c.ink, marginBottom: 48, fontWeight: 500 }}>A process built for momentum.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
          {process.map((p) => (
            <div key={p.n}>
              <div style={{ ...mono, fontSize: 13, color: c.gold, marginBottom: 12 }}>{p.n}</div>
              <div style={{ ...body, fontSize: 17, fontWeight: 600, color: c.ink, marginBottom: 8 }}>{p.name}</div>
              <div style={{ ...body, fontSize: 14, color: c.charcoalSoft, lineHeight: 1.6 }}>{p.blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkPreview({ setPage }) {
  return (
    <div style={{ background: c.paper, padding: "88px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>FEATURED WORK</Eyebrow>
        <h2 style={{ ...display, fontSize: 32, color: c.ink, marginBottom: 48, fontWeight: 500 }}>Currently shipping.</h2>
        <button
          onClick={() => setPage("Work")}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            background: c.ink,
            border: "none",
            cursor: "pointer",
            padding: "48px 40px",
            color: "#fff",
          }}
        >
          <div style={{ ...mono, fontSize: 12.5, color: c.gold, letterSpacing: "0.1em", marginBottom: 16 }}>PRODUCT · IN ACTIVE DEVELOPMENT</div>
          <div style={{ ...display, fontSize: 30, fontWeight: 500, marginBottom: 14 }}>CampusAssist</div>
          <p style={{ ...body, fontSize: 15, color: "#AEB8C8", maxWidth: 620, lineHeight: 1.7, marginBottom: 20 }}>
            An AI-powered study platform that turns a student's own course material into structured modules, flashcards, and CBT-style quizzes — built for Nigerian campus students first.
          </p>
          <div style={{ ...body, fontSize: 14, fontWeight: 600, color: c.gold, display: "flex", alignItems: "center", gap: 6 }}>
            Read the case study <ArrowUpRight size={16} />
          </div>
        </button>
      </div>
    </div>
  );
}

function CTABand({ setPage }) {
  return (
    <div style={{ background: c.ink, padding: "72px 24px", borderTop: `1px solid ${c.lineDark}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
        <h3 style={{ ...display, fontSize: 28, color: "#fff", fontWeight: 500, maxWidth: 480 }}>Have something worth building?</h3>
        <Button primary onClick={() => setPage("Contact")}>
          Start a project <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <Manifest />
      <WorkPreview setPage={setPage} />
      <ProcessBlock />
      <CTABand setPage={setPage} />
    </>
  );
}

function ServicesPage({ setPage }) {
  return (
    <>
      <div style={{ background: c.ink, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow dark>SERVICES</Eyebrow>
          <h1 style={{ ...display, fontSize: "clamp(32px, 4vw, 48px)", color: "#fff", fontWeight: 500, maxWidth: 700 }}>
            Everything a business needs to look and work like it means it.
          </h1>
        </div>
      </div>
      <div style={{ background: c.paper, padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 1, background: c.line }}>
          {services.map((s) => (
            <div key={s.n} style={{ background: c.paper, padding: "36px 32px" }}>
              <div style={{ ...mono, fontSize: 13, color: c.gold, marginBottom: 16 }}>{s.n}</div>
              <s.icon size={26} color={c.slate} style={{ marginBottom: 16 }} />
              <div style={{ ...body, fontSize: 19, fontWeight: 600, color: c.ink, marginBottom: 10 }}>{s.name}</div>
              <div style={{ ...body, fontSize: 14.5, color: c.charcoalSoft, lineHeight: 1.65, marginBottom: 16 }}>{s.blurb}</div>
            </div>
          ))}
        </div>
      </div>
      <CTABand setPage={setPage} />
    </>
  );
}

function WorkPage({ setPage }) {
  return (
    <>
      <div style={{ background: c.ink, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow dark>WORK</Eyebrow>
          <h1 style={{ ...display, fontSize: "clamp(32px, 4vw, 48px)", color: "#fff", fontWeight: 500, maxWidth: 700 }}>
            Proof over promises.
          </h1>
        </div>
      </div>
      <div style={{ background: c.paper, padding: "72px 24px 40px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ background: c.ink, color: "#fff", padding: "48px 40px", marginBottom: 24 }}>
            <div style={{ ...mono, fontSize: 12.5, color: c.gold, letterSpacing: "0.1em", marginBottom: 16 }}>PRODUCT · IN ACTIVE DEVELOPMENT</div>
            <div style={{ ...display, fontSize: 30, fontWeight: 500, marginBottom: 16 }}>CampusAssist</div>
            <p style={{ ...body, fontSize: 15, color: "#AEB8C8", maxWidth: 680, lineHeight: 1.75, marginBottom: 20 }}>
              Students have PDFs, lecture notes, and textbooks but no fast way to turn that into something they can actually study and test themselves on.
              CampusAssist lets a student upload their own course material and uses AI to generate structured study modules, flashcards, and CBT-style quizzes,
              with a 60% pass threshold to reinforce mastery. A blockbuster-style game feature is now in development to keep students opening the app daily,
              not just before exams.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", ...body, fontSize: 13.5, color: "#8D97A8" }}>
              <span>Next.js · TypeScript · Tailwind</span>
              <span>Supabase</span>
              <span>Gemini API</span>
              <span>Paystack</span>
            </div>
          </div>
          <div style={{ border: `1px solid ${c.line}`, padding: "40px", textAlign: "center" }}>
            <div style={{ ...body, fontSize: 14.5, color: c.charcoalSoft }}>More case studies coming soon as new projects ship.</div>
          </div>
        </div>
      </div>
      <CTABand setPage={setPage} />
    </>
  );
}

function AboutPage({ setPage }) {
  return (
    <>
      <div style={{ background: c.ink, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow dark>ABOUT</Eyebrow>
          <h1 style={{ ...display, fontSize: "clamp(32px, 4vw, 48px)", color: "#fff", fontWeight: 500, maxWidth: 700 }}>
            A small studio, built to be trusted with real work.
          </h1>
        </div>
      </div>
      <div style={{ background: c.paper, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...body, fontSize: 16.5, color: c.charcoal, lineHeight: 1.8, marginBottom: 24 }}>
            King'smind Labs (KMLABS) started in Kaduna, Nigeria, out of a simple observation: most businesses need a lot of different things done well —
            branding, design, video, a website, and increasingly, AI — and rarely find one place that treats all of it with the same seriousness.
          </p>
          <p style={{ ...body, fontSize: 16.5, color: c.charcoal, lineHeight: 1.8, marginBottom: 24 }}>
            We're led by Jathniel Alexander, Strategist and Strategic Developer, and a small, senior-minded team split across design, engineering, and growth.
            Our flagship product, CampusAssist, is proof of how we work — built, deployed, and actively evolving, not just a pitch deck.
          </p>
          <p style={{ ...body, fontSize: 16.5, color: c.charcoal, lineHeight: 1.8, marginBottom: 48 }}>
            We're starting from Nigeria, but we're not building a regional agency. The goal from day one has been to do work that holds up anywhere in the world.
          </p>
          <div style={{ borderTop: `1px solid ${c.line}`, paddingTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div>
              <div style={{ ...mono, fontSize: 12.5, color: c.gold, marginBottom: 8 }}>BASED IN</div>
              <div style={{ ...body, fontSize: 15, color: c.ink }}>Kaduna, Nigeria</div>
            </div>
            <div>
              <div style={{ ...mono, fontSize: 12.5, color: c.gold, marginBottom: 8 }}>BUILDING FOR</div>
              <div style={{ ...body, fontSize: 15, color: c.ink }}>Clients worldwide</div>
            </div>
            <div>
              <div style={{ ...mono, fontSize: 12.5, color: c.gold, marginBottom: 8 }}>FLAGSHIP PRODUCT</div>
              <div style={{ ...body, fontSize: 15, color: c.ink }}>CampusAssist</div>
            </div>
          </div>
        </div>
      </div>
      <CTABand setPage={setPage} />
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <div style={{ background: c.ink, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow dark>CONTACT</Eyebrow>
          <h1 style={{ ...display, fontSize: "clamp(32px, 4vw, 48px)", color: "#fff", fontWeight: 500, maxWidth: 700 }}>
            Tell us what you're building.
          </h1>
        </div>
      </div>
      <div style={{ background: c.paper, padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56 }}>
          <div>
            {sent ? (
              <div style={{ border: `1px solid ${c.line}`, padding: 32, ...body, fontSize: 15, color: c.ink }}>
                Thanks — we've got your message and will get back to you shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div>
                  <label style={{ ...mono, fontSize: 12, color: c.charcoalSoft, letterSpacing: "0.06em" }}>NAME</label>
                  <input required style={{ ...body, width: "100%", padding: "12px 14px", border: `1px solid ${c.line}`, background: "#fff", fontSize: 15, marginTop: 6 }} />
                </div>
                <div>
                  <label style={{ ...mono, fontSize: 12, color: c.charcoalSoft, letterSpacing: "0.06em" }}>EMAIL</label>
                  <input required type="email" style={{ ...body, width: "100%", padding: "12px 14px", border: `1px solid ${c.line}`, background: "#fff", fontSize: 15, marginTop: 6 }} />
                </div>
                <div>
                  <label style={{ ...mono, fontSize: 12, color: c.charcoalSoft, letterSpacing: "0.06em" }}>WHAT DO YOU NEED?</label>
                  <select style={{ ...body, width: "100%", padding: "12px 14px", border: `1px solid ${c.line}`, background: "#fff", fontSize: 15, marginTop: 6 }}>
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
                  <label style={{ ...mono, fontSize: 12, color: c.charcoalSoft, letterSpacing: "0.06em" }}>MESSAGE</label>
                  <textarea rows={5} required style={{ ...body, width: "100%", padding: "12px 14px", border: `1px solid ${c.line}`, background: "#fff", fontSize: 15, marginTop: 6, resize: "vertical" }} />
                </div>
                <Button primary>
                  Send message <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </div>
          <div>
            <div style={{ border: `1px solid ${c.line}`, padding: 32 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 24 }}>
                <Mail size={18} color={c.gold} style={{ marginTop: 2 }} />
                <div>
                  <div style={{ ...body, fontSize: 13.5, color: c.charcoalSoft, marginBottom: 4 }}>Email</div>
                  <div style={{ ...body, fontSize: 15, color: c.ink }}>hello@kmlabs.studio</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <MapPin size={18} color={c.gold} style={{ marginTop: 2 }} />
                <div>
                  <div style={{ ...body, fontSize: 13.5, color: c.charcoalSoft, marginBottom: 4 }}>Based in</div>
                  <div style={{ ...body, fontSize: 15, color: c.ink }}>Kaduna, Nigeria — working worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  return (
    <div style={{ ...body, minHeight: "100vh", background: c.paper }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input:focus, textarea:focus, select:focus { outline: 2px solid ${c.gold}; outline-offset: 1px; }
        @media (max-width: 760px) {
          .hidden.md\\:flex { display: none !important; }
        }
      `}</style>
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "Services" && <ServicesPage setPage={setPage} />}
      {page === "Work" && <WorkPage setPage={setPage} />}
      {page === "About" && <AboutPage setPage={setPage} />}
      {page === "Contact" && <ContactPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
