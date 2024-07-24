import React from "react";
import SidebarCargo from "@/components/cargo/sidebar";
import Header from "@/components/cargo/header";
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
      "Cargo Insurance Brokerage | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
    description: t("description"),
  };
}

export default function Cargo() {
  return (
    <>
      <Header />
      <SidebarCargo />
    </>
  );
}
