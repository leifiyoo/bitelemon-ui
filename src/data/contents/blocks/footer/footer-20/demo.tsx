import Footer20 from "./index";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook02Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export default function Footer20Demo() {
  const customLinks = {
    good: [
      { label: "Home", href: "#" },
      { label: "UI Registry", href: "#" },
      { label: "Platform Docs", href: "#" },
      { label: "Careers", href: "#" },
    ],
    boring: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Help Center", href: "#" },
    ],
    cool: [
      { label: "GitHub", href: "https://github.com/leifiyoo/bitelemon-ui" },
      { label: "LinkedIn", href: "#" },
      {
        label: "Facebook",
        href: "#",
        icon: <HugeiconsIcon icon={Facebook02Icon} size={20} />,
      },
      {
        label: "Twitter",
        href: "#",
        icon: <HugeiconsIcon icon={NewTwitterIcon} size={20} />,
      },
    ],
  };

  return (
    <div className="flex w-full items-end bg-[#f4f4f2] dark:bg-[#0a0a0a]">
      <Footer20
        brandName="Bitelemon"
        description="Premium UI components and building blocks that accelerate developers' workflows and elevate user experiences."
        email="hello@example.com"
        links={customLinks}
      />
    </div>
  );
}
