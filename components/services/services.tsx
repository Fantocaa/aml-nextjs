"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="h-full"
          >
            <CarouselContent className="h-full">
              <CarouselItem className="h-full">
                <Image
                  alt=""
                  src="/images/Frame 2.webp"
                  className="h-full w-full object-cover object-right-bottom"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  alt=""
                  src="/images/Frame-237.webp"
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  alt=""
                  src="/images/Frame-238 (1).webp"
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>

          <div className="relative flex items-center bg-darkpint text-white py-8">
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> */}

            <div className="p-4 sm:p-16 lg:p-16">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Services</h2>

              <p className="mt-4 text-gray-300">
                Pelayanan unggul kami mencakup segala kebutuhan Anda, dari
                pengiriman cepat hingga layanan konsultasi yang komprehensif.
              </p>
              <div className="grid grid-cols-8 py-8 w-full gap-4">
                <div className="flex items-center gap-2 col-span-3">
                  <Image
                    src="/icon/clearance.svg"
                    alt=""
                    width={32}
                    height={32}
                    // className="w-6 h-6"
                  />
                  <h1>Custom Clearance</h1>
                </div>
                <div className="flex items-center gap-2 col-span-4">
                  <Image
                    src="/icon/transportation.svg"
                    alt=""
                    width={32}
                    height={32}
                    // className="w-6 h-6"
                  />
                  <h1>Transportation</h1>
                </div>
                <div className="flex items-center gap-2 col-span-3">
                  <Image
                    src="/icon/trucking.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <h1>Trucking</h1>
                </div>
                <div className="flex items-center gap-2 col-span-5">
                  <Image
                    src="/icon/freight.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <h1>Freight Domestic / International</h1>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-block rounded border border-blueaml-600 bg-blueaml-600 px-4 py-3 text-sm font-medium text-white hover:bg-white hover:text-blueaml-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
