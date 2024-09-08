"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app";

const tagColors: { [key: string]: string } = {
  "AI/ML": "bg-purple-600 text-white",
  "Web Development": "bg-blue-600 text-white",
  "Data Science": "bg-green-600 text-white",
  Cybersecurity: "bg-red-600 text-white",
  "Cloud Computing": "bg-orange-600 text-white",
  Python: "bg-yellow-600 text-white",
  // Add more tags and colors as needed
};

interface BlogPostProps {
  title: string;
  image: any;
  date: string;
  tag: string;
  blurbs: string;
  content: string;
  id: number;
}

interface BlogsCardProps {
  blogPost: BlogPostProps;
}

export function BlogsCard({ blogPost }: BlogsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <span
          className={`${
            tagColors[blogPost.tag] || "bg-gray-600 text-white"
          } absolute top-2 left-2 rounded-full px-2 py-1 text-xs font-semibold`}
        >
          {blogPost.tag}
        </span>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 mb-2 font-skModernRegular">
          {blogPost.date}
        </p>
        <h3 className="text-xl text-black font-skModernBold mb-2 flex-grow">
          {blogPost.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 font-skModernRegular">
          {blogPost.blurbs}
        </p>
        <Link
          href={`/post/${blogPost.id}`}
          className="text-green-600 hover:text-emerald-700 transition-colors duration-300 text-sm font-skModernRegular"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function BlogsTags() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = blogPosts.map((post) => post.tag);
    return ["All", ...new Set(allTags)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === "All") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.tag === selectedTag);
  }, [selectedTag]);

  return (
    <div className="inset-0 flex flex-col items-start bg-gradient-to-t ">
      <div className="flex flex-col py-4 sm:py-6 md:py-8 gap-y-4 px-4 sm:px-6 md:px-20 w-full">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`${
                tag === "All"
                  ? selectedTag === "All"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                  : tagColors[tag] || "bg-gray-600 text-white"
              } rounded-full px-3 py-1 text-xs md:text-sm font-semibold hover:opacity-80 transition-opacity duration-300`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogsCard key={post.id} blogPost={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
