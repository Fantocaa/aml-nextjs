import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LocaleLink from "./locale-link";

interface NavLink {
  id: number;
  name: string;
  path: string;
}

interface HeaderNavbarProps {
  NavLinks: NavLink[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderNavbarMobile({
  setIsOpen,
  NavLinks,
}: HeaderNavbarProps) {
  return (
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
        <div className="flex h-screen flex-col justify-between border-e bg-white w-1/2 ">
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <LocaleLink className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image
                  src="/images/amlwhite.png"
                  alt="logo"
                  width={64}
                  height={64}
                  className="w-16 md:w-40"
                />
              </LocaleLink>
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
                <LocaleLink
                  href="/"
                  // onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Home
                </LocaleLink>
              </li>

              <li>
                <LocaleLink
                  href="/about"
                  // onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  About
                </LocaleLink>
              </li>

              <li>
                <LocaleLink
                  href="/services"
                  // onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Services
                </LocaleLink>
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
                      <LocaleLink
                        href="/domestic"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Domestic Market
                      </LocaleLink>
                    </li>

                    <li>
                      <LocaleLink
                        href="/international"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        International Market
                      </LocaleLink>
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
  );
}
