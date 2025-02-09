"use client";

import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Landscape Photography",
      excerpt: "Discover the secrets to capturing stunning landscapes with tips on composition, lighting, and gear.",
      date: "October 10, 2023",
      author: "Qamrul Hassan",
      tags: ["Photography", "Landscape"],
      image: "/images/landscape.jpg",
    },
    {
      id: 2,
      title: "Mastering Portrait Photography",
      excerpt: "Learn how to take captivating portraits with techniques for posing, lighting, and post-processing.",
      date: "October 5, 2023",
      author: "Qamrul Hassan",
      tags: ["Photography", "Portrait"],
      image: "/images/old.jpg",
    },
    {
      id: 3,
      title: "Street Photography: Capturing Life",
      excerpt: "Explore the world of street photography and how to tell compelling stories through your lens.",
      date: "September 28, 2023",
      author: "Qamrul Hassan",
      tags: ["Photography", "Street"],
      image: "/images/live.jpg",
    },
  ];

  return (
    <div className="min-h-screen mt-[80px] bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Insights, tips, and stories from my photography journey.</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section */}
                
<div className="relative w-full h-96">
  <img
    src={post.image}
    alt={post.title}
    className={`absolute top-0 left-0 w-full h-full ${
      post.id === 2 || post.id === 3 ? "object-contain" : "object-cover"
    } brightness-100 hover:brightness-110 transition-all duration-300 rounded-t-xl`}
  />
</div>

                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-2">
                    <FaTags className="text-gray-400" />
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.id} className="border-b border-gray-600 pb-4">
                    <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
                      {post.title}
                    </a>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Photography", "Landscape", "Portrait", "Street", "Travel", "Nature"].map((tag, index) => (
                  <span key={index} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
