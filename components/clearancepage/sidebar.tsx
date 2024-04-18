import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarClearance() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
        <div className="md:flex">
          <div className="flex md:h-screen flex-col justify-between border-e bg-white md:min-w-72 ">
            <div className="pr-8 py-6">
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    href="/services/customclearance"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    Custom Clearance
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/freight"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Freight Domestic / International
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/transportation"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-12 md:pl-8">
            <Image
              src="/images/clearance.webp"
              alt="clearance"
              width={1080}
              height={1080}
              className="h-80 object-cover w-full"
            />
            <h1 className="text-4xl font-semibold pt-8 pb-4">
              Custom Clearance
            </h1>
            <p className="">
              Kami menyediakan jasa pengurusan kepabeanan (Bea Cukai) untuk
              pengiriman barang export & import via laut dan udara karena kami
              memiliki lisensi resmi sebagai Pengusaha Pengurusan Jasa
              Kepabeanan (PPJK). Semua proses pengerjaan dilakukan secara resmi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
