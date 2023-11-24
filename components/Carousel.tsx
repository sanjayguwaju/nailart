"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

interface CarouselCodeProps {
  images: string[];
  titles: string[];
}

const CarouselCode: React.FC<CarouselCodeProps> = ({ images, titles }) => {
  return (
    <div className="relative md:w-full md:h-screen-90">
      <Carousel>
        {images.map((src, index) => (
          <div key={index} className="relative h-56 sm:h-64 md:h-80 lg:w-full lg:h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill={true}
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red text-lg">{titles[index]}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselCode;