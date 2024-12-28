import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, date, category, image }) => {
  return (
    <div className="mb-12 flex lg:ml-80  lg:mr-[220px] lg:mt-30 flex-col md:flex-row items-center gap-2 p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="flex-1 h-[240px] md:h-[250px] relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-md -ml-8" />
      </div>
      <div className="flex-1 flex flex-col gap-4 max-w-full lg:max-w-3xl">
        <div className="detail text-sm text-gray-600 dark:text-white">
          <span>{date} - </span>
          <span className="text-purple-600 dark:text-purple-300 font-medium">{category}</span>
        </div>
        {/* Link to dynamic post page */}
        <Link href={`/posts/${id}`}>
          <h1 className="text-2xl md:text-3xl lg:text-2xl font-semibold my-2 text-purple-800 hover:text-purple-600 transition-colors dark:text-purple-400">{title}</h1>
        </Link>
        <p className="text-[16px] font-light text-gray-700 dark:text-zinc-200">{description}</p>
        <Link href={`/posts/${id}`} className="text-purple-600 font-medium border-b-2 border-purple-600 hover:text-purple-800 transition-colors">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
