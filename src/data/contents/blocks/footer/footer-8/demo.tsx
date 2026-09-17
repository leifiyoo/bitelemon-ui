import { Footer8 } from '.';

export default function Footer8Demo() {
  const linkColumns = [
    {
      links: [
        { label: 'About', href: '#' },
        { label: 'Work', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Testimonials', href: '#' },
      ],
    },
    {
      links: [
        { label: 'Linkedin', href: '#' },
        { label: 'X (Twitter)', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ];

  return (
    <div className="bg-background flex w-full items-center justify-center">
      <Footer8
        tagline="Let's build something great"
        email="contact@example.com"
        emailHref="mailto:contact@example.com"
        backgroundImage="https://assets.bitelemon.sh/footer-8-bg.avif"
        personInfo={{
          name: 'Elena Vasquez',
          role: 'Creative Director',
          location: 'Brooklyn, NY',
        }}
        linkColumns={linkColumns}
        copyright="© 2026 Bitelemon"
      />
    </div>
  );
}
