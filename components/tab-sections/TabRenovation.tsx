'use client';
import { useState } from 'react';
import Image from 'next/image';

interface TabContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  listItems: string[];
}

const tabContents: TabContent[] = [
  {
    id: '1',
    title: 'Proven Track Record',
    description: 'Our track record in Vancouver SEO speaks for itself. We have successfully worked with numerous businesses in Vancouver and have consistently helped them achieve higher search engine rankings, increased organic traffic, and improved conversion rates. Our results are a testament to our expertise and commitment to our clients’ success.',
    imageUrl: '/MROIDashboardFX.png',
    imageAlt: 'Marketing dashboard',
    listItems: [
      'ROI dashboard to give you a complete view of your marketing impact per channel',
      'Content analytics tool to track the impact of content on your core business objectives',
      'Call tracking and AI conversation analysis that sheds light on phone call leads from specific marketing channels',
      'Easy-to-access archive of all reports across services, departments, and campaigns',
    ],
  },
  {
    id: '2',
    title: 'Customized SEO Strategies',
    description: 'We understand that no two businesses are the same. That’s why we don’t offer cookie-cutter solutions. Instead, we tailor our SEO strategies to meet your specific needs and goals. Whether you’re a local business in Vancouver or a global enterprise, our team will create a customized plan that maximizes your online visibility and delivers tangible results.',
    imageUrl: '/AnalyticsFX.png',
    imageAlt: 'AnalyticsFX',
    listItems: [
      'Centralize and enrich user data from website visits, calls, and forms to get a unified view of the customer journey',
      'Automatically create new audience segments that can be used to reach your audience across their multi-touchpoint journey',
      'Monitor competitor marketing strategies with data compiled from many industry-leading tools',
      'Integrate with your sales CRM or leverage our built-in CRM to leverage your sales data to refine your ad targeting and drive more qualified traffic to your site',
    ],
  },
  {
    id: '3',
    title: 'Cutting-edge SEO Techniques',
    description: 'The world of SEO is constantly evolving, with search engines updating their algorithms regularly. Our team of SEO experts stays on the cutting edge of industry trends and algorithm changes. We implement the latest techniques to keep your website competitive and ensure it adheres to best SEO practices.',
    imageUrl: '/ContentGeniusFX.png',
    imageAlt: 'ContentGeniusFX',
    listItems: [
      'Easily research, plan, and collaborate on content for your business',
      'Track the impact of all content on your core business objectives',
      'Rapidly deploy landing pages for PPC and email campaigns',
      'Personalize your content to increase engagement and conversion rate',
    ],
  },
  {
    id: '4',
    title: 'Exceptional Customer Support',
    description: 'We take pride in offering exceptional customer support. Your success is our top priority, and we’re here to support you every step of the way. Our dedicated team is available to address your concerns, provide guidance, and adjust strategies to meet your evolving business needs.',
    imageUrl: '/LeadManagerFX.png',
    imageAlt: 'LeadManagerFX',
    listItems: [
      'Find, monitor, and target ideal prospects for your business to drive more qualified leads to your sales team',
      'Instantly qualify and score incoming web leads to help your sales team prioritize the most qualified prospects',
      'Eliminate back and forth when booking appointments by allowing customers and prospects to directly select a time on your sales calendar',
      'Help your sales team close more deals with a customer relationship management tool that’s powerful and easy to use.',
    ],
  },{
    id: '5',
    title: 'Global and Local Expertise',
    description: 'Whether your target audience is global or local to Vancouver, we have the expertise to help you achieve your goals. Our local SEO services are designed to help Vancouver-based businesses gain a competitive edge in their market, while our global SEO strategies can expand your reach to a wider audience.',
    imageUrl: '/LeadManagerFX.png',
    imageAlt: 'LeadManagerFX',
    listItems: [
      'Find, monitor, and target ideal prospects for your business to drive more qualified leads to your sales team',
      'Instantly qualify and score incoming web leads to help your sales team prioritize the most qualified prospects',
      'Eliminate back and forth when booking appointments by allowing customers and prospects to directly select a time on your sales calendar',
      'Help your sales team close more deals with a customer relationship management tool that’s powerful and easy to use.',
    ],
  },{
    id: '6',
    title: 'Affordable SEO Solutions',
    description: 'We understand that budget constraints are a reality for many businesses. That’s why we offer affordable SEO solutions that provide excellent value for your investment. Our pricing is competitive, and we work to maximize your ROI.',
    imageUrl: '/LeadManagerFX.png',
    imageAlt: 'LeadManagerFX',
    listItems: [
      'Find, monitor, and target ideal prospects for your business to drive more qualified leads to your sales team',
      'Instantly qualify and score incoming web leads to help your sales team prioritize the most qualified prospects',
      'Eliminate back and forth when booking appointments by allowing customers and prospects to directly select a time on your sales calendar',
      'Help your sales team close more deals with a customer relationship management tool that’s powerful and easy to use.',
    ],
  },
];

const TabRenovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabContents[0].id);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
      <div className="w-full md:w-2/4">
        <ul className="flex flex-col">
          {tabContents.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer border rounded-lg shadow p-4 mt-3 ${activeTab === tab.id ? 'bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] text-white' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex flex-col items-center">
                {/* <Image src={tab.imageUrl} alt={tab.imageAlt} width={50} height={50} className="mb-2" /> */}
                <h3 className="text-center text-xl">{tab.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/4 mt-6">
        {tabContents.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] rounded-lg p-6  ${activeTab === tab.id ? 'block' : 'hidden'}`}
            aria-labelledby={`tab-${tab.id}-label`}
          >
            {/* <div className="text-center mb-4">
              <Image src={tab.imageUrl} alt={tab.imageAlt} width={500} height={300} className="mx-auto" />
            </div> */}
            {/* <h4 className="text-center">{tab.title}</h4> */}
            <p className="text-center md:text-left lg:text-lg text-white">{tab.description}</p>
            {/* <ul className="list-disc list-inside">
              {tab.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabRenovation;
