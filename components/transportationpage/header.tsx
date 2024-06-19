// "use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
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
            <h1 className=" text-3xl font-semibold">
              Intermodal & Multimodal Transportation
            </h1>
            <Breadcrumb className="pt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="text-white hover:text-white/75"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/services"
                    className="text-white hover:text-white/75"
                  >
                    Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white/75">
                    Intermodal & Multimodal Transportation
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
