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


interface SeoContentProps {
  activeTab: string;
}

const SeoContent: React.FC<SeoContentProps> = ({ activeTab }) => {
  const activeContent = seoData.find((tab) => tab.title === activeTab);

  return (
    <div className="w-full md:w-3/4 p-4 md:p-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">{activeContent?.title}</h2>
        <p>{activeContent?.description}</p>
        <ul className="list-disc pl-6 mt-4">
          {activeContent?.points.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeoContent;
