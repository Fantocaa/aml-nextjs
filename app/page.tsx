import Image from "next/image";
import Header from "@/components/header/header";
import WhyChooseUs from "@/components/whychooseus/whychooseus";
import Services from "@/components/services/services";
// import Area from "@/components/area/area";
import Cta from "@/components/cta/cta";
import Specialist from "@/components/specialist/specialist";
import Member from "@/components/member/member";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home | Reach To All Corners of The World With Us | PT. ANUGERAH MULTI LOGISTIK",
  description:
    "Menjadi perusahaan Logistik Export dan Import terbaik yang terkemuka, terpercaya, dan handal dengan mengutamakan kepercayaan dan kepuasan Customer",
};

export default function Home() {
  return (
    <section>
      <Header />
      <WhyChooseUs />
      <Services />
      {/* <Area /> */}
      <Specialist />
      <Member />
      {/* <Cta /> */}
    </section>
  );
}
