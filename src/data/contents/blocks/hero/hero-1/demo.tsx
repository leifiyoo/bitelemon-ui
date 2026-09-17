import Hero1 from "./index";

export default function Hero1Demo() {
  const customNavLinks = [
    { label: "Platform", href: "#", active: true },
    { label: "Solutions", href: "#" },
    { label: "Registry", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  const customSocialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "https://github.com/leifiyoo/bitelemon-ui" },
  ];

  return (
    <div className="bg-background flex min-h-screen w-full flex-col justify-center">
      <Hero1
        brand="Bitelemon"
        navLinks={customNavLinks}
        headline={
          <>
            The registry is the code,
            <br />
            delivery is the speed.
          </>
        }
        ctaLabel="Explore Bitelemon UI"
        ctaHref="#"
        description={"Premium UI components and building blocks that accelerate developers' workflows\n and elevate user experiences to next-generation heights."}
        socialLinks={customSocialLinks}
        signInLabel="Sign in"
        signInHref="#"
      />
    </div>
  );
}
