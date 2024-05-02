import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-darkpint">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <div className="md:col-span-3">
              <div className="flex justify-center text-white sm:justify-start items-center gap-2">
                <Image
                  alt="logo"
                  src="/images/amlwhite.png"
                  width={80}
                  height={80}
                />
                <h1 className="font-semibold">PT. ANUGERAH MULTI LOGISTIK</h1>
              </div>

              <p className="mt-6 text-center max-w-md leading-relaxed text-gray-400 sm:text-left">
                Menjadi perusahaan Logistik Export dan Import terbaik yang
                terkemuka, terpercaya, dan handal dengan mengutamakan
                kepercayaan dan kepuasan Customer.
              </p>

              <ul className="mt-4 md:mt-8 flex justify-center gap-6 sm:justify-start md:gap-8"></ul>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
              <div className="text-left sm:text-left col-span-2 md:col-start-2">
                <p className="text-lg font-medium text-gray-200">
                  Our Services
                </p>

                <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services/customclearance"
                    >
                      Custom Clearance
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services/freight"
                    >
                      Sea Freight Forwarding
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services/trucking"
                    >
                      Trucking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services/cargoinsurance"
                    >
                      Cargo Insurance Brokerage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services/transportation"
                    >
                      Intermodal & Multimodal Transportation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left sm:text-left">
                <p className="text-lg font-medium text-gray-200">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/domestic"
                    >
                      Domestic
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/international"
                    >
                      International
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="https://karier.tako.co.id/"
                    >
                      Careers
                    </Link>
                  </li>

                  {/* <li>
                    <a
                      className="group flex justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <span className="text-gray-400 transition group-hover:text-gray-400/75">
                        FAQs
                      </span>

                      
                    </a>
                  </li> */}
                </ul>
              </div>
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
