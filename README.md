# King'smind Labs — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Pages

- `/` — Home
- `/services`
- `/work`
- `/about`
- `/contact`

## Deploy to Vercel

This is a real Next.js project (not a single component file), so it deploys as-is:

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import that repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.

Or from the terminal, inside this folder:

```
npx vercel
```

## Known TODOs

- The contact form (`components/ContactForm.tsx`) doesn't send anywhere yet.
  Wire it to Formspree, Resend, or a Supabase Edge Function.
- Copy throughout is a first draft — worth a pass in your own voice, especially the About page.
