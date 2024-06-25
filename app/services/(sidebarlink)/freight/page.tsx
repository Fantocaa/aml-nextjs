import React from "react";
import Header from "@/components/freightpage/header";
import SidebarFreight from "@/components/freightpage/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

export default function Freight() {
  return (
    <>
      <Header />
      <SidebarFreight />
    </>
  );
}
