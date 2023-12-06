"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import "@/components/Carousel.css";
import AnimatedButton from "@/components/AnimatedButton";


interface CarouselCodeProps {
  images: string[];
  titles: string[];
  subtitles: string[]; 
}

const CarouselCode: React.FC<CarouselCodeProps> = ({
  images,
  titles,
  subtitles,
}) => {
  return (
    <div className="relative w-full h-screen md:h-screen-90">
      <Carousel>
        {images.map((src, index) => (
          <div
            key={index}
            className="h-56 sm:h-64 md:h-80 lg:w-full lg:h-full"
          >
            <Image src={src} alt={`Slide ${index + 1}`} fill={true} />
            <div className="font-'Playfair Display' flex flex-col space-y-8 mt-10 w-[820px] h-[360px] py-20 px-20 mx-[200px] my-[1000px] items-left z-10 relative">
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold z-20 relative">
                  {titles[index]}
                </h1>
              </div>
              <div>
                <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl z-20 relative">
                  {subtitles[index]}
                </h2>
              </div>
              <div className="z-20 relative">
                <AnimatedButton label="Get an appointment" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCode;
