import { PenTool, Palette, Video, Film, Code2, Bot, type LucideIcon } from "lucide-react";

export type Service = {
  n: string;
  icon: LucideIcon;
  name: string;
  blurb: string;
};

export const services: Service[] = [
  { n: "01", icon: PenTool, name: "Brand & Identity", blurb: "Names, marks, and visual systems that hold up across every surface a company touches." },
  { n: "02", icon: Palette, name: "Graphic Design", blurb: "Decks, print, packaging, and everyday collateral, designed with the same care as the logo." },
  { n: "03", icon: Video, name: "Video Editing", blurb: "Raw footage cut into something worth watching — ads, product films, social cuts." },
  { n: "04", icon: Film, name: "Motion Graphics", blurb: "Animated logos, explainers, and UI motion that make a product feel considered." },
  { n: "05", icon: Code2, name: "Web Development", blurb: "Fast, production-grade sites and web apps, built on React, Next.js, and modern infra." },
  { n: "06", icon: Bot, name: "AI Automation", blurb: "Custom AI workflows and assistants that take real work off a team's plate." },
];

export const process = [
  { n: "01", name: "Discover", blurb: "We learn the business, the audience, and what actually needs to be true for this to work." },
  { n: "02", name: "Design", blurb: "Concepts get built, tested against the brief, and narrowed to the one worth building." },
  { n: "03", name: "Build", blurb: "Design becomes a shipped product — code, video, or asset — to production standard." },
  { n: "04", name: "Launch & support", blurb: "We stay on after launch. Most of what we build keeps evolving after it ships." },
];
