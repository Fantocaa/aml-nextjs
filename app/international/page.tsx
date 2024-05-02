import Image from "next/image";
import React from "react";

export default function International() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="bg-bgwhiteaml w-full py-8 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold text-center ">
            <span className="text-blueaml-600">International </span>Market
          </h1>
          <p className="text-center max-w-2xl">
            Temukan solusi logistik global yang andal untuk kebutuhan pengiriman
            lintas negara Anda. Dengan pengalaman dan jaringan internasional
            yang kuat, kami siap membantu Anda mengelola pengiriman barang
            lintas batas dengan efisiensi dan kehandalan.
          </p>
          <Image
            src="/images/PETA AML INTER.gif"
            alt="map"
            width={1440}
            height={1440}
            className="pt-12"
          />
        </div>
      </div>
    </>
  );
}
