import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Countup from "./Countup";
import { useTranslations } from "next-intl";

export default function Specialist() {
  const t = useTranslations("Specialist-Home");
  return (
    <>
      <div
        className="lg:px-8 relative"
        style={{
          backgroundImage: "url('/images/Frame 2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl px-4 md:px-2 2xl:px-8 mx-auto py-24">
          <div className="absolute inset-0 bg-white opacity-90"></div>
          <div className="md:flex w-full items-center relative z-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-darkpint">{t("title")}</h1>
              <p className="py-4 max-w-xl text-gray-500 text-lg">
                {t("subtitle")}
              </p>
              <Link href="/about">
                <Button className="bg-blueaml-500 text-white hover:bg-white hover:text-blueaml-500 hover:border hover:border-blueaml-500">
                  {t("button")}
                </Button>
              </Link>
            </div>
            <div
              className="md:w-1/2 grid grid-cols-2 gap-4 pt-8"
              data-aos="fade-up"
            >
              <Countup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
