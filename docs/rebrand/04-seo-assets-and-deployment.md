# SEO, Assets, And Deployment Instructions

This phase migrates all public discovery and hosting surfaces. Treat URLs as APIs: changing them requires redirects, aliases, or an explicit breaking-change decision.

## SEO Sources

Review together:

- `index.html`
- `src/components/seo-head.tsx`
- `src/utils/seo.ts`
- every page under `src/pages`
- `public/robots.txt`
- `public/sitemap.xml`
- `scripts/generate-sitemap.ts`
- `public/openapi.json`
- `public/llms.txt`
- `public/site.webmanifest`
- `public/_redirects`

Update title templates, descriptions, canonical URLs, Open Graph, Twitter metadata, JSON-LD names and URLs, search-action targets, author and publisher data, contact data, robots policy, and machine-readable descriptions.

The root landing page currently has static metadata in `index.html`, while page-level metadata is handled through `SEOHead`. Verify both paths so the initial HTML and client-side navigation agree. Do not assume a client-side update fixes crawler-visible metadata.

For every public route verify:

- one canonical URL on the approved origin
- stable title and description
- correct object type and breadcrumb schema where applicable
- valid `og:image` and Twitter image
- no old-domain links in canonical or structured data
- inclusion or intentional exclusion from the sitemap

## Asset Migration

Inventory and migrate:

- `public/favicon.svg`, `favicon.ico`, `favicon-96x96.png`
- `public/logo.png`, `logo-96.png`, `logo-64.png`, `logo-128.png`
- `public/apple-touch-icon.png`
- `public/og-image.avif`
- `public/web-app-manifest-192x192.png`, `web-app-manifest-512x512.png`
- `src/assets/logo-icon.tsx`
- all `https://assets.bitelemon.sh/...` references in content and UI
- asset identifiers containing the former `wm_` or `watermelonoriginalassets` names

Decision for this pass: use neutral paths on the new asset origin. Avatar files use the basename only (`wm_alex.png` becomes `alex.png`), and the former grouped preview path becomes `components/original-assets/`. The corresponding files still need to be copied or renamed in the external asset store before release. Preserve dimensions, formats, cache behavior, alt text, and responsive behavior. Update preconnect and image host allowlists where present.

## Cloudflare And DNS

Review:

- `wrangler.toml`
- `wrangler.mcp.toml`
- `worker/site.ts`
- `worker/agent-pages.ts`
- `.github/workflows/*.yml` and `.yaml`
- `public/_redirects`
- environment variable and secret references

Update Worker names, route patterns, zone names, origins, analytics datasets, deployment commands, environment names, and comments. Confirm DNS ownership and certificates before deploying. Keep old routes active until redirects or aliases are verified in production.

## Generated Public Artifacts

Regenerate from source after the source migration:

- `public/sitemap.xml` from `scripts/generate-sitemap.ts`
- `mcp/catalog.generated.ts` from `scripts/generate-mcp-catalog.ts`
- `src/data/ops.generated.ts` from `scripts/generate-ops-manifest.ts`
- registry files from `scripts/generate-shadcn-registry.ts`

Review generated diffs for stale names, stale counts, invalid URLs, missing new object kinds, and accidental removal of compatibility entries. Never make a generated-file-only fix that will be lost on the next build.

## SEO And Deployment Acceptance

- The production origin serves the approved identity in initial HTML and client-rendered pages.
- Robots, sitemap, manifest, Open Graph, JSON-LD, OpenAPI, and llms metadata agree.
- All public assets load over the approved origin and have valid content types.
- Every old public URL has the approved response, redirect, alias, or deprecation behavior.
- Preview and production Worker deployments use the same documented route contract.
