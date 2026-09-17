# Identity And Decisions

This document records the approved identity for the first migration pass. The product and GitHub values below are approved by the owner. The `bitelemon.sh` domain and derived subdomains are target values pending DNS acquisition and deployment verification. Values in double braces remain unresolved and must not reach a release.

## Required Identity Table

| Key | Approved value | Required format or example |
| --- | --- | --- |
| `BRAND_NAME` | `Bitelemon UI` | Public product name |
| `BRAND_SHORT_NAME` | `Bitelemon` | Short label used in navigation and compact metadata |
| `BRAND_SLUG` | `bitelemon-ui` | Lowercase URL-safe slug |
| `REPOSITORY_NAME` | `bitelemon-ui` | Target Git repository name |
| `GITHUB_ORG` | `leifiyoo` | GitHub user or organization |
| `WEBSITE_ORIGIN` | `https://bitelemon.sh` | Target origin, pending acquisition |
| `ASSET_ORIGIN` | `https://assets.bitelemon.sh` | Target public asset origin |
| `REGISTRY_ORIGIN` | `https://registry.bitelemon.sh` | Target public registry origin |
| `MCP_ORIGIN` | `https://mcp.bitelemon.sh` | Target public MCP origin |
| `NPM_SCOPE` | `@bitelemon-ui` | Target npm scope, pending availability |
| `CLI_PACKAGE` | `@bitelemon-ui/cli` | Target full npm package name |
| `CLI_BINARY` | `bitelemon-ui` | Target executable name |
| `MCP_CONFIG_KEY` | `bitelemon` | Key used in `.mcp.json` and CLI config |
| `GITHUB_REPOSITORY_URL` | `https://github.com/leifiyoo/bitelemon-ui` | Target repository URL |
| `SOCIAL_X_URL` | `https://x.com/leifiyoo` | Target social URL, pending account confirmation |
| `SUPPORT_EMAIL` | `none` | Use the public GitHub issues URL until an owner mailbox is approved |
| `LEGAL_ENTITY` | `Leifiyo` | Legal owner name |
| `ANALYTICS_DATASET` | `bitelemon_mcp_events` | Target Cloudflare Analytics Engine dataset |

The old Watermelon name is retained only in this migration documentation and factual source-history or legal attribution where required. It is not retained in new public product copy, canonical URLs, install commands, generated catalog output, or runtime responses.

## Taxonomy Decision

Record the approved names and slugs for every public object type. Do not rename these independently in different layers.

| Current object | New display name | New route segment | New content directory | New API/MCP kind | Keep as alias? |
| --- | --- | --- | --- | --- | --- |
| components | Components | `components` | `src/data/contents/components` | `components` | no |
| animated components | Animated Components | `animated-components` | `src/data/contents/animated-components` | `animated-components` | no |
| blocks | UI Blocks | `blocks` | `src/data/contents/blocks` | `blocks` | no |
| dashboards | Dashboards | `dashboards` | `src/data/contents/dashboards` | `dashboards` | no |
| templates | Templates | `templates` | `src/data/contents/templates` | `templates` | no |
| showcases | Showcases | `showcases` | `src/data/contents/showcases` | `showcases` | no |

If new object types are required, append rows and define their source format, metadata, loader, route, preview, installability, sitemap inclusion, API representation, MCP tools, and tests in `02-content-model-and-ui.md`.

## Compatibility Decisions

Choose one policy per surface and record an owner and sunset date.

| Surface | No compatibility | Redirect or alias | Keep old surface indefinitely | Decision |
| --- | --- | --- | --- | --- |
| `ui.watermelon.sh` pages |  |  |  | Redirect or alias to `https://bitelemon.sh`, after DNS/control is available |
| `registry.watermelon.sh` install URLs |  |  |  | New install URLs only; old references are removed from content |
| `mcp.watermelon.sh/mcp` |  |  |  | New endpoint only; old endpoint is not controlled by this repository |
| `@watermelon-ui/cli` package |  |  |  | New package only; old npm package is not controlled here |
| `watermelon-ui` CLI binary |  |  |  | New binary `bitelemon-ui` |
| `.mcp.json` key `watermelon` |  |  |  | New key `bitelemon` |
| GitHub repository URL |  |  |  | Target `https://github.com/leifiyoo/bitelemon-ui` |
| old asset URLs |  |  |  | New asset origin; old assets are not assumed available |

For every alias or redirect define status code, target, deprecation headers, sunset date, and test coverage. Registry URLs are install inputs, so a redirect must be tested with the actual shadcn client or an explicitly supported client.

## shadcn Decision

Select exactly one:

- `retain`: shadcn remains the installation protocol and technical dependency; only the product identity and registry origin change.
- `fork-compatible`: the project exposes a new branded installer while accepting the shadcn schema and preserving interoperability.
- `replace`: a new schema and installer are introduced; migration instructions must define the replacement protocol and a plan for existing consumers.

Decision: `retain`

This decision controls `components.json`, installation prose, registry JSON, `packages/cli`, generator names, MCP tool output, tests, and all docs. Do not remove the `shadcn` term merely because it is visible in the current product.

## UI Direction Decision

Before changing styles, record:

- design adjectives to preserve and to remove
- typography family and loading strategy
- light and dark color tokens with contrast targets
- border, radius, shadow, spacing, and motion rules
- logo and favicon direction
- responsive breakpoints and mobile restrictions
- examples of pages that define the new visual language

Decision for this pass: preserve the existing visual system while completing the identity migration. A separate visual redesign brief is required before changing typography, palette, spacing, motion, or layout semantics. Existing Lime primary tokens and Orange OG metadata remain baseline details until that brief is approved.

## Approval Checklist

- [x] Product identity, GitHub owner, legal owner, target domains, package, and CLI values are recorded.
- [x] The taxonomy table is complete for the current object types; no new object types are introduced in this pass.
- [x] Compatibility policy is recorded for every public surface within repository control.
- [x] shadcn policy is selected: retain.
- [x] UI direction is recorded for this pass: preserve existing visual system.
- [x] Legal owner is recorded as `Leifiyo`; historical source attribution remains documented in the migration files.
- [ ] `bitelemon.sh` and subdomain DNS are acquired and configured.
- [ ] npm scope availability and organization ownership are confirmed.
- [x] GitHub target owner is `leifiyoo`; repository transfer or creation remains an external operation.
- [ ] Cloudflare, asset storage, and deployment secrets are configured.
