import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing",
    description: "Digital marketing is at the core of our strategy. In today's digital age, it's crucial to have a strong online presence. Our digital marketing services encompass a variety of channels and techniques to promote your brand effectively. We take a holistic approach to digital marketing, ensuring that your brand is consistently represented across the digital landscape.",
    points: [
      "Boost your presence in search results",
      "Capture targeted site traffic",
      "Turn site visitors into leads and customers",
    ],
    linkText: "Explore Digital Marketing",
  },
  {
    title: "Search Engine Optimization",
    description: "SEO is the foundation of online success. Our team of SEO experts is dedicated to improving your website's visibility in search engine results. We utilize a combination of on-page and off-page SEO techniques to enhance your website's ranking. Our keyword research, content optimization, and technical SEO services ensure that your site is well-positioned in search results.",
    points: [
      "Refine ad targeting",
      "Engage your audience where they browse online",
      "Maximize paid ad budget",
    ],
    linkText: "Explore Search Engine Optimization",
  },
  {
    title: "Google Ads Marketing",
    description: "As a certified Google Ads partner, we create and manage efficient pay-per-click (PPC) advertising campaigns that deliver a high return on investment. Google Ads marketing is a quick and effective way to drive targeted traffic to your website. Our team specializes in creating compelling ad copy, optimizing landing pages, and tracking the performance of your campaigns.",
    points: [
      "Fill up your lead pipeline",
      "Reach your most valuable audience",
      "Maximize conversion opportunities",
    ],
    linkText: "Explore Google Ads Marketing",
  },
  {
    title: "Website Design",
    description: "Your website is often the first interaction a potential customer has with your business. Our website design services are focused on creating visually appealing, user-friendly, and search-engine-optimized websites. We understand the importance of a well-structured website that not only looks good but also guides visitors toward conversion.",
    points: [
      "Unify sales and marketing data",
      "Prioritize leads with data-backed insights",
      "Turn opportunities into closed deals",
    ],
    linkText: "Explore Website Design",
  },
  {
    title: "Keyword Research",
    description: "Successful digital marketing starts with keyword research. We identify the most relevant and valuable keywords for your business. Our keyword research helps tailor your content and marketing strategies to ensure you're targeting the right audience.",
    points: [
      "Power up qualified leads",
      "Keep your sales team busy",
      "Drive more revenue from online marketing",
    ],
    linkText: "Explore Keyword Research",
  },
  {
    title: "Social Media Marketing",
    description: "In the era of social media, connecting with your audience is vital. Our social media marketing services help you create a strong online presence on various platforms. We'll craft engaging content, run effective advertising campaigns, and interact with your audience to build your brand's reputation.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Social Media Marketing",
  },{
    title: "Local SEO",
    description: "Local SEO is critical for businesses with a physical presence. We help you enhance your local visibility, connect with nearby customers, and increase foot traffic to your store. Our local SEO services include optimizing your Google My Business listing, creating local content, and managing",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Local SEO",
  },{
    title: "Pay Per Click Advertising",
    description: "PPC advertising is an excellent way to drive immediate traffic and conversions. Our pay-per-click advertising campaigns are carefully structured to maximize your return on investment. We create compelling ad copy, select the right keywords, and continually optimize your campaigns for better results.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Pay Per Click Advertising",
  },{
    title: "Content Creation",
    description: "Content is king in the digital realm. Our content creation services provide your audience with valuable, informative, and engaging content. We create blog posts, articles, product descriptions, and more, all designed to enhance your online presence and establish your brand as an authority in your industry.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Content Creation",
  },{
    title: "Link Building",
    description: "Quality backlinks from authoritative websites are essential for SEO. Our link-building services focus on acquiring high-quality, relevant backlinks to boost your website's authority and search engine ranking. We employ ethical and white-hat techniques to ensure long-term success.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Link Building",
  },{
    title: "E-commerce SEO",
    description: "For online retailers, our e-commerce SEO services are tailored to help you attract more customers and increase your sales. We understand the unique challenges of e-commerce and have the expertise to overcome them.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore E-commerce SEO",
  },
  {
    title: "Voice Search Optimization",
    description: "With the rise of voice-activated devices, voice search is becoming increasingly important. Our voice search optimization services ensure that your content is voice search-friendly, keeping you ahead of the curve in digital marketing.",
    points: [
      "Save time and money",
      "Automate campaigns for smarter marketing",
      "Harness the power of 500+ industry-certified professionals",
    ],
    linkText: "Explore Voice Search Optimization",
  },
];
type MyProps = {
  serviceSection : any;
}
const HomeServices = (props: MyProps) => {
  const { serviceSection } = props;
  return (
    <section className="flex flex-col items-center py-10 bg-gray-100 px-4 md:px-10 lg:px-20 mt-20 lg:mt-40">
      <div className="text-center mb-10">
      <p className="mt-2 text-xl text-gray-600">{serviceSection?.shortTitle}</p>
        <h2 className="text-3xl font-bold text-gray-800">{serviceSection?.title}</h2>
        <div className="mt-2 text-xl text-gray-600" dangerouslySetInnerHTML={{__html: serviceSection?.description}}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceSection?.featuredData.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
            <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{solution.title}</h3>
            <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{__html: solution.description}}></div>
            {/* <ul className="mt-4 space-y-2">
              {solution.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul> */}
            </div>
            <div className="border-t-2 border-t-[#356AE4] w-full text-end pr-3 flex items-center justify-center gap-2">
            <a href={solution.linkUrl} className="mt-2 text-blue-500 font-semibold pb-3">{solution.linkText}</a>
            <p className="text-blue-500"><FaArrowRight /></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
