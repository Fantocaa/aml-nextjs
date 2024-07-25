import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Member() {
  const t = useTranslations("Member-Home");
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group bg-darkpint">
            <Image
              alt="member"
              src="/images/deby.webp"
              className="h-64 md:h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl md:py-8 md:pb-8 group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-md md:text-xl font-semibold pt-1">
                Debora Magdalena Syintha
              </h1>
            </div>
          </div>

          <div className="group bg-darkpint">
            <Image
              alt="member"
              src="/images/Ricky.webp"
              className="h-64 md:h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl md:py-8 pb-10 md:pb-[60px] group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-base md:text-xl font-semibold pt-1">
                Ricky Reza
              </h1>
            </div>
          </div>

          <div className="group relative block col-span-2 p-0 md:p-20 order-first md:order-last">
            <h1 className="text-4xl font-bold">
              {/* Our talent and professional members */}
              {t("title")}
            </h1>
            <p className="pt-6 text-gray-600 text-lg">
              {/* Meet friendly, experienced, knowledgeable and dynamic team members
              who always make our customers pleased with. */}
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
