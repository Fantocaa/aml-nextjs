import React from "react";

import LocaleLink from "../locale-link";
import { useTranslations } from "next-intl";
import HeaderCarousel from "./HeaderCarousel";

const Header = () => {
  const t = useTranslations("Header-Home");
  return (
    <section>
      <HeaderCarousel />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right">
          <p className="mt-12 mb-4 max-w-lg sm:text-xl/relaxed text-white">
            PT. ANUGERAH MULTI LOGISTIK
          </p>
          <h1 className="text-3xl font-bold sm:text-6xl/tight text-white max-w-2xl">
            {t("title")}
          </h1>

          <p className="mt-4 max-w-xl sm:text-xl/relaxed text-white">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <LocaleLink
              href="/services"
              className="block w-full rounded bg-blueaml-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blueaml-700 focus:outline-none focus:ring active:bg-blueaml-500 sm:w-auto"
            >
              {t("button")}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
