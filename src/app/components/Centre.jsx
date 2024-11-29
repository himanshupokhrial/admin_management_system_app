import React from 'react'
import Image from 'next/image';

const Centre = () => {
    return (
        <div className="bg-gray-50">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="relative flex flex-wrap items-center justify-between bg-blue-900 px-8 py-20 text-white md:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <div className="mb-4 inline-block bg-red-600 px-4 py-1 text-sm font-semibold uppercase tracking-wider">
            Enquire Now
          </div>
          <h1 className="text-4xl font-bold leading-tight">
            Custom Learning Solutions
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Create engaging and effective learning experiences for your remote
            and hybrid workforce.
          </p>
          <button className="mt-6 rounded bg-red-500 px-6 py-3 text-lg font-semibold text-white hover:bg-red-600">
            Talk to an Expert
          </button>
        </div>

        {/* Right Content */}
        <div className="hidden w-full md:block md:w-1/2">
        

        <Image 
        alt="very basic image for you" 
        src="/vector.jpg" 
        width={500} // Set the width in pixels
        height={300} // Set the height in pixels
        />
        </div>
      </section>

      {/* Carousel (Optional Placeholder) */}
      {/* <div className="flex items-center justify-center space-x-2 py-6">
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-blue-600"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
      </div> */}
    </div>
      );
}

export default Centre