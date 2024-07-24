import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocaleLink from "../locale-link";
import { useTranslations } from "next-intl";

export default function SidebarFreight() {
  const t = useTranslations("Services");
  return (
    <>
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
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
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
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
          <div className="py-12 md:pl-8 w-full border-l">
            <Image
              src="/images/freight.webp"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover object-center w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              Sea Freight Forwarding
            </h1>
            <p>
              {/* Jaringan kami juga tersebar di seluruh nusantara & memiliki
              kerjasama dengan agent-agent dari seluruh dunia. Tentunya harga
              yang kami tawarkan akan sangat kompetitif */}
              {t("content-sea-1")}
              <br />
              <br />
              {/* Service dalam Freight Domestic / International yang kami berikan
              bisa meliputi : */}
              {t("content-sea-2")}
              <br />
              <br />
            </p>

            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  International & Domestic Freight Forwarding
                </AccordionTrigger>
                <AccordionContent>
                  {/* Kami menawarkan jasa pengiriman yang lengkap yaitu door to
                  door. Pengambilan barang dari gudang di negara asal dan
                  dikirimkan dengan di gudang penerima di negara tujuan. Service
                  ini pun dapat dikombinasi baik import dilanjutkan ke
                  pengiriman lokas begitu juga sebaliknya untuk export. */}
                  {t("content-sea-3")}
                  <br />
                  <br />
                  {/* Semua pengiriman dapat dilakukan baik menggunakan kapal laut
                  maupun pesawat. */}
                  {t("content-sea-4")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>LCL & FCL Services</AccordionTrigger>
                <AccordionContent>
                  {/* Kami dapat melayani pengiriman dalam jumlah besar yaitu FCL
                  (Full Container Load) artinya dalam 1 container hanya memiliki
                  1 penerima atau 1 pengiriman barang. */}
                  {t("content-sea-5")}
                  <br />
                  <br />
                  {/* Selain itu kami juga melayani LCL (Less Container Load)
                  artinya pengiriman dalam jumlah kecil biasanya perhitungan
                  dalam kubikasi volume / berat tonase */}
                  {t("content-sea-6")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Dangerous Goods Handling</AccordionTrigger>
                <AccordionContent>{t("content-sea-7")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Break Bulk Cargo</AccordionTrigger>
                <AccordionContent>{t("content-sea-8")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Consolidated Ocean Freight</AccordionTrigger>
                <AccordionContent>{t("content-sea-9")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Door to Seaport</AccordionTrigger>
                <AccordionContent>{t("content-sea-10")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
