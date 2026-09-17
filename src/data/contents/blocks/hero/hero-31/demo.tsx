import Hero31 from './index';

export default function Demo() {
  return (
    <div className="h-screen w-full">
      <Hero31
        logoText="Bitelemon"
        navItems={['Product', 'About Us', 'Features', 'FAQ', 'Contact']}
        signUpText="Sign up"
        title="Innovation that Drives Impact."
        subtitle="Bitelemon empowers teams to build, scale, and transform with technology that drives real results."
        ctaText="Request a Demo"
        trustedByText="TRUSTED BY AMBITIOUS TEAMS"
        backgroundImage="https://assets.bitelemon.sh/hero-31-bg.avif"
      />
    </div>
  );
}
