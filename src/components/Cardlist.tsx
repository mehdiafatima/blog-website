import React from 'react';
import Card from './Card';

const CardList = () => {
  // Mock blog data
  const blogs = [
    {
      id: '2',
      title: '5 Simple Ways to Boost Your Morning Routine',
      description: ' Start your day right with these easy habits that can set you up for a productive and positive day. We all know that how we start our day can influence how the rest of it goes. If you want to set a positive tone, here are five simple habits to add to your morning routine...',
      date: '24.12.2024',
      category: 'by-SoulWrites',
      image: '/routine.jpeg',
    },
    {
      id: '3',
      title: 'How to Declutter Your Space in 10 Minutes a Day',
      description: 'Keep your home tidy and peaceful by dedicating just 10 minutes each day to decluttering.A cluttered space can lead to a cluttered mind, but tackling it doesn’t have to be overwhelming. Here’s how you can quickly declutter your home in just 10 minutes a day...',
      date: '23.12.2024',
      category: 'by-SoulWrites',
      image: '/spcae.webp',
    },
    {
      id: '4',
      title: ' The Power of Gratitude: How Saying "Thank You" Can Change Your Life',
      description: ' Learn how practicing gratitude every day can boost your mood, reduce stress, and improve your relationships.Studies have shown that people who regularly practice gratitude experience less stress and more happiness. Here’s how to start...',
      date: '15.12.2024',
      category: 'by-SoulWrites',
      image: '/thankyou.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mb-10 mt-10 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-5">My Latest Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
      
      <div>
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            category={blog.category}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;