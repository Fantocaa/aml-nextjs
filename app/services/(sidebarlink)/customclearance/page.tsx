import React from "react";
import Header from "@/components/clearancepage/header";
import SidebarClearance from "@/components/clearancepage/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

export default function CustomClearance() {
  return (
    <>
      <Header />
      <SidebarClearance />
    </>
  );
}
