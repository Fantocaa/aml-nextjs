import React from "react";
import { LucideMail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useAnimation,
  AnimationControls,
  Variants,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LocalSwitcher from "./local-switcher";
import { cn } from "@/lib/utils";
import LocaleLink from "./locale-link";

interface NavLink {
  id: number;
  name: string;
  path: string;
}

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface Location {
  location: string;
  career: string;
}

interface HeaderNavbarProps {
  toggleMenu: () => void;
  controls: AnimationControls;
  transitionDuration: number;
  navbarVariants: Variants;
  NavLinks: NavLink[];
  isActive: (path: string) => boolean;
  components: ComponentItem[];
  location: Location[];
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function HeaderNavbar({
  toggleMenu,
  transitionDuration,
  controls,
  navbarVariants,
  NavLinks,
  isActive,
  components,
  location,
}: HeaderNavbarProps) {
  return (
    <>
      <header>
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm"
          initial="visible"
          animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex items-center justify-between py-2 2xl:py-4">
              <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/images/aml.png"
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-darkpint focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                  {NavLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                      <LocaleLink
                        href={link.path}
                        className={isActive(link.path) ? "active" : ""}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(link.path)
                              ? "active bg-greenaml-100 hover:bg-greenaml-200 font-semibold"
                              : "font-medium bg-transparent text-darkpint"
                          }`}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </LocaleLink>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium bg-transparent text-darkpint">
                      {location[0].location}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4 md:w-[500px] lg:w-[200px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="https://karier.tako.co.id/"
                      passHref
                      target="__blank"
                    >
                      <h1 className="font-medium text-sm bg-transparent text-darkpint ">
                        {location[0].career}
                      </h1>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="md:flex items-center gap-4 hidden">
                <div className="sm:flex sm:gap-2 items-center">
                  <LocalSwitcher />
                  <LocaleLink href="/contact">
                    <Button
                      variant="secondary"
                      className="bg-greenaml-100 hover:bg-greenaml-200"
                    >
                      <div className="flex gap-2 items-center">
                        <LucideMail />
                        <h1>Hubungi Kami</h1>
                      </div>
                    </Button>
                  </LocaleLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
