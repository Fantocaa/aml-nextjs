import Header from "@/components/about/header";
import AboutMain from "@/components/about/aboutmain";
import Rate from "@/components/about/rate";
import Services from "@/components/services/services";
import Member from "@/components/member/member";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

const About = () => {
  return (
    <>
      <Header />
      <AboutMain />
      <Services />
      <Rate />
      <Member />
    </>
  );
};

export default About;
