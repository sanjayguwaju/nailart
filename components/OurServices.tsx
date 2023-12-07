"use client"

import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <div>
      <div className="relative md:w-full md:h-screen-90">
    <div className="font-Playfair Display flex flex-col space-y-8 mt-10 w-full md:w-[820px] h-[360px] pt-8 md:pt-20 px-4 md:px-20 mx-auto md:mx-[200px] my-[1000px] items-left z-10 relative pb-0">
          <h1 className="text-3xl md:text-5xl">Our Services</h1>
          <h2 className="text-2xl md:text-3xl">WHAT WE OFFER</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.     
          </p >
          <AnimatedButton label="Read More" />
        </div>
      </div>
      <div className="relative flex-col my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-4">
        <div className="service-card">
          <Image
            src="https://res.cloudinary.com/dz3facqgc/image/upload/v1700836037/a8lksbuubdiy8qf7rqtr.webp"
            alt="Manicure"
            width={200}
            height={200}
            layout="responsive"
          />
          <h3 className="text-xl">Manicure</h3>
        </div>
        <div className="service-card">
          <Image
            src="https://res.cloudinary.com/dz3facqgc/image/upload/v1700836037/a8lksbuubdiy8qf7rqtr.webp"
            alt="Pedicure"
            width={200}
            height={200}
            layout="responsive"
          />
          <h3 className="text-xl">Pedicure</h3>
        </div>
        <div className="service-card">
          <Image
            src="https://res.cloudinary.com/dz3facqgc/image/upload/v1700836037/a8lksbuubdiy8qf7rqtr.webp"
            alt="Nail Art"
            width={200}
            height={200}
            layout="responsive"
          />
          <h3 className="text-xl">Nail Art</h3>
        </div>
        <div className="service-card">
          <Image
            src="https://res.cloudinary.com/dz3facqgc/image/upload/v1700836037/a8lksbuubdiy8qf7rqtr.webp"
            alt="Paraffin Hands"
            width={200}
            height={200}
            layout="responsive"
          />
          <h3 className="text-xl">Paraffin Hands</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurServices;
