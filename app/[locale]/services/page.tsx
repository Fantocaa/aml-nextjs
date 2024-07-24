import React from "react";
import Header from "@/components/servicepage/header";
import LinkServices from "@/components/servicepage/linkservices";
import Specialist from "@/components/specialist/specialist";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataServices" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Services = () => {
  return (
    <>
      <Header />
      <LinkServices />
      {/* <Specialist /> */}
    </>
  );
};

export default Services;
