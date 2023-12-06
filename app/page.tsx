"use client";

import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarouselCode from "@/components/Carousel";
import OurBlog from "@/components/OurBlog";
import Button from "@/components/AnimatedButton";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <CarouselCode
        images={[
          "https://res.cloudinary.com/dz3facqgc/image/upload/v1700838318/tok8ygzylz5mp75yg3vq.webp",
          "/images/bg-slider-3.jpg",
          "/images/bg-slider-4.jpg",
        ]}
        titles={["GET A NEW LOOK FOR YOUR NAILS", "GET YOUR NAILS DONE BY A SKILLED NAIL ARTIST", "CHOOSE THE BEST ATTITUDE AND SERVICES"]}
        subtitles={["Change Your Nails Look With Our Talented Stylists.", "Change Your Nails Look With Our Talented Stylists.", "Change Your Nails Look With Our Talented Stylists."]}
      />
      <OurServices />
      <Footer />
    </>
  );
}
