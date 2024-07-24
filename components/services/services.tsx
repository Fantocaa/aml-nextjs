import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleLink from "../locale-link";

const Services = () => {
  const t = useTranslations("Services-Home");

  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2">
          <Image
            alt="Ship"
            src="/images/Frame 2.webp"
            className="h-full w-full object-cover object-right-bottom"
            width={500}
            height={500}
          />
          <div className="relative flex items-center bg-darkpint text-white py-8">
            <div className="p-4 sm:p-16 lg:p-16">
              <h2 className="text-2xl font-bold sm:text-3xl">{t("title")}</h2>

              <p className="mt-4 text-gray-300 max-w-xl text-lg">
                {t("subtitle")}
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
              <LocaleLink
                href="/services"
                className="inline-block rounded border border-blueaml-600 bg-blueaml-600 px-4 py-3 text-sm font-medium text-white hover:bg-white hover:text-blueaml-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                {t("button")}
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
