"use client";

import React, { useEffect } from "react";
import CountUp, { useCountUp } from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Countup() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
    });

    // useCountUp({
    //   ref: "counter",
    //   end: 1234567,
    //   enableScrollSpy: true,
    //   scrollSpyDelay: 1000,
    // });
  }, []);
  return (
    <>
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
    </>
  );
}
