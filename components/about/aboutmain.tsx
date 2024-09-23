import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutMain() {
  const t = useTranslations("About");
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 md:h-96 lg:h-full overflow-hidden rounded-lg lg:order-last ">
              <Image
                alt="about"
                src="/images/image 2.png"
                className="absolute inset-0 h-full w-full object-cover lg:object-bottom"
                width={1080}
                height={1080}
              />
            </div>

            <div>
              {/* <p>About Company</p> */}
              <h2 className="text-3xl font-bold sm:text-4xl">
                PT. ANUGERAH MULTI LOGISTIK
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                {t("desc")}
                <br />
                <br />
                {t("desc2")}
                <Link
                  href="https://tako.co.id"
                  target="__blank"
                  className="text-blue-600"
                >
                  {" "}
                  https://tako.co.id
                </Link>
                ){t("desc3")}
                <br />
                <br />
                {t("desc4")}
              </p>

              <Tabs defaultValue="account" className="w-full mt-12">
                <TabsList>
                  <TabsTrigger
                    value="account"
                    className="text-2xl py-4 hover:bg-blue-100 mr-2"
                  >
                    {t("vision")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="password"
                    className="text-2xl py-4 hover:bg-blue-100 ml-2"
                  >
                    {t("mission")}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-4 text-lg">
                  {/* <h1 className="font-semibold text-2xl py-4">Our Vision</h1> */}
                  <p className="text-gray-600">
                    {t("content-1")}
                    <br />
                    <br />
                    {t("content-2")}
                  </p>
                </TabsContent>
                <TabsContent value="password">
                  {/* <h1 className="font-semibold text-2xl py-4">Our Mission</h1> */}
                  <ul className="list-disc ml-5 pb-[120px] pt-4 text-lg text-gray-600">
                    <li>{t("content-li-1")}</li>
                    <li>{t("content-li-2")}</li>
                    <li>{t("content-li-3")}</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
