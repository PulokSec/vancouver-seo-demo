'use client';
import React, { useState } from 'react';

interface TabContent {
  title: string;
  content: string;
}

const tabData: TabContent[] = [
  {
    title: "Digital Marketing",
    content: "Digital Marketing is the process of using digital channels to promote your brand. It involves everything from SEO to PPC as well as social media marketing, email marketing, and more. We are experts in using the latest digital marketing tools, technologies, and channels which enables us to serve our clients in the best possible way. At Ranking By SEO, we have dedicated teams with expertise in different digital marketing platforms. We come up with the best possible digital marketing course of action for your business based on your requirements as well as budget guidelines. Our professionals can help you identify potential areas of growth for your business and target them through the use of the right marketing channels."
  },
  {
    title: "Pay Per Click",
    content: "Details about Pay Per Click."
  },
  {
    title: "Social Media Marketing",
    content: "Details about Social Media Marketing."
  },
  {
    title: "Link Building",
    content: "Details about Link Building."
  },
  {
    title: "Guest Posting",
    content: "Details about Guest Posting."
  },
  {
    title: "Reputation Management",
    content: "Details about Reputation Management."
  }
];

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Additional Services We Provide</h2>
      <p className="text-center mb-8">
        Ranking By SEO is a top-rated SEO company in India that also offers a wide array of inbound and outbound marketing services to help grow your online visibility. Some of them are:
      </p>
      <div className="flex flex-wrap justify-center mb-4">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`p-2 m-2 text-sm font-medium rounded ${activeTab === index ? 'bg-orange-500 text-white' : 'bg-white text-black border'} transition-colors duration-200`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border rounded shadow-sm">
        <p>{tabData[activeTab].content}</p>
        <a href="#" className="text-orange-500 mt-4 inline-block">Know More &gt;</a>
      </div>
    </div>
  );
};

export default TabSection;
