import Image from 'next/image';
import React from 'react';
const featuredData = [
  {
    "number": "1",
    "title": "Award Winning SEO Company In India",
    "content": "Over the years we have been serving our clients with exceptional services. Thanks to all our clients who have put their trust upon us and helped us in becoming the Best SEO agencies in India. We are proud to be recognized as one of the most awarded SEO companies in India.",
    "image": "/path/to/image1.jpg"
  },
  {
    number: "2",
    title: "14+ Years of Industry Experience",
    content: "Serving the local and global market for over a decade has enabled us to develop an effective system for SEO optimization that delivers results. Our goal-oriented and ROI-focused approach makes us stand out from the crowd.",
    image: "/path/to/image2.jpg"
  },
  {
    number: "3",
    title: "Certified SEO Specialists",
    content: "Our certified SEO experts have experience in the latest SEO tools, technologies, and techniques that they use to streamline your growth. Having worked on thousands of SEO projects over the years, our team has the expertise you can bank upon.",
    image: "/path/to/image3.jpg"
  },
  {
    number: "4",
    title: "24/7 Customer Support",
    content: "At Ranking By SEO, customer support is one of our top priorities. Our clients can get in touch with us 24/7 with their queries, concerns, and updates, etc.",
    image: "/path/to/image4.jpg"
  },
  {
    number: "5",
    title: "Global Outreach",
    content: "Our SEO services have a global reach, helping clients from various countries achieve their business goals through effective SEO strategies.",
    image: "/path/to/image5.jpg"
  },
  {
    number: "6",
    title: "Innovative SEO Solutions",
    content: "We continuously innovate our SEO techniques to keep up with the latest trends and algorithm changes, ensuring top-notch services for our clients.",
    image: "/path/to/image6.jpg"
  },
  {
    number: "7",
    title: "Client-Centric Approach",
    content: "Our approach is always client-centric, focusing on understanding our clients' needs and delivering tailored SEO solutions that meet their specific requirements.",
    image: "/path/to/image7.jpg"
  },
  {
    number: "8",
    title: "Proven Track Record",
    content: "With a proven track record of successful SEO projects, we have established ourselves as a trusted partner for businesses looking to enhance their online presence.",
    image: "/path/to/image8.jpg"
  }
]


const NumFeatured: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto p-4">
      {featuredData.map((achievement, index) => (
        <div
        key={index}
        className={`flex flex-col md:flex-row ${index < 4 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}
      >
        <div className="md:w-1/2 p-4">
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-orange-500 mr-4">{achievement.number}</span>
            <h3 className="text-2xl font-bold">{achievement.title}</h3>
          </div>
          <p>{achievement.content}</p>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src={achievement.image}
            alt={achievement.title}
            className="rounded shadow-md"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </div>
      ))}
    </div>
  );
};

export default NumFeatured;
