import React from "react";
import { useLocale, useTranslations } from "next-intl";
import MainNavbar from "./MainNavbar";
import CallButton from "./CallButton";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface NavLink {
  id: number;
  name: string;
  path: string;
}

interface Location {
  location: string;
  career: string;
}

const Navbar = () => {
  const t = useTranslations("Navigation-Bar");
  const locale = useLocale();

  const NavLinks: NavLink[] = [
    { id: 1, name: `${t("home")}`, path: "/" },
    { id: 2, name: `${t("about")}`, path: "/about" },
    { id: 3, name: `${t("service")}`, path: "/services" },
  ];

  const location: Location[] = [
    {
      location: `${t("location")}`,
      career: `${t("career")}`,
    },
  ];

  const components: ComponentItem[] = [
    {
      title: "Domestic Market",
      href: `/${locale}/domestic`,
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "International Market",
      href: `/${locale}/international`,
      description:
        "For sighted users to preview content available behind a link.",
    },
  ];

  return (
    <>
      <MainNavbar
        components={components}
        NavLinks={NavLinks}
        Location={location}
      />
      <CallButton />
    </>
  );
};

export default Navbar;
