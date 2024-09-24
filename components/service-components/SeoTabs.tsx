import React from 'react';
export const seoData = [
  {
    title: "SEO Audit",
    description: "We provide a free SEO audit to identify shortcomings of the store, compare them to best practices, do a competitor analysis, and create an efficient action plan to resolve issues. You will get:",
    points: [
      "Precise Technical and On-Site SEO Analysis",
      "Niche-specific management of Backlink profile",
      "Insightful content improvement suggestions",
      "A perfectly tailored and optimized Shopify SEO strategy"
    ]
  },
  {
    title: "Keyword Research",
    description: "Our SEO analysts identify high-business-valued keywords for your store’s products to bring in the right customers. The usage of premium tools solidifies our research as it helps us analyze & consolidate additional term ideas to connect with your target market effectively, and you can expect the following from us:",
    points: [
      "In-depth keyword analysis tailored to your store’s target audience, covering all search intent",
      "Valuable keyword suggestions for product titles, meta tags, and content, ensuring top ranking",
      "Long-tail & Semantic keywords to target highly relevant traffic with great conversion potential",
      "Competitor keyword analysis to bridge the gap between popular rival sites of your niche"
    ]
  },
  {
    title: "Technical SEO",
    description: "We analyze technical aspects of your store to improve SEO visibility. Our service includes:",
    points: [
      "Fixing crawl errors and improving indexability",
      "Optimizing website architecture and internal linking",
      "Ensuring mobile-friendliness and responsive design",
      "Improving page load speeds"
    ]
  },
  {
    title: "On-Page SEO",
    description: "On-Page SEO focuses on optimizing individual web pages to rank higher and earn more relevant traffic in search engines. We offer:",
    points: [
      "Optimizing meta and header tags",
      "Improving keyword density in content",
      "Internal linking optimization",
      "Creating keyword-focused URLs"
    ]
  },
  {
    title: "Link Building",
    description: "Our link-building strategy focuses on acquiring high-quality backlinks from relevant sites. Services include:",
    points: [
      "Acquiring high-quality backlinks",
      "Building relationships with influencers",
      "Ensuring natural link acquisition over time",
      "Monitoring backlink performance"
    ]
  },
  {
    title: "Speed Optimization",
    description: "Website speed is crucial for SEO and user experience. We optimize speed by:",
    points: [
      "Minimizing HTTP requests and file sizes",
      "Using browser caching and CDNs",
      "Optimizing images and media",
      "Reducing server response times"
    ]
  },
  {
    title: "Content Clustering",
    description: "Content clustering helps organize your content to improve SEO. Our services include:",
    points: [
      "Creating topic clusters and pillar content",
      "Optimizing internal linking structures",
      "Optimizing content for search engines",
      "Aligning content with the buyer’s journey"
    ]
  },
  {
    title: "CRO",
    description: "We help improve conversion rates through optimizing the customer journey. Services include:",
    points: [
      "A/B testing different elements of the store",
      "Improving CTA effectiveness",
      "Analyzing user flows",
      "Reducing cart abandonment rates"
    ]
  }
];


interface SeoTabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const SeoTabs: React.FC<SeoTabsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="w-full md:w-1/4 sticky top-0 h-auto overflow-y-auto bg-white md:bg-transparent">
      <ul className="space-y-2 pl-4 md:pl-0 md:pr-4">
        {seoData.map((tab) => (
          <li key={tab.title}>
            <button
              className={`block text-left w-full py-2 px-4 rounded-lg transition-all duration-200 ${
                activeTab === tab.title 
                  ? 'text-[#3C58DF] border-l-4 border-[#3C58DF] bg-gray-100' 
                  : 'text-gray-800'
              } hover:bg-gray-100`}
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

export default SeoTabs;
