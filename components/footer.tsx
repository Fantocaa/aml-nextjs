import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocaleLink from "./locale-link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Navigation-Bar");

  const Navlinks = [
    {
      category: `${t("layanan")}`,
      links: [
        { id: 1, name: "Custom Clearance", link: "/services/customclearance" },
        { id: 2, name: "Sea Freight Forwarding", link: "/services/freight" },
        { id: 3, name: "Trucking", link: "/services/trucking" },
        {
          id: 4,
          name: "Cargo Insurance Brokerage",
          link: "/services/cargoinsurance",
        },
        {
          id: 5,
          name: "Intermodal & Multimodal Transportation",
          link: "/services/transportation",
        },
      ],
    },
    {
      category: `${t("link")}`,
      links: [
        { id: 1, name: `${t("home")}`, link: "/" },
        { id: 2, name: `${t("about")}`, link: "/about" },
        { id: 3, name: `${t("service")}`, link: "/services" },
        { id: 4, name: "Domestic", link: "/domestic" },
        { id: 5, name: "International", link: "/international" },
        { id: 6, name: `${t("career")}`, link: "https://karier.tako.co.id/" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-darkpint">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-6">
            <div className="md:col-span-3">
              <div className="flex text-white justify-start items-center gap-2">
                <Image
                  alt="logo"
                  src="/images/amlwhite.png"
                  width={80}
                  height={80}
                />
                <h1 className="font-semibold">PT. ANUGERAH MULTI LOGISTIK</h1>
              </div>

              <p className="mt-6 max-w-md leading-relaxed text-gray-400 text-left">
                {t("footer")}
              </p>

              <ul className="mt-4 md:mt-8 flex justify-center gap-6 sm:justify-start md:gap-8"></ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 lg:col-span-3">
              {Navlinks.map((categoryItem, index) => (
                <div
                  key={categoryItem.category}
                  className={`text-left sm:text-left col-span-2 lg:col-span-1 ${
                    index === 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <p className="text-lg font-medium text-gray-200">
                    {categoryItem.category}
                  </p>
                  <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                    {categoryItem.links.map((linkItem) => (
                      <li key={linkItem.id}>
                        {linkItem.link.startsWith("https") ? (
                          <Link
                            className="text-gray-400 transition hover:text-gray-400/75"
                            href={linkItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {linkItem.name}
                          </Link>
                        ) : (
                          <LocaleLink
                            className="text-gray-400 transition hover:text-gray-400/75"
                            href={linkItem.link}
                          >
                            {linkItem.name}
                          </LocaleLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center">
              <p className="mt-4 text-sm text-gray-200 sm:order-first sm:mt-0">
                Copyright &copy; {currentYear}. PT. ANUGERAH MULTI LOGISTIK.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
