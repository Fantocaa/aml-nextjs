import React from "react";
import Image from "next/image";

export default function Member() {
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
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl md:py-8 md:pb-[60px] group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-base md:text-xl font-semibold pt-1">
                Ricky Reza
              </h1>
            </div>
          </div>

          <div className="group relative block col-span-2 p-0 md:p-24 order-first md:order-last">
            <h1 className="text-4xl font-bold">
              Our talent and professional members
            </h1>
            <p className="pt-6 text-gray-600 text-lg">
              Meet friendly, experienced, knowledgeable and dynamic team members
              who always make our customers pleased with.
            </p>
          </div>

          {/* <div className="group bg-darkpint">
            <Image
              alt="member"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl py-8 group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-xl font-semibold">Bessie Cooper</h1>
            </div>
          </div>

          <div className="group bg-darkpint">
            <Image
              alt="member"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl py-8 group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-xl font-semibold">Bessie Cooper</h1>
            </div>
          </div>

          <div className="group bg-darkpint">
            <Image
              alt="member"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl py-8 group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-xl font-semibold">Bessie Cooper</h1>
            </div>
          </div>

          <div className="group bg-darkpint">
            <Image
              alt="member"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-100"
              width={1080}
              height={1080}
            />
            <div className="z-50 bg-white p-4 text-darkpint shadow-xl py-8 group-hover:bg-greenaml-500 group-hover:text-white transition-colors duration-200">
              <h2 className="text-sm">Manager</h2>
              <h1 className="text-xl font-semibold">Bessie Cooper</h1>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
