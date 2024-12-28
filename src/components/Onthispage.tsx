"use client";
import React, { useEffect, useState } from "react";

// Define the type for the props
interface OnThisPageProps {
  htmlContent: string; // The content passed will be a string of HTML
}

// Define the type for each heading
interface Heading {
  text: string;
  id: string;
}

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<Heading[]>([]); // Specify the type for state

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll("h2");

    // Map the h2 elements to an array of heading objects
    const h2Data: Heading[] = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent || "",
      id: h2.id || "",
    }));

    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page hidden lg:block fixed top-1/2 right-1 mr-60 p-4 bg-purple-50 bg-opacity-80 shadow-lg rounded-lg border border-purple-400 animate-fadeIn z-10 ">
      <h2 className="text-lg font-semibold mb-4  text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">On This Page</h2>
      <ul className="text-sm space-y-2">
        {headings.map((heading, index) => (
          <li
            key={index}
            className="transition-transform transform hover:scale-105 hover:text-purple-600 hover:underline"
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
