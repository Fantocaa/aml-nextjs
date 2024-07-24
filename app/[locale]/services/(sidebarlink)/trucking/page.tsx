import React from "react";
import Header from "@/components/trucking/header";
import SidebarTrucking from "@/components/trucking/sidebar";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataAbout" });

  return {
    title:
      "Trucking | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
    description: t("description"),
  };
}

export default function Trucking() {
  return (
    <>
      <Header />
      <SidebarTrucking />
    </>
  );
}
