import LogoIcon from '@/assets/logo-icon';
import { Footer9 } from '.';

export default function Footer9Demo() {
  const socialLinks = [
    { label: 'GitHub', href: '#' },
    { label: 'Figma', href: '#' },
    { label: 'Threads', href: '#' },
    { label: 'Mastodon', href: '#' },
    { label: 'YouTube', href: '#' },
  ];

  const navLinks = [
    { label: 'Studio', href: '#' },
    { label: 'Showcase', href: '#' },
    { label: 'Workflow', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Reach Out', href: '#' },
  ];

  const legalLinks = [
    { label: 'Cookie Settings', href: '#' },
    { label: 'Anti-Spam', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'User Agreement', href: '#' },
    { label: 'Legal Notice', href: '#' },
    { label: 'Responsible Disclosure', href: '#' },
  ];

  return (
    <div className="flex w-full items-center justify-center bg-transparent">
      <Footer9
        heading={'Ready to Build\nSomething Great?'}
        email="hello@example.com"
        emailHref="mailto:hello@example.com"
        backgroundImage="https://assets.bitelemon.sh/footer-9-bg.avif"
        socialLinks={socialLinks}
        brandLogo={
          <a
            href="#"
            className="text-primary-foreground inline-flex items-center gap-2"
          >
          <LogoIcon className="size-8" />
            <span className="text-2xl font-medium">Bitelemon</span>
          </a>
        }
        navLinks={navLinks}
        copyright="© 2026 bitelemon. All rights reserved"
        legalLinks={legalLinks}
      />
    </div>
  );
}
