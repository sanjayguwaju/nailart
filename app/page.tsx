"use client";

import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarouselCode from "@/components/Carousel";
import OurBlog from "@/components/OurBlog";
import Button from "@/components/AnimatedButton";
import OurServices from "@/components/OurServices";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import Slider from "@/components/Slider";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Nav/>
      <Slider/>
      <Services/>
      <Testimonial/>
      <ContactUs/>
      <Foot/>
    </>
  );
}
