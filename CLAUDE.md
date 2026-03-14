# Cameron Fleet Blog — Claude Instructions

## Writing voice

**All writing tasks must follow `VOICE.md`.** This applies to blog posts, excerpts, metadata descriptions, and any other prose produced in this repo.

Read `VOICE.md` before drafting any content. The key rules:
- Open with the claim, not the setup
- Full contractions, casual register — write like you're talking to a smart colleague
- Vary paragraph length — short punchy lines to land points, longer when building an argument
- Explain from first principles, but don't condescend
- End by restating the thesis and pointing forward
- Comp voices: Charity Majors, Will Larson

## Drafting a post

To draft a new post:
1. Read `VOICE.md`
2. Ask for the topic and any specific angles Cameron wants to hit
3. Draft the full post in `src/posts/<slug>.mdx` with correct frontmatter
4. Frontmatter fields: `title`, `date`, `excerpt`, `tags` (array), `category`
5. Do not include a duplicate `# Title` heading in the body — the title renders from frontmatter

## Repo structure

- `src/posts/` — MDX blog posts
- `src/components/blog/` — blog UI components
- `src/app/` — Next.js app router pages
- `VOICE.md` — writing style guide (source of truth for all prose)
- `tailwind.config.ts` — uses `font-heading` (Comico) and `font-body` (Zodiak) from Fontshare CDN

## Stack

Next.js 14 (app router), Tailwind CSS v3, MDX via `next-mdx-remote`, deployed on Vercel.

## Code style

- Use existing Tailwind utility classes — don't add new CSS unless necessary
- Prefer editing existing components over creating new ones
- Dark mode via `dark:` prefix — respects system preference, toggled via `ThemeToggle.tsx`
- No rounded corners — `--radius: 0rem` is intentional
