"use client"

import './globals.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CarouselCode from '@/components/Carousel'

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <CarouselCode/>
      <Footer/>
    </>
  )
}
