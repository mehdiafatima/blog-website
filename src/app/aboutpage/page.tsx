"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaSmile, FaPenNib } from "react-icons/fa";

const AboutMehdia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Header Section */}
      <header className="py-16 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-2 text-gray-800 dark:text-white "
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto  dark:text-zinc-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 lg:-mb-20"
        >
          Welcome to my creative space, where words flow straight from the heart.
        </motion.p>
      </header>

      {/* About Me Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Image
            src="/about.png"
            alt="Mehdia Fatima Faizi"
            width={300}
            height={300}
            className="rounded-full shadow-lg mx-auto md:mx-0 lg:ml-40"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left "
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Mehdia Fatima Faizi</h2>
          <p className="text-lg leading-relaxed dark:text-zinc-300">
  I’m a front-end developer by day, a student by night, and occasionally a “blogger” when I need a break from debugging. While I’m not crafting stories with words, I’m busy creating websites with code, turning ideas into reality one line at a time. This website is my little space where I share my journey through development, coding mishaps, and the occasional creative spark. For me, coding isn’t just a skill—it’s a way to build, learn, and constantly push the boundaries of what’s possible.
</p>
        </motion.div>
      </div>

      {/* Passions & Inspirations Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left dark:bg-gray-600 dark:text-white bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <FaPenNib className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Passions & Inspirations</h3>
          <p className="text-lg max-w-2xl">
            My passion for writing comes from the desire to create and inspire.
            I find inspiration in the smallest moments of life—whether it's a
            story shared by a friend, a quiet walk in nature, or a meaningful
            book. These moments remind me of the beauty and simplicity of life.
          </p>
        </motion.div>

        {/* New Section after Passions & Inspirations */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex-1 text-center md:text-left  dark:bg-gray-600 dark:text-white bg-gray-100 p-6 rounded-lg shadow-md"
>
  <FaSmile className="text-blue-500 text-4xl mb-4" />
  <h3 className="text-2xl font-semibold mb-4">The Heart of My Creativity</h3>
  <p className="text-lg max-w-2xl">
  When I'm not crafting words, I’m often unwinding with a warm cup of tea, diving into a captivating book, or letting my imagination wander to spark new ideas for my next blog post.
</p>
</motion.div>
      </div>

      {/* Personal Vision Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Personal Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left  dark:bg-gray-600 dark:text-white bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <FaLightbulb className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4">My Vision</h3>
          <p className="text-lg max-w-2xl">
            I believe that words have the power to heal, inspire, and transform.
            Through my blog, I aim to create a community where people can find
            solace, motivation, and a little bit of magic in the stories I tell.
          </p>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left  dark:bg-gray-600 dark:text-white bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <FaSmile className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Fun Fact</h3>
          <p className="text-lg max-w-2xl">
            When I&apos;m not writing, you&apos;ll find me sipping tea, lost in
            a good book, or brainstorming my next blog post idea.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMehdia;
