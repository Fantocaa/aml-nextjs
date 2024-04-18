"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import CountUp, { useCountUp } from "react-countup";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Specialist() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  // useCountUp({
  //   ref: "counter",
  //   end: 1234567,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });

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
          <div className="md:flex w-full items-center relative z-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold max-w-md text-darkpint">
                Specialist for transportation.
              </h1>
              <p className="py-4 max-w-md text-gray-500">
                We provide comprehensive transportation services for our
                partners on the globe and always offer innovative solutions to
                deal with complex logistics challenges.
              </p>
              <Link href="/about">
                <Button className="bg-blueaml-500 text-white hover:bg-white hover:text-blueaml-500 hover:border hover:border-blueaml-500">
                  About Us
                </Button>
              </Link>
            </div>
            <div
              className="md:w-1/2 grid grid-cols-2 gap-4 pt-8"
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
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col justify-center items-center py-8 md:py-16 gap-2">
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
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col justify-center items-center py-8 md:py-16 gap-2">
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
              <div className="bg-white hover:bg-darkpint hover:text-white group transition-colors rounded-xl p-4 flex flex-col justify-center items-center py-8 md:py-16 gap-2">
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
