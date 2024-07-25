import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Cta = () => {
  const t = useTranslations("CTA");
  return (
    <div className="py-16 md:py-32 bg-gray-50">
      <section className="overflow-hidden sm:grid sm:grid-cols-2 mx-auto max-w-screen-xl px-4 md:px-8">
        {/* <div
          className="lg:py-24 flex items-center"
          style={{
            backgroundImage: "url('/images/Frame 2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-left ltr:sm:text-left rtl:sm:text-right p-12">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              Get in touch with us
            </h2>

            <p className="hidden text-gray-400 md:mt-4 md:block max-w-md">
              Kami selalu ada untuk menjawab pertanyaan Anda, memberikan
              informasi lebih lanjut, atau membantu Anda dengan kebutuhan
              logistik Anda. Jangan ragu untuk menghubungi kami!
            </p>
          </div>
        </div> */}

        <div
          className="lg:py-24 flex items-center relative"
          style={{
            backgroundImage: "url('/images/Frame 2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-left ltr:sm:text-left rtl:sm:text-right p-8 md:p-12 z-10">
            <h2 className="text-2xl font-bold text-white md:text-6xl lg:max-w-md">
              {/* Get in touch with us */}
              {t("title")}
            </h2>

            <p className="hidden text-gray-400 md:mt-8 text-lg md:block max-w-md">
              {t("subtitle")}
            </p>
          </div>
          <div className="absolute inset-0 bg-darkpint opacity-95"></div>
        </div>

        {/* <Image
          alt=""
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
          width={500}
          height={500}
        /> */}
        <div className="bg-white p-8 md:p-12 lg:py-24">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/icon/call-calling.svg"
                alt="call"
                width={32}
                height={32}
              />
              <h1 className="md:text-lg">Phone Number</h1>
            </div>
            <p className="md:text-xl pt-2">+62 812 8057 8717</p>
          </div>
          <br />
          <br />
          <div>
            <div className="flex items-center gap-2">
              <Image src="/icon/sms.svg" alt="call" width={32} height={32} />
              <h1 className="md:text-lg">Email Address</h1>
            </div>
            <p className="md:text-xl pt-2">anugerahmultilogistik@aml.com</p>
          </div>
          <br />
          <br />
          <div>
            <div className="flex items-center gap-2">
              <Image src="/icon/pins.svg" alt="call" width={32} height={32} />
              <h1 className="md:text-lg">Address</h1>
            </div>
            <p className="md:text-xl pt-2">
              HQ: Jl. Semut Kali No. 48-50, Pabean Cantian, Bongkaran, Surabaya
              60164
              <br />
              <br />
              Branch: Jl. Puri Anjasmoro Blok J4, Tawangsari, Semarang Barat,
              Kota Semarang 50144
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
