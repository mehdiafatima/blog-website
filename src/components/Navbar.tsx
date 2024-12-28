"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from '../components/ui/theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center text-purple-500" >
        <Link href="/">
          <div className="text-lg font-bold text-purple-500">
            SoulWrites
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center text-purple-500">
          <Link href="/" className="hover:scale-102 hover:font-semibold transition-transform duration-300 text-purple-500">
            Home
          </Link>
          <Link href="/aboutpage" className="hover:scale-105 hover:font-semibold transition-transform duration-300 text-purple-500">
            About
          </Link>
        
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300 text-purple-500">
            Contact
          </Link>
          <div className='flex items-center'>
                    
                        <ModeToggle />
                    </div>
       
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4 text-purple-500">SoulWrites</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 text-purple-500 ">
                    <Link href="/">Home</Link>
                    <Link href="/aboutpage">About</Link>
                
                    <Link href="/contact">Contact</Link>
                    <div>
                    
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// import React from 'react';
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// // Define the type for the blog metadata
// interface BlogMetaData {
//   title: string;
//   author: string;
//   description: string;
//   date: string;
//   slug: string;
//   image: string;
// }

// // Async function to fetch blogs from the 'content' directory
// async function fetchBlogs(): Promise<BlogMetaData[]> {
//   const contentDirectory = path.join(process.cwd(), 'content');
//   const dirContent = fs.readdirSync(contentDirectory, 'utf-8');

//   const blogs: BlogMetaData[] = dirContent.map((file) => {
//     const filePath = path.join(contentDirectory, file);
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const { data } = matter(fileContent);

//     return {
//       title: data.title || 'Default Title',
//       author: data.author || 'Unknown Author',
//       description: data.description || 'No description available.',
//       date: data.date || 'Unknown Date',
//       slug: file.replace('.md', ''),
//       image: data.image || '/default-image.jpg'
//     };
//   });

//   return blogs;
// }

// const Blog: React.FC = async () => {
//   const blogs = await fetchBlogs(); // Fetch blogs server-side

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
//             <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
//             <div className="p-4">
//               <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
//               <p className="mb-4">{blog.description}</p>
//               <div className="text-sm mb-4">
//                 <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
//               </div>
//               <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: 'outline' })}>
//                 Click here
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
