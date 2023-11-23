"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

// Move the images array outside of the component
const images = [
  "/images/bg-slider-2.jpg",
  "/images/bg-slider-3.jpg",
  "/images/bg-slider-4.jpg",
];

function CarouselCode() {
  return (
    <div className="relative md:w-full md:h-screen-90">
      <Carousel>
        {images.map((src, index) => (
          <div key={index} className="relative h-56 sm:h-64 md:h-80 lg:w-full lg:h-full">
            <Image
              src={src}
              // Use a more descriptive alt text
              alt={`Slide ${index + 1}`}
              fill={true}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselCode;