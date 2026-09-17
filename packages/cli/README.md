# Bitelemon UI CLI

Connect Codex, Claude Code, or Cursor to the free hosted Bitelemon MCP server:

```bash
npx @bitelemon-ui/cli init --client codex
npx @bitelemon-ui/cli init --client claude
npx @bitelemon-ui/cli init --client cursor
```

The command writes a project-scoped MCP configuration. Bitelemon MCP is read-only and does not require an API key.

Install any component returned by MCP or found on Bitelemon UI:

```bash
npx @bitelemon-ui/cli add card-split-accordian
```

For an animated component's theme-token base variant:

```bash
npx @bitelemon-ui/cli add card-split-accordian --base
```

The CLI uses the public Bitelemon shadcn registry, so installed source belongs to your project and can be edited freely.
