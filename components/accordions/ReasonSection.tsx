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
type MyProps = {
  reasonSection : any;
}
const ReasonsSection = (props: MyProps) => {
  const { reasonSection } = props;
  console.log(reasonSection);
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center mb-5">
        {/* <span className="text-red-500 font-semibold">Why SECI?</span> */}
        <h2 className="text-3xl font-bold text-gray-800 mt-2">{reasonSection?.title}</h2>
        <div className="text-gray-600 mt-4" dangerouslySetInnerHTML={{__html: reasonSection?.description}}>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-5">
        <a href={reasonSection?.linkUrl} className=""><button className=" bg-red-600 py-2 rounded text-white font-bold lg:w-[250px] flex justify-center uppercase"><span className="text-center px-1">{reasonSection?.linkText}</span></button></a>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasonSection?.featuredData.map((reason, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full">
                <span className="text-2xl font-bold">{idx+1}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                <div className="mt-2 text-gray-600"dangerouslySetInnerHTML={{__html: reason.description}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
