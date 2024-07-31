import React from 'react';

interface Reason {
  number: number;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    number: 1,
    title: 'SEO Company with Proven Track Record',
    description: 'SEO practices are ever-evolving, and we keep pace with it. Our professionals have years of experience to grow businesses by putting in the best SEO efforts.',
  },
  {
    number: 2,
    title: 'Only White Hat SEO Practices',
    description: 'Our SEO experts use data-driven and creative white hat SEO practices. With experience in various niches, you can trust our top-notch services for success.',
  },
  {
    number: 3,
    title: 'Transparent Reporting',
    description: 'We always share regular SEO progress reports on a weekly and monthly basis. We believe in transparency and keep our clients informed during the complete execution of SEO campaign.',
  },
  {
    number: 4,
    title: 'Dedicated SEO Teams',
    description: 'We only work in SEO, and we outperform businesses offering diversified portfolios that offer poor strategy development and execution.',
  },
];

const ReasonsSection: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-red-500 font-semibold">Why SECI?</span>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">4 good reasons for choosing SEO Experts Company India</h2>
        <p className="text-gray-600 mt-4">
          When you work with a top rated seo services company like SEO Experts Company India, you can expect high-quality custom SEO services that are capable of increasing page traffic, top search engine rankings of your business. Our team of SEO strategists, copywriters, link outreach specialists strives to offer seo services that yield long-term results for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason) => (
          <div key={reason.number} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full">
                <span className="text-2xl font-bold">{reason.number}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
