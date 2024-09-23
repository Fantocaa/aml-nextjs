"use client";

import React, { useState, useEffect } from "react";
import HeaderNavbar from "./header-navbar";
import HeaderNavbarMobile from "./header-navbar-mobile";
import { useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

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
  contact: string;
}

export default function MainNavbar({
  components,
  NavLinks,
  Location,
}: {
  components: ComponentItem[];
  NavLinks: NavLink[];
  Location: Location[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prevPathname, setPrevPathname] = useState("");

  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Tutup sidebar hanya jika path berubah
      if (isOpen) {
        setIsOpen(false);
      }
      // Perbarui prevPathname untuk memantau perubahan berikutnya
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname, isOpen]);

  const transitionDuration = 0.2;

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

  // Jalankan animasi menggunakan Framer Motion controlsl
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <>
      <HeaderNavbar
        toggleMenu={toggleMenu}
        transitionDuration={transitionDuration}
        controls={controls}
        navbarVariants={navbarVariants}
        NavLinks={NavLinks}
        isActive={isActive}
        components={components}
        location={Location}
      />
      {isOpen && (
        <>
          <HeaderNavbarMobile
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            NavLinks={NavLinks}
            location={Location}
          />
        </>
      )}
    </>
  );
}
