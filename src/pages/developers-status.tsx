import { SEOHead } from '@/components/seo-head';
import {
  DocPage,
  DocHeader,
  DocSection,
  DocText,
  DocCard,
} from '@/components/docs';
import { opsMetadata } from '@/data/ops.generated';

const platformChecks = [
  {
    label: 'Website',
    href: 'https://bitelemon.sh/home',
    value: 'Public docs and catalog UI',
  },
  {
    label: 'Developers',
    href: 'https://bitelemon.sh/developers',
    value: 'Developer entry point',
  },
  {
    label: 'API status',
    href: 'https://bitelemon.sh/api/v1/status',
    value: 'Machine-readable platform metadata',
  },
  {
    label: 'OpenAPI',
    href: 'https://bitelemon.sh/openapi.json',
    value: 'HTTP contract',
  },
  {
    label: 'llms.txt',
    href: 'https://bitelemon.sh/llms.txt',
    value: 'Agent overview',
  },
  {
    label: 'Sitemap',
    href: 'https://bitelemon.sh/sitemap.xml',
    value: 'Public URL inventory',
  },
];

const mcpChecks = [
  {
    label: 'Discovery root',
    href: 'https://mcp.bitelemon.sh/',
    value: 'Remote MCP metadata',
  },
  {
    label: 'Health',
    href: 'https://mcp.bitelemon.sh/health',
    value: 'Read-only MCP health signal',
  },
  {
    label: 'llms.txt',
    href: 'https://mcp.bitelemon.sh/llms.txt',
    value: 'Short MCP overview',
  },
  {
    label: 'MCP endpoint',
    href: 'https://mcp.bitelemon.sh/mcp',
    value: 'Streamable HTTP transport',
  },
];

export default function DevelopersStatusPage() {
  return (
    <>
      <SEOHead
        title="Bitelemon UI Status & Integrations"
        description="Operational overview for Bitelemon UI and Bitelemon MCP, including version metadata, public endpoints, and ChatGPT/Claude connection guidance."
        keywords="bitelemon ui status, bitelemon ui mcp, chatgpt mcp, claude mcp, bitelemon api status"
      />

      <DocPage>
        <DocHeader
          title="Bitelemon UI Status & Integrations"
          description="A small ops surface for the public platform and hosted MCP endpoints."
        />

        <DocSection title="Current Build">
          <DocCard className="space-y-3">
            <DocText className="max-w-none">
              <strong>Product:</strong> Bitelemon UI
              <br />
              <strong>Package version:</strong> {opsMetadata.packageVersion}
              <br />
              <strong>Branch:</strong> {opsMetadata.branch}
              <br />
              <strong>Source revision:</strong>{' '}
              <code>{opsMetadata.shortSha}</code>
              <br />
              <strong>Last source commit:</strong> {opsMetadata.committedAt}
              <br />
              <strong>Last generated build metadata:</strong>{' '}
              {opsMetadata.generatedAt}
            </DocText>
            <DocText>
              This page intentionally shows source and build metadata instead of
              a guessed uptime percentage. For machine-readable status, use{' '}
              <a
                href="/api/v1/status"
                className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
              >
                /api/v1/status
              </a>
              . For MCP runtime health, use{' '}
              <a
                href="https://mcp.bitelemon.sh/health"
                className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
              >
                mcp.bitelemon.sh/health
              </a>
              .
            </DocText>
          </DocCard>
        </DocSection>

        <DocSection title="Platform Endpoints">
          <DocCard className="space-y-4">
            {platformChecks.map((check) => (
              <DocText key={check.href} className="max-w-none">
                <a
                  href={check.href}
                  className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
                >
                  {check.label}
                </a>{' '}
                {check.value}
              </DocText>
            ))}
          </DocCard>
        </DocSection>

        <DocSection title="MCP Endpoints">
          <DocCard className="space-y-4">
            {mcpChecks.map((check) => (
              <DocText key={check.href} className="max-w-none">
                <a
                  href={check.href}
                  className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
                >
                  {check.label}
                </a>{' '}
                {check.value}
              </DocText>
            ))}
          </DocCard>
        </DocSection>

        <DocSection title="Connect From ChatGPT Or Claude">
          <DocText>
            If your ChatGPT or Claude client supports remote MCP, add a new MCP
            server and use <code>https://mcp.bitelemon.sh/mcp</code> as the
            server URL. Once connected, ask the model to call{' '}
            <code>catalog_summary</code>, <code>list_catalog_entries</code>, or{' '}
            <code>get_catalog_entry</code> instead of scraping the site
            manually.
          </DocText>
          <DocText>
            If your client only supports local MCP servers, clone{' '}
            <a
              href="https://github.com/leifiyoo/bitelemon-ui"
              className="bg-muted rounded-sm px-2 py-px text-black dark:text-white"
            >
              bitelemon-ui
            </a>{' '}
            and run <code>bun run mcp</code> from the repository root. That
            local mode is better when you want source-aware development
            workflows or to test changes before deployment.
          </DocText>
        </DocSection>
      </DocPage>
    </>
  );
}
