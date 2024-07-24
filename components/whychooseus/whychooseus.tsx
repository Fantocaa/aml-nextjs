import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("WhyChooseUs");

  const Content = [
    {
      id: 1,
      title: t("commit"),
      subtitle: t("commit-sub"),
      src: "/icon/commit.svg",
    },
    {
      id: 2,
      title: t("ontime"),
      subtitle: t("ontime-sub"),
      src: "/icon/ontime.svg",
    },
    {
      id: 3,
      title: t("efficiency"),
      subtitle: t("efficiency-sub"),
      src: "/icon/efficiency.svg",
    },
    {
      id: 4,
      title: t("relation"),
      subtitle: t("relation-sub"),
      src: "/icon/relation.svg",
    },
    {
      id: 5,
      title: t("safety"),
      subtitle: t("safety-sub"),
      src: "/icon/safety.svg",
    },
    {
      id: 6,
      title: t("nicely"),
      subtitle: t("nicely-sub"),
      src: "/icon/nicely.svg",
    },
    {
      id: 7,
      title: t("reliability"),
      subtitle: t("reliability-sub"),
      src: "/icon/reliability.svg",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="my-8 grid grid-cols-4 gap-4 md:my-16 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <div className="flex items-start md:items-center gap-4 col-span-4 md:col-span-2 pt-16 md:pt-0">
            <div className="max-w-xl pb-4 flex flex-col items-start">
              <div className="font-bold col-span-3">
                <h1 className="text-3xl md:text-4xl leading-snug">
                  {t("special")}
                </h1>
              </div>
              <p className="mt-4 text-gray-500 2xl:text-lg">
                {t("special-sub")}
              </p>
            </div>
          </div>
          {Content.map((content, index) => (
            <div
              key={content.id}
              className="flex flex-col items-start gap-4 bg-gray-50 p-4 rounded-xl col-span-2 md:col-span-1"
            >
              <span className="shrink-0 rounded-lg bg-blue-50 p-4">
                <Image
                  src={content.src}
                  alt={`image ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-16 2xl:h-16"
                />
              </span>
              <div>
                <h2 className=" font-bold text-greenaml-500 text-xl 2xl:text-2xl">
                  {content.title}
                </h2>
                <p className="mt-2 text-gray-500 text-sm 2xl:text-base">
                  {content.subtitle}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-start gap-4 bg-gradient-to-r from-blueaml-500 to-greenaml-500 p-8 md:p-16 rounded-xl col-span-4 md:col-span-3 ">
            <p className="mt-2 text-white text-xl md:text-3xl md:leading-relaxed">
              &quot;{t("quote")}&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
