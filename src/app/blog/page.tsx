import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image component
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the type for the blog metadata
interface BlogMetaData {
  title: string;
  author: string;
  description: string;
  date: string;
  slug: string;
  image: string;
}

async function fetchBlogs(): Promise<BlogMetaData[]> {
  const contentDirectory = path.join(process.cwd(), 'content');
  const dirContent = fs.readdirSync(contentDirectory, 'utf-8');

  const blogs: BlogMetaData[] = dirContent.map((file) => {
    const filePath = path.join(contentDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title || 'Default Title',
      author: data.author || 'Unknown Author',
      description: data.description || 'No description available.',
      date: data.date || 'Unknown Date',
      slug: file.replace('.md', ''),
      image: data.image || '/bg2.jpeg'
    };
  });

  return [
    ...blogs,
  ];
}

const Blog: React.FC = async () => {
  const blogs = await fetchBlogs(); // Fetch blogs server-side

  return (
    <div className="container mx-auto p-4">
      <div className="mt-6 lg:mt-22">
        {/* Main Heading for Blog Section */}
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
          My Blogs
        </h1>

        {/* Creative and Unique Subheading with Responsive Design */}
        <h2 className="text-3xl mb-7 lg:mb-[90px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-5 lg:mb-9 sm:text-2xl md:text-3xl lg:text-3xl">
          Discover the Stories that Inspire, Inform, and Ignite Your Imagination
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: 'outline' })}>
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
