"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
    // Here, you could also send the form data to your server or email.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 lg:-mb-20 text-gray-800">
      {/* Header Section */}
      <header className="py-16 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4 dark:text-white text-gray-800"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto dark:text-white lg:-mb-12"
        >
          I would love to hear from you! Feel free to reach out with any questions or comments.
        </motion.p>
      </header>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl dark:bg-gray-700 dark:text-white bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-300"
                rows={6}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* LinkedIn Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">Connect with Me</h3>
          <a
            href="https://www.linkedin.com/in/mehdia-fatima-884506289/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin className="text-4xl mr-2" />
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
