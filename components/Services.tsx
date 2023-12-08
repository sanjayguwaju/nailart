"use client";

import Image from "next/image"

const Services = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Services</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Welcome to nailsbyakatsuki, your go-to destination for stunning nail art. From personalized designs to luxurious manicures, we're here to elevate your nail game. Experience perfection at nailsbyakatsuki!</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image 
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                    src="/images/1.jpg" 
                    alt="Bonnie Avatar"
                    width={500}
                    height={300}
                />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Manicure</a>
                  </h3>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image 
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                    src="/images/2.jpg" 
                    alt="Jese Avatar"
                    width={500}
                    height={300}
                />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Pedicure</a>
                  </h3>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image 
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                    src="/images/3.jpg" 
                    alt="Michael Avatar"
                    width={500}
                    height={300}
                />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Nail Art</a>
                  </h3>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image 
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                    src="/images/4.jpg" 
                    alt="Sofia Avatar"
                    width={500}
                    height={300}
                />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Paraffin Hands</a>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>      
              </div>
          </div>  
      </div>  
  </div>
</section>
    </>
  )
}

export default Services
