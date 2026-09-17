# Rebrand And Library Migration

This folder contains the implementation instructions for converting the current Watermelon UI platform into a new UI library. It is intentionally separate from application code so the migration can be reviewed before any behavior changes are made.

## Status

The identity values are recorded in `00-identity-and-decisions.md`. The implementation is in progress; DNS, mailbox, npm ownership, legal, and deployment confirmations remain release gates.

## Execution Order

1. `00-identity-and-decisions.md`: fill in all required identity, taxonomy, compatibility, legal, and infrastructure decisions.
2. `01-inventory-and-branding.md`: create a complete token inventory and migrate platform identity without changing content semantics accidentally.
3. `02-content-model-and-ui.md`: define new objects, migrate content metadata and routes, and apply the new UI direction.
4. `03-registry-cli-mcp.md`: migrate installable output, CLI, MCP, API, skills, and agent plugins as one distribution surface.
5. `04-seo-assets-and-deployment.md`: migrate canonical metadata, assets, public machine-readable files, redirects, and Cloudflare configuration.
6. `05-migration-and-validation.md`: run the staged migration, verify compatibility, and complete the release gate.

## Non-Negotiable Gates

- No placeholder may reach a production build, package, registry item, MCP response, public metadata file, or deployment configuration.
- No old-domain URL may remain in a canonical or installable surface unless it is explicitly listed as a compatibility alias.
- Generated artifacts must be regenerated from their sources.
- Existing source-backed content must remain available or have an explicit migration/deprecation decision.
- The old identity must not be removed from legal attribution or migration notices when that would misrepresent source history or ownership.

## Current Repository Map

- Website and routes: `src/pages`, `src/components/layout`, `src/components/seo-head.tsx`, `src/utils/seo.ts`.
- Content and demos: `src/data/contents`, `src/data/*.tsx`, `src/data/*-metadata.ts`.
- Registry generation: `scripts/generate-shadcn-registry.ts`, `scripts/generate-shadcn-registry.test.ts`.
- MCP and public API: `mcp`, `worker`, `public/openapi.json`, `public/llms.txt`.
- CLI and plugins: `packages/cli`, `skills/bitelemon-ui`, `.claude-plugin`, `.codex-plugin`, `.cursor-plugin`, `.agents/plugins`.
- Hosting and public assets: `wrangler.toml`, `wrangler.mcp.toml`, `public`, `index.html`.
- Project and policy docs: `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`, `AI_POLICY.md`, `CODE_OF_CONDUCT.md`, `LICENSE`.
