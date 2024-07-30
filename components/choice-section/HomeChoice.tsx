import React from 'react';
import Image from 'next/image';
import TabRenovation from '../tab-sections/TabRenovation';

const HomeChoiceSection: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-gray-50 to-blue-50 px-4 md:px-10 lg:px-20 lg:mt-20 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 md:mr-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg pt-5">
          When it comes to optimizing your digital presence in Vancouver, you have a plethora of options. However, making the right choice in selecting an SEO agency can significantly impact your online success. Here’s why choosing an SEO service is the best decision you can make for your SEO needs.
          </p>
          <a href="#" className="mt-6 inline-block text-blue-500 font-semibold">Contact Us →</a>
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <Image
          src="https://vancouverseo.com/wp-content/uploads/2023/10/vancouver-seo-services.webp" // replace with your actual image path
          alt="Team working"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      </div>
      <TabRenovation />
    </section>
  );
};

export default HomeChoiceSection;
