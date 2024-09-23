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

export default function HeaderCarousel() {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-[75dvh] md:h-[83dvh] lg:h-full absolute"
      >
        <CarouselContent className="h-full -ml-0">
          <CarouselItem className="h-full pl-0">
            <Image
              alt="hero"
              src="/images/Frame 2.webp"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              alt="hero"
              src="/images/Frame-235 (1).webp"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              alt="hero"
              src="/images/Frame-234 (1).webp"
              className="h-full w-full object-cover"
              width={2560}
              height={2560}
            />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </>
  );
}
