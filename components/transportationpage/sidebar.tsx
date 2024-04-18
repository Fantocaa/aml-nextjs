import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarTransport() {
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
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Freight Domestic / International
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/transportation"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-12 md:pl-8 w-full">
            <Image
              src="/images/road.webp"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">Transportation</h1>
            <p>
              Kami menyediakan layanan pengiriman via laut, udara, maupun darat
              <br />
              <br />
            </p>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Air Freight</AccordionTrigger>
                <AccordionContent>
                  Kami juga menyediakan Air Freight yang mencakup penanganan
                  barang kiriman yang sensitif dan membutuhkan layanan secara
                  cepat dan tepat yaitu via udara baik untuk wilayah Domestik
                  ataupun Internasional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Sea Freight</AccordionTrigger>
                <AccordionContent>
                  Kami dapat menyediakan Sea Freight dengan term mulai EXW
                  (Ex-Work), FOB (Free On Board), CNF (Cost & Freight), & CIF
                  (Cost Insurance & Freight) yang mana disesuaikan dengan
                  kebutuhan anda. Freight yang kami sediakan baik untuk
                  pengiriman domestik maupun internasional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Trucking</AccordionTrigger>
                <AccordionContent>
                  Menjadi bagian dari holding{" "}
                  <Link className="underline text-blue-500" href="tako.co.id">
                    PT.TAKO ANUGERAH KOPORASI
                  </Link>{" "}
                  membuat kami memiliki kekuatan armada yang dapat menunjang
                  pengerjaan logistik. Selain komitmen penyediaan trucking
                  trailer, kami juga berpengalaman menangani pengiriman via
                  kereta api.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Multimoda</AccordionTrigger>
                <AccordionContent>
                  Salah satu keunggulan kami sebagai transporter adalah dapat
                  mengatur pengiriman barang secara multimoda (kombinasi jenis
                  transportasi) untuk pengiriman barang hingga ke daerah yang
                  sulit dijangkau oleh transportasi pada umumnya.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
