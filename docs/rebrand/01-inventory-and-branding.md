# Inventory And Branding Instructions

Run this phase after `00-identity-and-decisions.md` is approved. The goal is a complete, reviewable identity migration without corrupting sample content or technical dependency names.

## 1. Build The Inventory

Create a checked-in migration inventory or an issue attachment containing each occurrence of:

- `Watermelon`, `watermelon`, `WATERMELON`, `WatermelonCorp`, `watermelon.sh`, `ui.watermelon.sh`, `assets.watermelon.sh`, `registry.watermelon.sh`, and `mcp.watermelon.sh`
- `@watermelon-ui`, `watermelon-ui`, `watermelon-platform`, and the `.mcp.json` key `watermelon`
- `shadcn`, `shadcn@latest`, `components/watermelon`, `watermelonoriginalassets`, and `wm_`
- `watermeloncorpui@gmail.com`, `x.com/watermelonui`, and repository URLs

Classify every match as one of:

1. platform identity
2. public route or URL
3. package, binary, or configuration identifier
4. generated value
5. legal or historical attribution
6. fictional sample content
7. asset filename or storage path
8. technical dependency
9. test fixture or expected value

Do not use a blind global replacement. The same token has different migration semantics in these classes.

## 2. Platform Identity Sources

Use the approved identity table as the only source for these areas:

- `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`, `AI_POLICY.md`, `CODE_OF_CONDUCT.md`, and `LICENSE`
- `index.html`
- `src/components/layout/logo.tsx`, `navbar.tsx`, `footer.tsx`, `dashboard-footer.tsx`, `socials.tsx`, and `command-palette.tsx`
- `src/components/seo-head.tsx` and `src/utils/seo.ts`
- all static text in `src/pages`, including `about.tsx`, `contact.tsx`, `copyright.tsx`, `developers.tsx`, `developers-auth.tsx`, `developers-mcp.tsx`, `developers-status.tsx`, `framework-support.tsx`, `installation.tsx`, `privacy.tsx`, `terms.tsx`, and `changelog.tsx`
- `.mcp.json`, `settings.json`, and `.env.example`
- `.claude-plugin/plugin.json`, `.codex-plugin/plugin.json`, `.cursor-plugin/plugin.json`, `.agents/plugins/marketplace.json`, and `skills/bitelemon-ui/SKILL.md`

Centralize repeated public identity values where the existing architecture permits it. Do not introduce a runtime fetch or a new dependency just to centralize constants.

## 3. Content Classification

Review matches under `src/data/contents` individually.

- Product copy such as `Watermelon UI` must use the new brand or an approved historical attribution.
- Fictional names, reviews, company names, email addresses, avatars, and dashboard labels are sample data. Replace them only if the new content direction requires it.
- Asset paths such as `wm_alex.png` and `watermelonoriginalassets` require an asset migration decision, not a text replacement alone.
- Installation snippets in MDX are functional output and must follow the shadcn decision and registry decision.
- Component, block, dashboard, template, and showcase slugs are stable data identifiers. Rename them only through the taxonomy and URL migration plan.
- Copyright, inspiration, and source attribution must remain factually correct.

Relevant content roots include:

- `src/data/contents/components`
- `src/data/contents/animated-components`
- `src/data/contents/registry`
- `src/data/contents/blocks`
- `src/data/contents/dashboards`
- `src/data/contents/templates`
- `src/data/contents/showcases`

## 4. UI Surface Review

Review the visual identity at these shared boundaries before editing individual demos:

- tokens and global styles: `src/index.css`, `src/styles/vendor/shadcn-tailwind.css`
- app shell: `src/components/layout/page-layout.tsx`, `navbar.tsx`, `app-sidebar.tsx`, `footer.tsx`, `logo.tsx`
- catalog surfaces: `catalog-page-header.tsx`, `page-header.tsx`, `command-palette.tsx`
- documentation surfaces: `src/components/docs`, `src/components/mdx`
- previews and restrictions: `component-example.tsx`, `example.tsx`, `mobile-restriction.tsx`, skeletons
- template-owned UI: `src/data/contents/templates/**`

Apply the approved design direction consistently to desktop and mobile. Do not alter content behavior, route semantics, or installation behavior as part of a purely visual change unless the relevant instruction explicitly calls for it.

## 5. Review Output

Before moving to the next phase, produce:

- the complete classified token inventory
- a list of intentional old-name occurrences that remain and why
- a list of files requiring asset replacement or regeneration
- screenshots or recordings of the current baseline and the approved target direction
- a list of expected route, package, API, MCP, registry, and test changes
