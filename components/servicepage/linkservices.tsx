import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LinkServices() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="md:flex justify-between">
          <h1 className="text-3xl font-semibold">What We Offer</h1>
          <p className="max-w-md pt-2 md:pt-0">
            Provides high quality and comprehensive transportation logistics
            services with the lowest cost
          </p>
        </div>
        <div className="grid md:grid-cols-6 mt-4 md:mt-16 gap-4">
          <Link
            href="/services/customclearance"
            className="group relative block overflow-hidden bg-darkpint col-span-2"
          >
            <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
              Custom Clearance
            </p>

            <Image
              src="/images/clearance.webp"
              alt="link"
              className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30"
              width={1080}
              height={1080}
            />
          </Link>
          <Link
            href="/services/freight"
            className="group relative block overflow-hidden bg-darkpint col-span-2"
          >
            <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
              Sea Freight Forwarding
            </p>

            <Image
              src="/images/freight.png"
              alt="link"
              className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30"
              width={1080}
              height={1080}
            />
          </Link>
          <Link
            href="/services/trucking"
            className="group relative block overflow-hidden bg-darkpint col-span-2"
          >
            <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
              Trucking
            </p>

            <Image
              src="/images/trucking.png"
              alt="link"
              className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30"
              width={1080}
              height={1080}
            />
          </Link>
          <Link
            href="/services/cargoinsurance"
            className="group relative block overflow-hidden bg-darkpint col-span-3"
          >
            <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
              Cargo Insurance Brokerage
            </p>

            <Image
              src="/images/cargo.webp"
              alt="link"
              className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30"
              width={1080}
              height={1080}
            />
          </Link>
          <Link
            href="/services/transportation"
            className="group relative block overflow-hidden bg-darkpint col-span-3"
          >
            <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
              Intermodal & Multimodal Transportation
            </p>

            <Image
              src="/images/trans.png"
              alt="link"
              className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30"
              width={1080}
              height={1080}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
