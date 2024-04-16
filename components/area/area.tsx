import React from "react";
import Image from "next/image";

const Area = () => {
  return (
    <div className="w-full mx-auto text-center">
      <h1 className="text-3xl">Our Services Area</h1>
      <Image
        src="images/provinces.svg"
        width={1280}
        height={720}
        alt="Indonesia"
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default Area;
