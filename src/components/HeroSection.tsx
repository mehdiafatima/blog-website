'use client'
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image'; // Import the Image component from Next.js

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center py-12 px-6 lg:mt-10">
      {/* Text in the Center */}
      <div className="w-full text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-purple-600 dark:text-purple-400 mb-4 lg:ml-8">
          SoulWrites: Words That Speak to the Heart.
        </h1>

        {/* TypeAnimation for Subheading */}
        <div className="min-h-[60px] lg:min-h-[70px] flex items-center justify-center mt-4 lg:ml-8 ">
          <TypeAnimation
            sequence={[
              'Sharing Stories, Thoughts, and Inspiration That Resonate Deep Within',
              2000,  // Duration for the text
            ]}
            wrapper="span"
            speed={60} // Speed of typing
            repeat={Infinity} // Repeat infinitely
            className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 dark:text-white "
          />
        </div>
      </div>

      {/* Image on the Right */}
      <div className="w-full lg:w-1/2 lg:mr-10 lg:mt-9">
        <Image
          src="/bg2.jpeg" // Replace with your image path
          alt="Hero Image"
          width={500} // Set a width (adjust as needed)
          height={400} // Set a height (adjust as needed)
          className="w-full h-auto object-cover rounded-lg lg:max-w-[500px] mx-auto lg:ml-22"
        />
      </div>
    </section>
  );
};

export default Hero;
