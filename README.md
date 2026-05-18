# TeamRally

Marketing website for TeamRally — a team collaboration tool. Built with React, TypeScript, and Tailwind CSS, backed by Supabase for waitlist and contact form submissions.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling
- **Supabase** — database for waitlist and contact forms
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type check |

## Project Structure

```
TeamRallyWebsite/
├── components/       # React components (Header, Hero, Features, etc.)
├── lib/              # Supabase client config
├── supabase/         # Database migrations
├── assets/           # Static assets
├── App.tsx           # Root component
└── main.tsx          # Entry point
```

## Environment Variables

Create a `.env` file at the project root with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
