# intern-app

Created with [create-lumos-app](https://github.com/lumos-fellows/create-lumos-app).

## Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Linter/Formatter**: Biome
- **Integrations**: Supabase

## Getting Started

```bash
# Install dependencies
npm install

# Fill in your env vars
$EDITOR .env.local

# Start the dev server
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

Fill in your values in `.env.local`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run format` | Format code with Biome |
| `npm run lint` | Lint code with Biome |
| `npm run typecheck` | Run TypeScript type checking |

## Optional: Doppler for Secrets Management

For team environments, consider using [Doppler](https://www.doppler.com/) to manage env vars:

```bash
# Install Doppler CLI, then:
doppler setup
doppler run -- npm run dev
```
