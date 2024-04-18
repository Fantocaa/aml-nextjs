import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutMain() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="about"
                src="/images/image 2.png"
                className="absolute inset-0 h-full w-full object-cover"
                width={1080}
                height={1080}
              />
            </div>

            <div className="lg:pb-64">
              {/* <p>About Company</p> */}
              <h2 className="text-3xl font-bold sm:text-4xl">
                PT. ANUGERAH MULTI LOGISTIK
              </h2>

              <p className="mt-4 text-gray-600">
                We have built a team of employees, who are participated in
                professional training courses , are groomed to handle any
                emerging situation with a level of composure that gives the
                customer peace of mind.
              </p>

              <Tabs defaultValue="account" className="w-full mt-8">
                <TabsList>
                  <TabsTrigger value="account" className="text-2xl py-4">
                    Our Vision
                  </TabsTrigger>
                  <TabsTrigger value="password" className="text-2xl py-4">
                    Our Mission
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-4">
                  {/* <h1 className="font-semibold text-2xl py-4">Our Vision</h1> */}
                  Menjadi Perusahaan Logistik Export dan Import terbaik yang
                  terkemuka, terpercaya, dan handal dengan mengutamakan
                  kepercayaan dan kepuasan Customer.
                  <br />
                  <br />
                  Kami bertekad untuk menjadi pilihan utama dalam layanan
                  logistik, memberikan solusi terbaik bagi kebutuhan ekspor dan
                  impor, serta memberikan kepuasan yang tak tertandingi kepada
                  setiap pelanggan. Dengan fokus pada keandalan,
                  profesionalisme, dan inovasi, kami berkomitmen untuk terus
                  meningkatkan kualitas layanan demi kepuasan dan kepercayaan
                  pelanggan.
                </TabsContent>
                <TabsContent value="password">
                  {/* <h1 className="font-semibold text-2xl py-4">Our Mission</h1> */}
                  <ul className="list-disc ml-5 pb-[120px] pt-4">
                    <li>
                      Memberikan Pelayanan yang Kompetitif, Berkualitas, dan
                      Aman.
                    </li>
                    <li>
                      Menjadi solusi customer dalam keperluan pengiriman Export
                      maupun Import.
                    </li>
                    <li>
                      Melakukan perkembangan manajemen dan teknologi sehingga
                      mampu memberikan kepuasan dan kepercayaan kepada Customer
                    </li>
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
