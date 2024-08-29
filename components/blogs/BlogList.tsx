'use client';
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Image from 'next/image';



// Sample blog data
const blogs = [
  {
    id: 1,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-checkout.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
    featured: true,
  },
  {
    id: 2,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-urls-best-practices-for-seo-and-user-experience.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },{
    id: 3,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify_sitemap2.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 4,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/Is-shopify-good-for-seo-1.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },{
    id: 5,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/Shopify-CDN-Explained-Benefits-Customization-6.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 6,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-product-description.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },{
    id: 7,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-about-us-page.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 8,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-about-us-page.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },{
    id: 9,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-about-us-page.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 10,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-about-us-page.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 11,
    title: 'Shopify Checkout: Nearly Everything You Need to Know',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '2 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/shopify-about-us-page.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  {
    id: 12,
    title: 'Shopify URLs: Best Practices for SEO and User Experience',
    author: 'Navneet Singh',
    date: '29 July, 2024',
    readTime: '3 min read',
    imageUrl: 'https://cdn.visibilitygurus.com/wp-content/uploads/Shopify-CDN-Explained-Benefits-Customization-6.jpg?strip=all&lossy=1&webp=80&avif=75&ssl=1',
    category: 'Shopify SEO',
  },
  // More blog posts...
];


const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Get the featured blog and the rest
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = otherBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-16">
      {/* Featured Blog */}
      {featuredBlog && (
        <div className="mb-8">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
      <div className="lg:w-4/6 border rounded-lg overflow-hidden shadow-lg w-full mx-5">
      <Image src={featuredBlog.imageUrl} alt={featuredBlog.title} width={700} height={400} className="object-cover w-full h-48 lg:h-[400px]" quality={100} /></div>
      <div className="p-4 lg:w-2/6">
        <span className="text-sm text-[#00C2CC]">{featuredBlog.category}</span>
        <h3 className="text-lg lg:text-4xl font-semibold mt-2">{featuredBlog.title}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span>{featuredBlog.author}</span>
          <span className="mx-1">•</span>
          <span>{featuredBlog.date}</span>
          <span className="mx-1">•</span>
          <span>{featuredBlog.readTime}</span>
        </div>
      </div>
      </div>
    </div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex">
          {Array.from({ length: Math.ceil(otherBlogs.length / blogsPerPage) }, (_, index) => (
            <li
              key={index + 1}
              className={`mx-1 cursor-pointer py-2 px-4 border rounded-full ${
                currentPage === index + 1 ? 'bg-[#00C2CC] text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogList;
