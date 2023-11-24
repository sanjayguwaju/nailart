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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black">
      {images.map((src, index) => (
        <div key={index} className="grid gap-4">
          <div className="bg-black">
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
  );
};

export default GalleryGrid;
