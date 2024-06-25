import React from "react";
import Header from "@/components/transportationpage/header";
import SidebarTransport from "@/components/transportationpage/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

export default function Transportation() {
  return (
    <>
      <Header />
      <SidebarTransport />
    </>
  );
}
