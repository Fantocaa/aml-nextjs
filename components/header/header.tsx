"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-full absolute"
      >
        <CarouselContent className="h-full px-0">
          <CarouselItem className="h-full">
            <Image
              alt="hero"
              src="/images/Frame 2.png"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="hero"
              src="/images/Frame 2.png"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="hero"
              src="/images/Frame 2.png"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
            <CarouselNext /> */}
      </Carousel>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
          <p className="mt-12 mb-4 max-w-lg sm:text-xl/relaxed text-white">
            PT. ANUGERAH MULTI LOGISTIK
          </p>
          <h1 className="text-3xl font-bold sm:text-6xl/tight text-white">
            Reach To All Corners of The World With Us
          </h1>

          <p className="mt-4 max-w-xl sm:text-xl/relaxed text-white">
            Menjadi perusahaan Logistik Export dan Import terbaik yang
            terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan
            dan kepuasan Customer
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/services"
              className="block w-full rounded bg-blueaml-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blueaml-700 focus:outline-none focus:ring active:bg-blueaml-500 sm:w-auto"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
