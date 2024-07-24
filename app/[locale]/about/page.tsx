import Header from "@/components/about/header";
import AboutMain from "@/components/about/aboutmain";
import Rate from "@/components/about/rate";
import Services from "@/components/services/services";
import Member from "@/components/member/member";
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
    title: t("title"),
    description: t("description"),
  };
}

const About = () => {
  return (
    <>
      <Header />
      <AboutMain />
      <Services />
      {/* <Rate /> */}
      <Member />
    </>
  );
};

export default About;
