# Content Model And UI Instructions

This phase defines how the new library names its objects and how those objects appear in the website. It must follow the taxonomy approved in `00-identity-and-decisions.md`.

## Current Content Architecture

The current platform combines file-based source with derived metadata:

- `src/data/contents/animated-components/<slug>/` contains animated component source folders.
- `src/data/contents/registry/<slug>.mdx` contains installable animated-component metadata.
- `src/data/contents/components/<category>/` contains base component source and `config.ts` metadata.
- `src/data/contents/blocks/<category>/<slug>/` contains block source and colocated MDX metadata.
- `src/data/contents/dashboards/<slug>/` contains dashboard source and colocated MDX metadata.
- `src/data/contents/templates/<slug>/` contains template source and colocated MDX metadata.
- `src/data/contents/showcases/*.mdx` describes compositions using ordered `sections` and `blockSlug` references.
- `src/data/animated-components-metadata.ts`, `block-metadata.ts`, `dashboard-metadata.ts`, and `showcase-metadata.ts` expose derived metadata to the app.
- `src/data/animated-components-registry.tsx`, `components-registry.ts`, `blocks.tsx`, `dashboards.tsx`, `templates.tsx`, and `showcases.tsx` expose runtime registries.

Preserve this source-versus-derived distinction unless the approved object model intentionally replaces it.

## New Object Contract

For every new or renamed object type, document and implement all of the following:

- canonical type name and API/MCP `kind`
- display label and plural label
- lowercase route segment and route parameter format
- source directory and metadata file format
- required and optional frontmatter fields
- runtime loader and derived metadata module
- preview component and skeleton behavior
- search and command-palette indexing
- sidebar and breadcrumb placement
- sitemap inclusion and canonical URL format
- installability and dependency representation
- public API and MCP representation
- ownership, attribution, and deprecation fields
- focused tests and fixture requirements

Do not create an object type that is only visible in one page. It must be represented consistently across discovery, preview, metadata, machine-readable output, and tests.

## Metadata And Slug Rules

- Keep directory name, frontmatter `slug`, route slug, generated registry name, and installation ID aligned unless a deliberate alias is recorded.
- Use URL-safe lowercase slugs. Do not encode the old brand into new object IDs.
- Keep titles and descriptions user-facing; keep slugs and IDs stable machine-facing values.
- For a rename, define old-to-new mapping, redirect behavior, and whether generated install files retain the old filename.
- For a split or merge, define whether old entries redirect, become aliases, or are removed, and update search counts and sitemap output accordingly.
- Update frontmatter examples in `CONTRIBUTING.md` and all content authoring instructions when the schema changes.

## Route And Navigation Work

Audit these files together so links do not drift:

- `src/components/layout/app-routes.tsx`
- `src/components/layout/navbar.tsx`
- `src/components/layout/app-sidebar.tsx`
- `src/components/layout/command-palette.tsx`
- `src/components/layout/page-header.tsx`
- `src/components/layout/catalog-page-header.tsx`
- `src/pages/components.tsx`, `component-category.tsx`
- `src/pages/animated-components.tsx`, `animated-category.tsx`, `animated-component.tsx`
- `src/pages/blocks.tsx`, `block-category.tsx`, `block.tsx`
- `src/pages/dashboards.tsx`, `dashboard.tsx`
- `src/pages/templates.tsx`, `template.tsx`
- `src/pages/showcases.tsx`, `showcase.tsx`

For every renamed route verify direct navigation, refresh behavior, not-found behavior, breadcrumbs, active sidebar state, command-palette results, internal links, and generated sitemap entries.

## UI Migration Rules

1. Update shared tokens and app-shell primitives before individual content demos.
2. Keep a single visual language across catalog cards, docs, previews, empty states, loading states, and error states.
3. Verify contrast, focus visibility, keyboard navigation, reduced motion, and touch targets.
4. Test narrow mobile layouts, especially dashboards, blocks, code panes, sidebars, tables, and template previews.
5. Avoid changing component source merely to make the gallery look different. Keep showcase styling and library source concerns separate.
6. If an existing component is replaced by a new object, preserve a source-backed preview and a deterministic install/retrieval path.

## Content Acceptance

- Every catalog item has valid metadata and a working preview.
- Every internal reference resolves to an existing object.
- Every showcase `blockSlug` resolves after taxonomy changes.
- Every installable item has valid dependencies, files, and a generated registry item when supported.
- No accidental Watermelon identity remains in visible new-brand copy.
- Intentional attribution and historical references are documented in the inventory.
