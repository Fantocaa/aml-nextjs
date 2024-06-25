import React from "react";
import Header from "@/components/servicepage/header";
import LinkServices from "@/components/servicepage/linkservices";
import Specialist from "@/components/specialist/specialist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

const Services = () => {
  return (
    <>
      <Header />
      <LinkServices />
      <Specialist />
    </>
  );
};

export default Services;
