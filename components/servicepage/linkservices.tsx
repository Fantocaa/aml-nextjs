import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleLink from "../locale-link";

export default function LinkServices() {
  const ServiceLink = [
    {
      name: "Custom Clearance",
      src: "/images/clearance.webp",
      link: "/services/customclearance",
    },
    {
      name: "Sea Freight Forwarding",
      src: "/images/freight.png",
      link: "/services/freight",
    },
    {
      name: "Trucking",
      src: "/images/trucking.png",
      link: "/services/trucking",
    },
    {
      name: "Cargo Insurance Brokerage",
      src: "/images/cargo.webp",
      link: "/services/cargoinsurance",
    },
    {
      name: "Intermodal & Multimodal Transportation",
      src: "/images/trans.png",
      link: "/services/transportation",
    },
  ];

  const t = useTranslations("Services");
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="md:flex justify-between">
          <h1 className="text-3xl font-semibold">{t("content-1")}</h1>
          <p className="max-w-md pt-2 md:pt-0">{t("content-2")}</p>
        </div>
        <div className="grid md:grid-cols-6 mt-4 md:mt-16 gap-4">
          {ServiceLink.map((content, index) => (
            <LocaleLink
              href={content.link}
              className={`group relative block overflow-hidden bg-darkpint rounded-2xl ${
                index >= ServiceLink.length - 2 ? "col-span-3" : "col-span-2"
              }`}
              key={content.name}
            >
              <p className="absolute start-6 bottom-6 z-10 transition font-semibold text-2xl text-white">
                {content.name}
              </p>

              <Image
                src={content.src}
                alt="link"
                className="h-64 w-full object-cover duration-500 group-hover:scale-105 sm:h-96 opacity-90 transition-all group-hover:opacity-30 rounded-2xl"
                width={1080}
                height={1080}
              />
            </LocaleLink>
          ))}
        </div>
      </div>
    </>
  );
}
