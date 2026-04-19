# diasyrmus — Claude Code context

## Stack
- **Quartz v4** static site generator (TypeScript)
- Deployed to **GitHub Pages** at https://diasyrmus.github.io
- Content lives in `content/` as Markdown with YAML frontmatter

## Branches
- **`v4` is the deploy branch** — GitHub Actions builds and publishes from it
- Always commit changes to `quartz.config.ts`, `quartz.layout.ts`, or any Quartz source file directly on `v4`
- Do not leave changes uncommitted in a worktree branch — they will not be deployed

## Key config files
- `quartz.config.ts` — plugins, date type, theme, analytics
- `quartz.layout.ts` — sidebar/page component layout, Explorer sort order

## Conventions established
- `defaultDateType: "created"` — posts display their frontmatter `date:` field, not filesystem modified date
- `FolderPage` sorted by `dates.created` descending — folder listing pages show newest first
- `Explorer` sorted by `dates.created` descending within folders — sidebar shows newest first
- `.claude/` is in `.gitignore` — worktree dirs must not be committed

## Content structure
- `content/Books/` — book notes/responses, one file per book
- Other `.md` files in `content/` are posts/essays
- Frontmatter should include `date:` for correct ordering and display
