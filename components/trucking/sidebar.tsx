import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarTrucking() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
        <div className="md:flex">
          <div className="flex md:h-full flex-col justify-between bg-white min-w-72 h-full sticky top-6">
            <div className="pr-8 py-6">
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    href="/services/customclearance"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Custom Clearance
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/freight"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Sea Freight Forwarding
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/trucking"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Trucking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cargoinsurance"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Cargo Insurance Brokerage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/transportation"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Intermodal & Multimodal Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-12 md:pl-8 w-full border-l">
            <Image
              src="/images/trucking.png"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover object-center w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">Trucking</h1>
            <p>
              In order to complete our range of total logistic service provider,
              Uniair Cargo offers a full range of trucking services to our
              customers from and to major cities in Java Island, and also in
              other cities outside Java Island.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
