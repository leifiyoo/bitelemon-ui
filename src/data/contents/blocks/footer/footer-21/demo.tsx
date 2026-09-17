import Footer21 from "./index";

export default function Footer21Demo() {
  const customSocialLinks = [
    { label: "LINKEDIN", href: "#" },
    { label: "TWITTER", href: "#" },
    { label: "GITHUB", href: "https://github.com/leifiyoo/bitelemon-ui" },
    { label: "BEHANCE", href: "#" },
  ];

  const customLeftLinks = [
    { label: "ABOUT US", href: "#" },
    { label: "UI REGISTRY", href: "#" },
    { label: "DOCUMENTATION", href: "#" },
  ];

  const customRightLinks = [
    { label: "CAREERS", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "SUPPORT", href: "#" },
  ];

  return (
    <div className="flex w-full items-end bg-[#fafafa] dark:bg-[#222222]">
      <Footer21
        brandName="Bitelemon"
        socialLinks={customSocialLinks}
        leftLinks={customLeftLinks}
        rightLinks={customRightLinks}
        description="Premium UI components and building blocks that accelerate developer workflows, enhance visual quality, and build next-generation interfaces."
        buttonText="Get Started"
        buttonLink="#"
        copyright="Bitelemon 2026 @ All rights reserved"
      />
    </div>
  );
}
