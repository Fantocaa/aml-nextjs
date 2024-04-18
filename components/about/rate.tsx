"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";
import CountUp, { useCountUp } from "react-countup";
import Image from "next/image";
import Link from "next/link";

export default function Rate() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);
  return (
    <>
      <div
        className="lg:px-8 relative"
        style={{
          backgroundImage: "url('/images/Frame 2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl px-4 md:px-2 2xl:px-8 mx-auto py-24">
          <div className="absolute inset-0 bg-white opacity-90"></div>
          <div className="flex w-full items-center relative z-10">
            <div
              className=" w-full grid grid-cols-2 md:grid-cols-4 gap-4"
              data-aos="fade-up"
            >
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col md:justify-center md:items-center py-8 md:py-16 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icon/truckinggreen.svg"
                    alt="truckinig"
                    width={48}
                    height={48}
                  />
                  <h1 className="text-2xl md:text-4xl font-bold">
                    +
                    <CountUp
                      end={100}
                      duration={2.75}
                      enableScrollSpy
                      scrollSpyOnce
                    ></CountUp>
                  </h1>
                </div>
                <p className="text-darkpint group-hover:text-white text-sm md:text-xl">
                  Completed Delivery
                </p>
              </div>
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col md:justify-center md:items-center py-8 md:py-16 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icon/truckinggreen.svg"
                    alt="truckinig"
                    width={48}
                    height={48}
                  />
                  <h1 className="text-2xl md:text-4xl font-bold">
                    +
                    <CountUp
                      end={100}
                      duration={2.75}
                      enableScrollSpy
                      scrollSpyOnce
                    ></CountUp>
                  </h1>
                </div>
                <p className="text-darkpint group-hover:text-white text-sm md:text-xl">
                  Completed Delivery
                </p>
              </div>
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col md:justify-center md:items-center py-8 md:py-16 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icon/truckinggreen.svg"
                    alt="truckinig"
                    width={48}
                    height={48}
                  />
                  <h1 className="text-2xl md:text-4xl font-bold">
                    +
                    <CountUp
                      end={100}
                      duration={2.75}
                      enableScrollSpy
                      scrollSpyOnce
                    ></CountUp>
                  </h1>
                </div>
                <p className="text-darkpint group-hover:text-white text-sm md:text-xl">
                  Completed Delivery
                </p>
              </div>
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col md:justify-center md:items-center py-8 md:py-16 gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icon/truckinggreen.svg"
                    alt="truckinig"
                    width={48}
                    height={48}
                  />
                  <h1 className="text-2xl md:text-4xl font-bold">
                    +
                    <CountUp
                      end={100}
                      duration={2.75}
                      enableScrollSpy
                      scrollSpyOnce
                    ></CountUp>
                  </h1>
                </div>
                <p className="text-darkpint group-hover:text-white text-sm md:text-xl">
                  Completed Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
