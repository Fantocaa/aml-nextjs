import Image from "next/image";
import Header from "@/components/header/header";
import WhyChooseUs from "@/components/whychooseus/whychooseus";
import Services from "@/components/services/services";
import Area from "@/components/area/area";
import Cta from "@/components/cta/cta";
import Specialist from "@/components/specialist/specialist";
import Member from "@/components/member/member";

export default function Home() {
  return (
    <section>
      <Header />
      <WhyChooseUs />
      <Services />
      {/* <Area /> */}
      <Specialist />
      <Member />
      <Cta />
    </section>
  );
}
