"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const posts = [
  {
    id: "2",
    title: "5 Simple Ways to Boost Your Morning Routine",
    description:
      "Start your day right with these easy habits that can set you up for a productive and positive day.",
    date: "26.12.2024",
    category: "by-SoulWrites",
    image: "/routine.jpeg",

    content:
      "Starting your day in the right way can make all the difference in how the rest of your day unfolds. A positive and productive morning sets the tone for success, and it doesn’t require a major overhaul. First, hydration is key. Drinking water first thing in the morning replenishes the body after hours of sleep and helps jumpstart your metabolism. Next, add a bit of stretching to get your body moving. A quick 5-minute stretch can increase blood circulation and give you a burst of energy. Don’t skip breakfast, either. Eating a balanced meal that includes protein, healthy fats, and fiber helps maintain energy levels. Take a few minutes to set your intentions for the day. Visualize your goals and imagine a successful day. Lastly, avoid jumping straight into emails or social media; instead, give yourself the first 30 minutes of your day to focus on yourself before diving into the digital world. Incorporating these small habits into your morning routine can help you feel more focused and energized.",
  },

  {
    id: "3",
    title: "How to Declutter Your Space in 10 Minutes a Day",
    description:
      "Keep your home tidy and peaceful by dedicating just 10 minutes each day to decluttering. A cluttered space can lead to a cluttered mind, but tackling it doesn’t have to be overwhelming. Here’s how you can quickly declutter your home in just 10 minutes a day...",
    date: "23.12.2024",
    category: "by-SoulWrites",
    image: "/spcae.webp",

    content:
      "A cluttered environment can make it hard to focus and can even contribute to stress. However, tackling your space doesnt need to be overwhelming. You can start by dedicating just 10 minutes a day to decluttering. Begin with one area at a time. Whether its your desk, kitchen counter, or living room, focusing on small sections makes the task feel more manageable. Next, eliminate unnecessary items. Old receipts, broken items, or expired food only take up space and add to the mess. After that, group similar items together. Organizing books, papers, or kitchen tools in a cohesive way helps make your space look tidier. For quick fixes, use baskets or trays to corral scattered items. And finally, at the end of your 10-minute session, do a quick sweep to make sure everything looks neat and tidy. By sticking to this short and simple routine, youll notice how much easier it becomes to maintain a clean and organized space.",
  },
  {
    id: "4",
    title: "The Power of Gratitude: How Saying 'Thank You' Can Change Your Life",
    description:
      "Learn how practicing gratitude every day can boost your mood, reduce stress, and improve your relationships. Studies have shown that people who regularly practice gratitude experience less stress and more happiness. Here’s how to start...",
    date: "15.12.2024",
    category: "by-SoulWrites",
    image: "/thankyou.jpg",
    content:
      "Practicing gratitude is one of the simplest yet most powerful ways to boost your mental well-being and improve your outlook on life. Gratitude has been shown to reduce stress, increase happiness, and even strengthen relationships. A great way to start is by keeping a gratitude journal. Write down three things youre thankful for every day. These can be as simple as a delicious cup of coffee or a kind gesture from a friend. Another way to practice gratitude is to say 'thank you' more often. Whether its for a small favor or a major help, expressing appreciation not only makes the recipient feel good but also reinforces positive feelings within yourself. Focus on the small moments that might otherwise go unnoticed, like a warm shower or the beauty of nature around you. Even on difficult days, try to find something positive, as it shifts your perspective. Finally, take a moment to share your gratitude with others, whether its through a thank-you note or a quick message. This practice not only brightens their day but also strengthens your connections. Gratitude can truly change your life by fostering positivity, reducing stress, and nurturing relationships.",
  },
];

const SinglePage = () => {
  const params = useParams();
  const { id } = params;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    // Get stored comments from localStorage if they exist
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add new comment to the list and update localStorage
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComment(""); // Reset the comment input field
  };

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Title Section */}
        <div className="flex flex-col items-center lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 dark:text-purple-500">
            {post.title}
          </h1>
          <div className="text-lg text-gray-600 mb-6 text-center">
            <span>{post.date}</span> | <span className="text-purple-600">{post.category}</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-80 sm:h-96 md:h-[400px]">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-700 dark:text-zinc-100 mb-10">
        <p>{post.content}</p>
      </div>

      {/* Comment Section */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            className="w-full p-4 mb-4 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Post Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">Comments</h4>
          <div className="mt-4 space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
