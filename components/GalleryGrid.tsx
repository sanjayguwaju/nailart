"use client"

import Image from "next/image";

const GalleryGrid = () => {
  const images = [
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700836008/oqoapgxnnseelhuw58wy.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700830285/gyssa6k2ugouak842g4q.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700829906/g2jccui2ii6mbm458wmx.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700836008/oqoapgxnnseelhuw58wy.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700830285/gyssa6k2ugouak842g4q.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700829906/g2jccui2ii6mbm458wmx.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700836008/oqoapgxnnseelhuw58wy.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700830285/gyssa6k2ugouak842g4q.webp",
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1700829906/g2jccui2ii6mbm458wmx.webp",
  ];

  return (
    <>
      <div className="relative text-4xl text-center my-8 flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dz3facqgc/image/upload/v1701261839/jze6nwq4k1cec67a01da.webp"
          alt="gallery"
          width={200}
          height={200}
          className="w-full h-auto"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white">
          Gallery
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white mx-20 my-20">
        {images.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div className="">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                layout="responsive"
                loading="eager"
                placeholder="empty"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryGrid;
