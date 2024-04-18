"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Jalankan animasi menggunakan Framer Motion controls
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <Link href="/">
                        <Button
                          variant="link"
                          className="text-darkpint hover:text-greenaml-500/75"
                        >
                          Home
                        </Button>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about">
                        <Button
                          variant="link"
                          className="text-darkpint hover:text-greenaml-500/75"
                        >
                          About
                        </Button>
                      </Link>
                    </li>

                    <li>
                      <Link href="/services">
                        <Button
                          variant="link"
                          className="text-darkpint hover:text-greenaml-500/75"
                        >
                          Services
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="md:flex items-center gap-4 hidden">
                <div className="sm:flex sm:gap-4">
                  <Link href="https://wa.link/j9utdx" target="_blank">
                    <Button
                      variant="secondary"
                      className="bg-greenaml-100 hover:bg-greenaml-200"
                    >
                      <Image
                        src="/images/call-calling.svg"
                        alt="telp"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      Hubungi Kami
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
            className="fixed inset-0 bg-black bg-opacity-50 z-40" // Pastikan z-index lebih rendah dari sidebar
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed inset-0 overflow-hidden z-50"
          >
            <div className="relative w-64 h-full bg-blueaml-500 shadow-xl">
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
              </nav>
            </div>
          </motion.div>
        </>
      )}
      <Link href="https://wa.link/j9utdx" target="_blank" className="md:hidden">
        <Button className="fixed z-50 bottom-10 right-4 rounded-full py-8 bg-green-500 shadow-xl hover:bg-green-300">
          {/* <Button variant="secondary"> */}
          <Image
            src="/images/call-calling.svg"
            alt="telp"
            width={24}
            height={24}
            className="mr-2"
          />
          {/* </Button> */}
        </Button>
      </Link>

      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
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
