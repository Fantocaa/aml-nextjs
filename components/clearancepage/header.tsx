import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LocaleLink from "../locale-link";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Services");
  return (
    <>
      <div
        className="lg:px-8 py-32"
        style={{
          backgroundImage: "url('/images/Frame-236 (1).webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundPositionY: "75%",
        }}
      >
        <div className="max-w-screen-xl px-4 md:px-2 2xl:px-8 mx-auto">
          <div className="flex justify-center flex-col text-white">
            <h1 className=" text-3xl font-semibold">Custom Clearance</h1>
            <Breadcrumb className="pt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <LocaleLink
                    href="/"
                    className="text-white hover:text-white/75"
                  >
                    {t("header-2")}
                  </LocaleLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <LocaleLink
                    href="/services"
                    className="text-white hover:text-white/75"
                  >
                    {t("header-1")}
                  </LocaleLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white/75">
                    Custom Clearance
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </>
  );
}
