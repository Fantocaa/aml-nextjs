"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CallButton() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
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
                      src="/icon/wacolor.svg"
                      alt="wa"
                      width={24}
                      height={24}
                    />
                    <button className="text-sm text-gray-800 text-left">
                      HQ Surabaya
                    </button>
                  </div>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=6282322219073"
                  target="__blank"
                >
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-2">
                    {/* <LucideGlobe /> */}
                    <Image
                      src="/icon/wacolor.svg"
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
}
