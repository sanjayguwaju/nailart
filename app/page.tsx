"use client"

import './globals.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CarouselCode from '@/components/Carousel'
import OurBlog from '@/components/OurBlog'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <CarouselCode/>
      <Button text="Get An Appointment" onClick={() => console.log('Button clicked')} />
      <br />
      <Button text="Read More" onClick={() => console.log('Button clicked')} />
      <Footer/>
    </>
  )
}
