import Image from 'next/image';
import React from 'react';

type BlogCardProps = {
  blog: {
    id: number;
    title: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
    category: string;
    featured?: boolean;
  };
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="">
      <div className="border rounded overflow-hidden shadow-lg"><Image quality={100} src={blog.imageUrl} alt={blog.title} width={600} height={400} className="object-cover w-full h-48 lg:h-[300px]" /></div>
      <div className="p-4">
        <span className="text-sm text-[#00C2CC]">{blog.category}</span>
        <h3 className="text-lg lg:text-2xl font-semibold mt-2">{blog.title}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span>{blog.author}</span>
          <span className="mx-1">•</span>
          <span>{blog.date}</span>
          <span className="mx-1">•</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
