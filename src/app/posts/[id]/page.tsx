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
    content: `
      Starting your day in the right way can significantly impact how the rest of your day unfolds. A positive and productive morning sets the tone for success, and it doesn’t have to involve a complicated routine. Small, intentional habits can make a world of difference in how you feel and perform throughout the day.
  
      First, hydration is essential. Drinking water first thing in the morning helps replenish the body after hours of sleep and jumpstarts your metabolism. Hydration improves brain function, boosts your energy levels, and supports overall health, so make it a priority as soon as you wake up.
  
      Next, add some light stretching or a short morning exercise to get your body moving. Just 5 to 10 minutes of stretching can increase blood circulation, relieve tension, and give you an energy boost. It doesn’t need to be a full workout—simple stretches or yoga poses can work wonders in getting your body and mind awake.
  
      Don’t skip breakfast. A balanced breakfast that includes protein, healthy fats, and fiber is crucial for maintaining energy levels throughout the morning. It fuels your body and prevents mid-morning crashes. Whether it’s oatmeal with nuts, a smoothie with greens, or eggs and whole-grain toast, make sure you nourish yourself.
  
      Take a few minutes to set your intentions for the day. Reflect on your goals and visualize a successful day. This practice helps you stay focused and aligned with your purpose. Whether through journaling, deep breathing, or meditation, setting a positive intention can create a mindset of success that carries you through the day.
  
      Lastly, avoid diving straight into emails or social media. The first 30 minutes of your day should be dedicated to yourself, free from distractions. This time can be used for reflection, a morning walk, or simply enjoying a quiet moment before the busyness of the day begins. Giving yourself this space ensures that you start the day grounded and focused.
  
      Incorporating these simple habits into your morning routine can help you feel more energized, focused, and ready to take on the day. By taking control of the morning, you set the tone for a productive and positive day ahead.
    `
  },

  {
    id: "3",
    title: "How to Declutter Your Space in 10 Minutes a Day",
    description:
      "Keep your home tidy and peaceful by dedicating just 10 minutes each day to decluttering. A cluttered space can lead to a cluttered mind, but tackling it doesn’t have to be overwhelming. Here’s how you can quickly declutter your home in just 10 minutes a day...",
    date: "23.12.2024",
    category: "by-SoulWrites",
    image: "/spcae.webp",
    content: `
      A cluttered environment can often leave us feeling anxious, stressed, and distracted. But the idea of tackling an entire space might seem overwhelming. The good news is, you don't need hours to declutter—just 10 minutes a day can make a huge difference. 
  
      Start small and focus on one area at a time. Whether it's your desk, a kitchen counter, or the entryway, breaking the task into manageable sections makes it less intimidating. You’ll start seeing results right away, which can motivate you to continue. 
  
      Begin by eliminating unnecessary items. Go through things like old receipts, broken objects, or expired products—these contribute nothing but chaos and take up valuable space. By clearing them out, you immediately create a sense of order. 
  
      Group similar items together to maintain organization. Organize your books, papers, kitchen utensils, or even your wardrobe by category. This not only makes it easier to find things but also visually tidies up your space. 
  
      For quick fixes, use containers like baskets, trays, or storage boxes. These can help corral scattered items and make things look more organized without a lot of effort. Having a dedicated space for everything can also reduce the chances of clutter accumulating.
  
      Finally, end your 10-minute decluttering session with a quick sweep of the area. Put things back in their designated places and wipe down surfaces if needed. This step can give you a sense of accomplishment and ensure the space stays tidy for longer.
  
      By committing just 10 minutes each day, you’ll notice how much easier it becomes to maintain a clean and organized space. Not only does this improve the aesthetics of your home, but it also helps clear your mind. A clutter-free environment promotes productivity, reduces stress, and enhances your overall well-being. With this simple daily routine, you can create a peaceful, organized space without feeling overwhelmed.
    `
  },
  {
    id: "4",
    title: "The Power of Gratitude: How Saying 'Thank You' Can Change Your Life",
    description:
      "Learn how practicing gratitude every day can boost your mood, reduce stress, and improve your relationships. Studies have shown that people who regularly practice gratitude experience less stress and more happiness. Here’s how to start...",
    date: "15.12.2024",
    category: "by-SoulWrites",
    image: "/thankyou.jpg",
    content: `
      Gratitude is a simple yet transformative practice that can have a profound impact on your life. Studies have shown that people who regularly practice gratitude experience lower levels of stress, improved mood, and better overall well-being. It's a powerful tool for shifting your focus from what you lack to what you have, fostering a sense of abundance and positivity.
  
      One of the most effective ways to start practicing gratitude is by keeping a gratitude journal. Each day, take a moment to write down at least three things you're thankful for. These can be as small as the warmth of the sun on your face, a kind gesture from a friend, or a moment of peace in your day. The key is to recognize and appreciate the good things, no matter how minor they seem.
  
      In addition to journaling, make a conscious effort to say "thank you" more often. Whether it's thanking someone for holding the door open, expressing appreciation for help at work, or simply acknowledging someone's kindness, expressing gratitude reinforces positive emotions for both you and the recipient. It helps build stronger, more meaningful connections and creates a culture of kindness and mutual respect.
  
      Gratitude isn't just about the big moments—it's also about the small, everyday things that can often go unnoticed. Take a moment to savor simple pleasures, like a warm cup of coffee in the morning, the sound of rain, or the beauty of nature. These small moments of gratitude can lift your spirits and help you find joy in the present, even during challenging times.
  
      On days when you're feeling down, practicing gratitude can be especially powerful. It helps shift your perspective from what isn't going well to what is going well, even if it's just one small thing. Focusing on gratitude can help you feel more grounded, reduce anxiety, and increase feelings of contentment.
  
      Finally, take the time to share your gratitude with others. A thank-you note, a quick text message, or simply expressing your appreciation face-to-face can brighten someone's day and strengthen your relationships. Gratitude has a ripple effect—when you express it, it not only uplifts you but also uplifts those around you.
  
      By practicing gratitude every day, you can change your outlook on life, reduce stress, and improve your overall happiness. It’s a simple yet powerful tool for creating a positive mindset and nurturing the relationships that matter most. So, start today—take a moment to be thankful, and watch how it transforms your life.
    `
  },
  {
    id: "5",
    title: "Breaking Free from the Chains of Self-Doubt: A Guide to Building Confidence",
    description:
      "Overcome self-doubt and unlock your true potential. Learn actionable steps to boost your confidence and hear inspiring success stories of individuals who turned their self-doubt into strength.",
    date: "15.12.2024",
    category: "by-SoulWrites",
    image: "/doubt.webp",
    content: `
      Self-doubt can be crippling—it holds us back from pursuing our dreams, limits our potential, and clouds our ability to see our true worth. We all experience moments of doubt, but it becomes problematic when we allow it to define us. The good news? It's possible to break free from self-doubt and build a lasting sense of self-confidence.
  
      One of the first steps in building confidence is shifting your mindset. Instead of focusing on what you lack, start acknowledging your strengths. Reflect on your achievements, big or small, and remind yourself of the qualities that make you unique. This positive reinforcement helps counter the negative self-talk that fuels doubt.
  
      Another powerful tool for combating self-doubt is setting small, achievable goals. When you take action and achieve something, no matter how minor it seems, it reinforces the belief in your capabilities. Each success adds to your confidence and helps you build momentum, making it easier to take on bigger challenges.
  
      Surrounding yourself with supportive people is also crucial. Positive relationships can uplift you and remind you of your worth, especially when your own self-perception falters. Seek out individuals who inspire and motivate you, those who believe in you even when you're struggling to believe in yourself.
  
      One of the most important aspects of overcoming self-doubt is learning to embrace failure as part of the journey. Everyone experiences setbacks—it's how you respond to them that matters. Instead of allowing failure to reinforce your doubts, see it as an opportunity for growth. Each mistake is a lesson that brings you closer to your goals.
  
      Take the story of J.K. Rowling, for example. Before she became one of the most successful authors in the world, she faced countless rejections and moments of self-doubt. Her perseverance in the face of adversity is a testament to the power of self-belief. Like her, you too have the strength to overcome obstacles and achieve your goals.
  
      Building confidence doesn't happen overnight. It requires consistent effort, self-compassion, and a willingness to challenge the negative beliefs that hold you back. But with time, you can break free from the chains of self-doubt and step into your true potential.
  
      Start today—acknowledge your strengths, take small steps toward your goals, and surround yourself with positivity. Trust in your abilities, and you'll find the confidence to achieve anything you set your mind to.
    `
  },
  {
    id: "6",
    title: "The Power of Storytelling: How Sharing Your Story Can Heal and Inspire",
    description:
      "Explore how telling your story can be a powerful tool for healing and inspiring others. Sharing personal experiences can build connections, foster empathy, and encourage growth. Here’s why your story matters...",
    date: "16.12.2024",
    category: "by-SoulWrites",
    image: "/storytelling.webp",
    content: `
      Storytelling has been a fundamental part of human culture for centuries. From ancient myths and legends to personal anecdotes, stories have the power to connect us across time and space. But beyond just entertainment or tradition, storytelling is a profound tool for healing and personal growth. When you share your story, you open up a window into your world, allowing others to see the raw, unfiltered experiences that have shaped you.
  
      One of the most powerful aspects of storytelling is its ability to create connections. When we tell our stories, we invite others into our lives, fostering empathy and understanding. We often discover that we are not alone in our struggles, and others have walked similar paths. These shared experiences can bridge gaps between people, no matter their background or differences, and create a sense of community.
  
      Storytelling is also a powerful way to heal. When we speak or write about our experiences, it allows us to process and make sense of our emotions. The act of recounting past challenges, triumphs, and losses provides a space for catharsis. It helps us release pent-up feelings, gain clarity, and see things from a new perspective. It can be an incredibly freeing experience, allowing us to let go of past pain and embrace healing.
  
      Furthermore, sharing your story can be a source of inspiration for others. It’s easy to feel isolated in the midst of difficulties, but when someone shares their personal journey—whether it’s overcoming adversity, achieving success, or learning important life lessons—it can spark hope and motivation in others. Your story may be the beacon of light someone else needs to keep going, to believe in themselves, or to take the first step toward change.
  
      But storytelling is not just about speaking your truth—it’s also about encouraging others to do the same. Vulnerability breeds vulnerability. When you share your story, you create a safe space for others to share theirs. This open exchange of experiences creates a ripple effect, where others feel empowered to speak their truth, knowing they are heard and valued. This cycle of storytelling can strengthen communities, build support systems, and nurture compassion.
  
      The impact of storytelling extends beyond just personal growth or connection. It can also be a tool for social change. When stories are told with the intention to raise awareness about important issues—whether it’s mental health, social justice, or personal empowerment—they can influence attitudes, challenge perceptions, and spark action. Through the power of narrative, storytelling can shine a light on problems that need attention, rally support for causes, and inspire collective efforts to bring about positive change.
  
      Whether you choose to write a blog, share your story on social media, or speak in front of an audience, your story matters. Every person’s experiences are valuable and worth sharing. In a world that often values perfection and curated images, storytelling offers a refreshing reminder that we are all human, with flaws, challenges, and triumphs that make us who we are.
  
      So, don’t hold back. Don’t be afraid to share your story. The world needs your voice. Your experiences can heal, inspire, and create connections that transcend boundaries. You never know—your story might be the key to unlocking someone else’s healing journey or inspiring them to take action in their own life. The power of storytelling is immeasurable, and it’s a gift that each of us has the ability to share.
    `
  },
  {
    id: "7",
    title: "The Joy of Simple Things: How to Find Happiness in the Everyday",
    description:
      "Discover how finding joy in the simple moments can lead to greater happiness and fulfillment in life. Sometimes, the smallest things hold the most meaning.",
    date: "28.12.2024",
    category: "by-SoulWrites",
    image: "/simplethings.webp",
    content: `
      In the hustle and bustle of daily life, we often overlook the small moments that bring true happiness. We chase big goals, milestones, and material achievements, thinking they will bring us lasting joy. However, true fulfillment often comes from the simple things that are easily taken for granted.
  
      The first step to embracing the joy of simplicity is slowing down. In a world full of distractions, it’s easy to miss the beauty in the ordinary. Take a moment each day to pause and appreciate the little things: the warmth of a cup of tea, the sound of birds singing in the morning, or a quiet moment with a good book. These small moments are fleeting, but they hold the power to shift our focus away from stress and towards contentment.
  
      Next, practice mindfulness. Being present in the moment allows us to fully experience the joy of simple things. Whether it's savoring a meal, feeling the warmth of the sun on your skin, or taking a walk through nature, being mindful helps us connect more deeply with our surroundings and appreciate the beauty in everyday life. The more you practice mindfulness, the more you’ll notice the small joys that often go unnoticed.
  
      Another way to find joy in simplicity is through gratitude. When we focus on what we already have rather than what we lack, we begin to see the richness in our lives. Take a moment each day to reflect on the simple blessings—family, health, a safe home, or even a good night's sleep. Gratitude brings our attention back to what matters most and fills our hearts with joy.
  
      Finally, simplify your environment. Decluttering your physical space can lead to a decluttered mind. When we remove excess, we create room for peace and clarity. A tidy, calm space encourages relaxation and makes it easier to appreciate the small joys of life.
  
      The joy of simple things is available to all of us. It’s not about grand gestures or extravagant experiences—it’s about appreciating the moments that make life meaningful. By slowing down, practicing mindfulness, expressing gratitude, and simplifying our environment, we can find happiness in the everyday and live a more fulfilling life.
    `
  }
];

const SinglePage = () => {
  const params = useParams();
  const { id } = params;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    // Get stored comments for this specific post from localStorage
    const storedComments = localStorage.getItem(`comments_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [id]); // Re-fetch comments when the post ID changes

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add new comment to the list and update localStorage
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments)); // Save comments with post ID as key
    setComment(""); // Reset the comment input field
  };

  // Assuming `posts` is an array of post objects (from the context or state)
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
          <h4 className="text-xl font-semibold mb-2">Comments</h4>
          <div className="mt-4 space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="border-b pb-4 mb-5">
                  <p className="text-gray-700 dark:text-white ">{comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mb-10">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;