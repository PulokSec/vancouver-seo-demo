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
    <div className={`border rounded-lg overflow-hidden shadow-lg ${blog.featured ? 'col-span-2' : ''}`}>
      <Image src={blog.imageUrl} alt={blog.title} width={600} height={400} className="object-cover w-full h-48" />
      <div className="p-4">
        <span className="text-sm text-green-500">{blog.category}</span>
        <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
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
