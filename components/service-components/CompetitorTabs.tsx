import React from 'react';
export const competitorAnalysisData = [
  {
    title: "1. It helps you get to know your competition",
    description: `Conducting a competitor analysis for digital marketing is critical because it enables you to identify your competition. 
    If you have a brick and mortar location, you may already know some of your local competitors, but they aren’t your only competitors online.
    With a competitor analysis, you help your business identify companies that you’re competing against for customers. 
    It gives you a starting point for identifying strategies that are working for your competition, so you can figure out how to create more effective strategies for your own business.`,
    actionItem: `Search products, services, topics, and more related to your brand and see what pops up in the search results. It will give you a good starting point for understanding your direct online competitors. So, for example, if you sell flowers, try searching "wedding flower shops" to see who pops up in search.`
  },
  {
    title: "2. It helps you better understand your market",
    description: `By analyzing the competition, you’ll also get a better sense of your market. 
    Competitor analysis helps you see which segments are over or under-served, 
    allowing you to adjust your own business strategies accordingly. Knowing the landscape gives you an edge.`,
    actionItem: `Use tools like Google Trends or social media listening tools to discover trends and gaps in the market. Stay updated on the evolving customer needs to stay competitive.`
  },
  {
    title: "3. You learn your competition’s strengths and weaknesses",
    description: `Competitor analysis allows you to identify both strengths and weaknesses of your competitors. 
    Understanding these can give you an opportunity to exploit their weaknesses or learn from their strengths to improve your own offerings.`,
    actionItem: `Perform a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) of your competitors to evaluate how they compare to your business.`
  }
];


interface CompetitorTabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const CompetitorTabs: React.FC<CompetitorTabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="w-full md:w-1/4 h-auto overflow-y-auto bg-white">
    <ul className="space-y-2 pl-2 md:pl-0 md:pr-4">
      {competitorAnalysisData.map((tab, index) => (
        <li key={tab.title} className="list-none">
          <button
            className={`block text-left w-full py-3 px-4 transition-all duration-200 border-b-4 ${
              activeTab === tab.title
                ? 'text-blue-600 border-blue-600 bg-gray-100 font-semibold'
                : 'text-gray-800 border-transparent hover:border-blue-600 hover:bg-gray-50'
            }`}
            onClick={() => onTabClick(tab.title)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default CompetitorTabs;
