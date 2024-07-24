import React from "react";
import Header from "@/components/clearancepage/header";
import SidebarClearance from "@/components/clearancepage/sidebar";
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
      "Custom Clearance | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
    description: t("description"),
  };
}

export default function CustomClearance() {
  return (
    <>
      <Header />
      <SidebarClearance />
    </>
  );
}
