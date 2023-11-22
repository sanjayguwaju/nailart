"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

function CarouselCode() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <Image
            src={"/images/slider-1.jpg"}
            alt="..."
            width={1200}
            height={600}
          />
          <Image
            src={"/images/slider-2.jpg"}
            alt="..."
            width={1200}
            height={600}
          />
          <Image
            src={"/images/slider-1.jpg"}
            alt="..."
            width={1200}
            height={600}
          />
          <Image
            src={"/images/slider-1.jpg"}
            alt="..."
            width={1200}
            height={600}
          />
          <Image
            src={"/images/slider-1.jpg"}
            alt="..."
            width={1200}
            height={600}
          />
        </Carousel>
      </div>
    </>
  );
}

export default CarouselCode;
