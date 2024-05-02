"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideMail } from "lucide-react";
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

const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Domestic Market",
    href: "/domestic",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "International Market",
    href: "/international",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  // { id: 4, name: "Tracking", path: "/tracking" },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Periksa apakah arah scroll berubah
      if (isScrollingDown && isVisible) {
        setIsVisible(false); // Sembunyikan navbar jika sedang digulir ke bawah
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true); // Tampilkan navbar jika sedang digulir ke atas
      }
      setPrevScrollPos(currentScrollPos); // Simpan posisi scroll saat ini
    };

    // Tambahkan event listener untuk meng-handle scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  // Variabel untuk mengatur durasi animasi
  const transitionDuration = 0.2;

  // Variabel untuk mengatur animasi navbar saat muncul atau menghilang
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Jalankan animasi menggunakan Framer Motion controlsl
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

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
                      <Link
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
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  {/* Menyisipkan komponen "Location" di antara "Services" dan "Careers" */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium bg-transparent text-darkpint">
                      Location
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
                  {/* Menambahkan "Careers" setelah "Location" */}
                  <NavigationMenuItem>
                    <Link
                      href="https://karier.tako.co.id/"
                      passHref
                      target="__blank"
                    >
                      <h1 className="font-medium text-sm bg-transparent text-darkpint ">
                        Careers
                      </h1>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="md:flex items-center gap-4 hidden">
                <div className="sm:flex sm:gap-4">
                  <Link href="/contact">
                    <Button
                      variant="secondary"
                      className="bg-greenaml-100 hover:bg-greenaml-200"
                    >
                      <div className="flex gap-2 items-center">
                        <LucideMail />
                        <h1>Hubungi Kami</h1>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed inset-0 overflow-hidden z-50"
          >
            {/* <div className="relative w-64 h-full bg-blueaml-500 shadow-xl">
              <div className="flex items-center justify-between p-4 py-[18px] border-b border-gray-200">
                <Link className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/images/amlwhite.png"
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-16 md:w-40"
                  />
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4">
                <Link
                  href="/"
                  className="flex items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12h18M3 6h18M3 18h18"
                    />
                  </svg>
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                    />
                    <circle cx="10.5" cy="7" r="4" />
                  </svg>
                  About
                </Link>
                <Link
                  href="/services"
                  className="flex items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  Services
                </Link>
                <Link
                  href="https://karier.tako.co.id/"
                  className="flex items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  Careers
                </Link>
              </nav>
            </div> */}

            <div className="flex h-screen flex-col justify-between border-e bg-white w-1/2 ">
              <div className="px-4 py-6">
                <div className="flex justify-between">
                  <Link className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <Image
                      src="/images/amlwhite.png"
                      alt="logo"
                      width={64}
                      height={64}
                      className="w-16 md:w-40"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-darkpint"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      href="/"
                      // className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium"> Location </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <ul className="mt-2 space-y-1 px-4">
                        <li>
                          <Link
                            href="/domestic"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Domestic Market
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/international"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            International Market
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link
                      href="https://karier.tako.co.id/"
                      target="__blank"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}

      <div className="fixed z-50 bottom-10 right-4 md:right-10 2xl:right-24">
        <div className="relative">
          <button
            className="rounded-full py-6 px-5 bg-green-500 shadow-xl hover:bg-green-300"
            onClick={toggleDropdown}
          >
            <Image
              src="/images/call-calling.svg"
              alt="telp"
              width={24}
              height={24}
              className="mr-2 "
            />
          </button>
          {showDropdown && (
            <div className="absolute bottom-20 right-0 py-2 w-48 bg-white rounded-lg shadow-xl">
              <div className="py-1">
                <Link href="https://wa.link/j9utdx" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-2">
                    {/* <LucideGlobe /> */}
                    <Image
                      src="icon/wacolor.svg"
                      alt="wa"
                      width={24}
                      height={24}
                    />
                    <button className="text-sm text-gray-800 text-left">
                      HQ Surabaya
                    </button>
                  </div>
                </Link>
                <Link href="https://wa.link/8ocpit" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-2">
                    {/* <LucideGlobe /> */}
                    <Image
                      src="icon/wacolor.svg"
                      alt="wa"
                      width={24}
                      height={24}
                    />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Semarang
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
