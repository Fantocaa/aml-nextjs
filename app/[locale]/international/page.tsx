import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "International Market | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
//   description:
//     "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
// };

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataHome" });

  return {
    title: t("international-meta"),
    description: t("description"),
  };
}

export default function International() {
  const t = useTranslations("MetadataHome");
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="bg-bgwhiteaml w-full py-8 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold text-center ">
            <span className="text-blueaml-600">International </span>Market
          </h1>
          <p className="text-center max-w-2xl">{t("international")}</p>
          <Image
            src="/images/PETA AML INTER.gif"
            alt="map"
            width={1440}
            height={1440}
            className="pt-12"
          />
        </div>
      </div>
    </>
  );
}
