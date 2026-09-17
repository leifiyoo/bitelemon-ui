# Registry, CLI, MCP, And Agent Surface Instructions

These surfaces form one distribution contract. Migrate them together after identity, taxonomy, and compatibility decisions are approved.

## Registry Generation

The source of truth for installable output is `scripts/generate-shadcn-registry.ts` plus the source content and metadata it reads. Review:

- registry names and IDs
- `public/r/` and `public/registry/` output paths
- `components/watermelon` target paths and aliases
- internal file imports and dependency references
- install commands emitted into MDX, registry JSON, MCP results, and docs
- `scripts/generate-shadcn-registry.test.ts`

Do not edit generated registry JSON by hand. If the registry is still shadcn-compatible, preserve its schema and replace only approved product-specific values. If the protocol is replaced, write the new schema and consumer migration before changing output.

Verify that generated entries can be installed into a clean fixture project. Pay special attention to internal imports: registry output must not rely on files that are omitted from the generated item.

## CLI Migration

Review the package as a public API:

- `packages/cli/package.json`
- `packages/cli/bin/bitelemon-ui.mjs`
- `packages/cli/README.md`
- `packages/cli/cli.test.ts`
- root `package.json`, `bun.lock`, and `bun.lockb`
- `.github/workflows/publish-bitelemon-cli.yml` and related CI workflows

Update package name, binary name, help text, examples, default configuration, MCP URL, registry URL, repository metadata, and publish workflow from the approved identity table. Do not publish or change npm ownership until the package and organization are explicitly approved.

If the old CLI remains supported, define whether it is an npm alias, a wrapper, or a separate deprecated package. Test `init` for every supported client: Codex, Claude, and Cursor.

## MCP Contract

Review these files as a single implementation:

- `mcp/server.ts`
- `mcp/catalog.ts`
- `mcp/catalog.generated.ts`
- `mcp/worker.ts`
- `mcp/catalog.test.ts`
- `mcp/worker.test.ts`
- `worker/site.ts`
- `worker/agent-pages.ts`
- `public/openapi.json`
- `.mcp.json`
- `wrangler.mcp.toml`

For every tool and response verify:

- server and tool descriptions
- catalog kinds and taxonomy labels
- preview, source, registry, and website URLs
- install commands
- dependency and file payloads
- pagination and filtering behavior
- CORS and public endpoint behavior
- read-only and authentication claims
- analytics dataset names and privacy statements

Keep MCP output source-backed. If the new object model adds kinds or changes fields, update the generated catalog, TypeScript types, tool schemas, OpenAPI documentation, and tests together. Resolve the known variant-support gap before declaring install/retrieval compatibility complete.

## Skills And Plugins

Update and test all agent-facing metadata:

- `skills/bitelemon-ui/SKILL.md`
- `.claude-plugin/plugin.json`
- `.codex-plugin/plugin.json`
- `.cursor-plugin/plugin.json`
- `.agents/plugins/marketplace.json`

Check plugin name, display name, description, homepage, repository, keywords, skill paths, MCP endpoint, install instructions, and supported client names. The old product can remain in migration documentation only when the compatibility policy requires it.

## Distribution Acceptance

- A clean consumer can install one representative item for every supported object kind.
- CLI help and init output use the approved identity and URLs.
- MCP discovery, search, retrieval, inspiration, category, and composition tools return new names and valid links.
- Public API docs describe the actual endpoints and response shapes.
- Plugin and skill manifests parse and point to existing files.
- No generated output contains unresolved placeholders or stale canonical URLs.
