# Migration And Validation Instructions

Use this as the execution checklist after the identity table is approved. Keep each stage reviewable and avoid mixing unrelated cleanup into the rename.

## Staged Migration

1. Freeze the approved identity table, taxonomy map, compatibility matrix, UI brief, and legal decision.
2. Create a classified occurrence inventory and record intentional old-name matches.
3. Migrate shared identity configuration, app shell, SEO helpers, static HTML, docs, and policy text.
4. Migrate content metadata and object names using explicit mappings. Keep source folders, routes, and derived registries synchronized.
5. Apply the approved UI tokens and shared layout changes. Verify desktop and mobile before rewriting demos.
6. Update registry generation and clean-install fixtures.
7. Update CLI package metadata, commands, client configuration, and publish workflow without publishing yet.
8. Update MCP, worker, OpenAPI, llms, skill, plugin, and marketplace surfaces.
9. Update assets, redirects, sitemap, manifest, Cloudflare configuration, DNS, and deployment documentation.
10. Regenerate all derived artifacts and review the complete diff.
11. Run the validation matrix and perform a production-like deployment to a preview origin.
12. Release only after the compatibility and rollback checks pass.

## Validation Commands

Run from the repository root:

```bash
bun run lint
bun run build
bun test scripts/generate-shadcn-registry.test.ts
bun test mcp/catalog.test.ts
bun test mcp/worker.test.ts
bun test worker/site.test.ts
bun test packages/cli/cli.test.ts
```

If the repository's test runner or script names differ at implementation time, inspect `package.json` first and record the exact replacement. Do not silently skip focused tests.

## Identity Search

Search source, generated output, public files, package metadata, deployment files, and tests for old values. Prefer `rg` when available; on Windows PowerShell use an equivalent recursive text search if it is not installed. Search case variants and URL fragments, not only the visible brand name.

Required search terms include:

```text
Watermelon
watermelon
WatermelonCorp
watermelon.sh
ui.watermelon.sh
assets.watermelon.sh
registry.watermelon.sh
mcp.watermelon.sh
@watermelon-ui
watermelon-ui
watermelon-platform
watermelonoriginalassets
wm_
```

Each remaining match must be one of:

- an approved compatibility alias
- a factual historical or legal attribution
- an explicitly retained technical fixture
- a documented migration test

Everything else is a release blocker.

## Functional Matrix

- [ ] `/`, `/home`, catalog routes, category routes, detail routes, docs routes, and not-found route load directly and on refresh.
- [ ] Navigation, breadcrumbs, sidebar active state, search, command palette, and internal links use the new route taxonomy.
- [ ] Every object type has valid listing, detail, preview, metadata, sitemap, API, and MCP behavior.
- [ ] A clean consumer can install representative registry items with the documented command.
- [ ] CLI `--help`, `init --client codex`, `init --client claude`, and `init --client cursor` work as documented.
- [ ] MCP initialize, discovery, search, retrieval, category, inspiration, and composition calls return valid new URLs and payloads.
- [ ] `/llms.txt`, `/openapi.json`, `/api/docs`, and catalog endpoints describe deployed behavior.
- [ ] Static HTML, dynamic SEO, manifest, robots, sitemap, Open Graph, and JSON-LD use consistent identity.
- [ ] Assets load on desktop and mobile; old asset behavior matches the compatibility decision.
- [ ] Reduced motion, keyboard access, focus states, contrast, and mobile restrictions remain correct.
- [ ] Preview deployment, Worker deployment, DNS, redirects, analytics, and rollback are verified.

## Release Gate And Rollback

Before release record:

- commit or build identifier
- approved identity table version
- generated artifact diff review
- URL and package compatibility results
- deployment owners and rollback command
- known residual old-name occurrences

Rollback must restore the previous website, registry, MCP, CLI release, generated artifacts, and DNS/redirect behavior as one versioned release. Do not roll back only the frontend while leaving install or MCP endpoints on incompatible metadata.
