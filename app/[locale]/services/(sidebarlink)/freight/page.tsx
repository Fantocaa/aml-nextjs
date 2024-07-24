import React from "react";
import Header from "@/components/freightpage/header";
import SidebarFreight from "@/components/freightpage/sidebar";
import type { Metadata } from "next";

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
      "Sea Freight Forwarding | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
    description: t("description"),
  };
}

export default function Freight() {
  return (
    <>
      <Header />
      <SidebarFreight />
    </>
  );
}
