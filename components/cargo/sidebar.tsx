import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocaleLink from "../locale-link";
import { useTranslations } from "next-intl";

export default function SidebarCargo() {
  const t = useTranslations("Services");
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
        <div className="md:flex">
          <div className="flex md:h-full flex-col justify-between bg-white min-w-72 h-full sticky top-6">
            <div className="pr-8 py-6">
              <ul className="mt-6 space-y-1">
                <li>
                  <LocaleLink
                    href="/services/customclearance"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Custom Clearance
                  </LocaleLink>
                </li>

                <li>
                  <LocaleLink
                    href="/services/freight"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Sea Freight Forwarding
                  </LocaleLink>
                </li>

                <li>
                  <LocaleLink
                    href="/services/trucking"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Trucking
                  </LocaleLink>
                </li>
                <li>
                  <LocaleLink
                    href="/services/cargoinsurance"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Cargo Insurance Brokerage
                  </LocaleLink>
                </li>
                <li>
                  <LocaleLink
                    href="/services/transportation"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Intermodal & Multimodal Transportation
                  </LocaleLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-12 md:pl-8 w-full">
            <Image
              src="/images/cargoo.webp"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              Cargo Insurance Brokerage
            </h1>
            <p>
              {/* Kami menyediakan layanan pengiriman via laut, udara, maupun darat */}
              {t("content-cargo")}
              <br />
              <br />
            </p>
            {/* <Accordion type="single" defaultValue="item-1" collapsible>
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
            </Accordion> */}
          </div>
        </div>
      </div>
    </div>
  );
}
