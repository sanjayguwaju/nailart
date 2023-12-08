"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 100000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full mt-[53px] lg:mt-[70px]"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 lg:h-[95vh]">
          {/* <!-- Item 1 --> */}
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeSlide === 0 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src="/images/bg-slider-2.jpg"
              className="absolute block w-full lg:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={1920}
              height={1080}
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeSlide === 1 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src="/images/bg-slider-3.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={800}
              height={400}
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeSlide === 2 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src="/images/bg-slider-4.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={800}
              height={400}
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeSlide === 3 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src="/images/bg-slider-2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={800}
              height={400}
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeSlide === 4 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src="/images/bg-slider-4.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={800}
              height={400}
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={activeSlide === 0}
            aria-label={`Slide ${1}`}
            onClick={() => goToSlide(0)}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={activeSlide === 1}
            aria-label={`Slide ${2}`}
            onClick={() => goToSlide(1)}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={activeSlide === 2}
            aria-label={`Slide ${3}`}
            onClick={() => goToSlide(2)}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={activeSlide === 3}
            aria-label={`Slide ${4}`}
            onClick={() => goToSlide(3)}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={activeSlide === 4}
            aria-label={`Slide ${5}`}
            onClick={() => goToSlide(4)}
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Slider;
