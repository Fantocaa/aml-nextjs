import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarFreight() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
        <div className="md:flex">
          <div className="flex md:h-screen flex-col justify-between border-e bg-white min-w-72">
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
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Freight Domestic / International
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/transportation"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-12 md:pl-8 w-full">
            <Image
              src="/images/freight.webp"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover object-center w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              Freight Domestic / International
            </h1>
            <p>
              Jaringan kami juga tersebar di seluruh nusantara & memiliki
              kerjasama dengan agent-agent dari seluruh dunia. Tentunya harga
              yang kami tawarkan akan sangat kompetitif
              <br />
              <br />
              Service dalam Freight Domestic / International yang kami berikan
              bisa meliputi :
              <br />
              <br />
            </p>

            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>INTERNATIONAL X DOMESTIC</AccordionTrigger>
                <AccordionContent>
                  Kami menawarkan jasa pengiriman yang lengkap yaitu door to
                  door. Pengambilan barang dari gudang di negara asal dan
                  dikirimkan dengan di gudang penerima di negara tujuan. Service
                  ini pun dapat dikombinasi baik import dilanjutkan ke
                  pengiriman lokas begitu juga sebaliknya untuk export.
                  <br />
                  <br />
                  Semua pengiriman dapat dilakukan baik menggunakan kapal laut
                  maupun pesawat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>FCL(Full Container Load)</AccordionTrigger>
                <AccordionContent>
                  Kami dapat melayani pengiriman dalam jumlah besar yaitu FCL
                  (Full Container Load) artinya dalam 1 container hanya memiliki
                  1 penerima atau 1 pengiriman barang.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>LCL(Less Container Load)</AccordionTrigger>
                <AccordionContent>
                  LCL (Less Container Load) artinya pengiriman dalam jumlah
                  kecil biasanya perhitungan dalam kubikasi volume / berat
                  tonase
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
