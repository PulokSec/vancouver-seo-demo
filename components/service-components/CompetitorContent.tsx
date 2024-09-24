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


interface CompetitorContentProps {
  activeTab: string;
}

const CompetitorContent: React.FC<CompetitorContentProps> = ({ activeTab }) => {
  const activeContent = competitorAnalysisData.find((tab) => tab.title === activeTab);

  return (
    <div className="w-full md:w-3/4 p-4 md:p-6">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{activeContent?.title}</h2>
        <p>{activeContent?.description}</p>
      </div>
    </div>
  );
};

export default CompetitorContent;
