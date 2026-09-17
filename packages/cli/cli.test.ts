import { afterEach, describe, expect, it } from 'bun:test';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const cli = path.join(import.meta.dir, 'bin', 'bitelemon-ui.mjs');
const directories: string[] = [];

afterEach(async () => {
  await Promise.all(directories.splice(0).map((directory) =>
    rm(directory, { recursive: true, force: true }),
  ));
});

async function runInit(client: string) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'bitelemon-cli-'));
  directories.push(directory);
  const process = Bun.spawn(
    ['node', cli, 'init', '--client', client, '--cwd', directory],
    { stdout: 'pipe', stderr: 'pipe' },
  );
  const exitCode = await process.exited;
  return { directory, exitCode, stderr: await new Response(process.stderr).text() };
}

describe('Bitelemon UI CLI init', () => {
  it('writes a project-scoped Codex HTTP MCP config', async () => {
    const { directory, exitCode } = await runInit('codex');
    expect(exitCode).toBe(0);
    const config = await readFile(path.join(directory, '.codex/config.toml'), 'utf8');
    expect(config).toContain('[mcp_servers.bitelemon]');
    expect(config).toContain('url = "https://mcp.bitelemon.sh/mcp"');
  });

  it('writes Claude and Cursor configs', async () => {
    for (const [client, relativePath] of [
      ['claude', '.mcp.json'],
      ['cursor', '.cursor/mcp.json'],
    ]) {
      const { directory, exitCode } = await runInit(client);
      expect(exitCode).toBe(0);
      const config = JSON.parse(await readFile(path.join(directory, relativePath), 'utf8'));
      expect(config.mcpServers.bitelemon.url).toBe('https://mcp.bitelemon.sh/mcp');
    }
  });

  it('rejects unsupported clients without writing config', async () => {
    const { exitCode, stderr } = await runInit('other');
    expect(exitCode).toBe(1);
    expect(stderr).toContain('codex, claude, or cursor');
  });
});
