import Image from 'next/image'
import React from 'react'

export default function FeaturedServices() {
  const featuredData = [
    {
    number: "1",
    title: "Realizing the Necessity of SEO in Today's Business World",
    content: `<div class="elementor-element elementor-element-65eaf5d elementor-widget elementor-widget-heading" data-id="65eaf5d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
</div>
</div>
<div class="elementor-element elementor-element-dcd3585 elementor-widget elementor-widget-text-editor" data-id="dcd3585" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">

In today’s business world, the necessity of SEO cannot be overstated. As more and more businesses shift their operations online, the competition for visibility and customers has become fiercer than ever before. That’s why investing in a solid SEO strategy is crucial for the success of your business.

Whether you’re a small local business in Vancouver or a global enterprise, SEO can make all the difference in reaching your target audience and staying ahead of the competition. With local SEO in Vancouver, you can ensure that your business gets noticed by potential customers in your area, driving more foot traffic to your store and boosting your online visibility in the local market.

</div>
</div>`,
      image: "https://vancouverseo.com/wp-content/uploads/2023/10/vancouver-seo-services.webp"
    },
    {
      number: "2",
      title: "SEO as a Continuous Journey for Lasting Success",
      content: `<div class="elementor-element elementor-element-65eaf5d elementor-widget elementor-widget-heading" data-id="65eaf5d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-e2485b0 elementor-widget elementor-widget-heading" data-id="e2485b0" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
</div>
</div>
<div class="elementor-element elementor-element-6153e6c elementor-widget elementor-widget-text-editor" data-id="6153e6c" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">

However, the journey doesn’t end there. SEO is a continuous process, not a one-time effort. The digital landscape is always changing, and staying ahead means regularly evaluating and tweaking your SEO strategy. We continually track and analyze your website’s performance, making necessary adjustments to ensure consistent growth and success.

Embrace the journey to digital transformation with us. Let’s navigate the digital seas together and make your business stand out in the online world.

</div>
</div>
</div>
</div>`,
      image: "https://vancouverseo.com/wp-content/uploads/2023/10/vancouver-seo-services.webp"
    },
    {
      number: "3",
      title: "Vancouver SEO Experts Embrace the Power of Precision",
      content: `<div class="elementor-element elementor-element-65eaf5d elementor-widget elementor-widget-heading" data-id="65eaf5d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-e2485b0 elementor-widget elementor-widget-heading" data-id="e2485b0" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-68743b8 elementor-widget elementor-widget-heading" data-id="68743b8" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
</div>
</div>
<div class="elementor-element elementor-element-fa0d6bd elementor-widget elementor-widget-text-editor" data-id="fa0d6bd" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">

At our Vancouver SEO agency, we understand the power of local SEO and have the expertise to help you capitalize on it. We know that the key to a successful local SEO strategy is accuracy and consistency in your business’s online information. This means ensuring that your name, address, and phone number (NAP) are correctly and consistently listed across all online directories. It’s also crucial to encourage and manage customer reviews, as they play a significant role in influencing consumer decisions and improving your online reputation.

</div>
</div>
</div>
</div>
</div>
</div>`,
      image: "https://vancouverseo.com/wp-content/uploads/2023/10/vancouver-seo-services.webp"
    },
    {
      number: "4",
      title: "A Customer-Centric Approach to Digital Success",
      content: `<div class="elementor-element elementor-element-65eaf5d elementor-widget elementor-widget-heading" data-id="65eaf5d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-e2485b0 elementor-widget elementor-widget-heading" data-id="e2485b0" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-68743b8 elementor-widget elementor-widget-heading" data-id="68743b8" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<div class="elementor-element elementor-element-f972834 elementor-widget elementor-widget-heading" data-id="f972834" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
</div>
</div>
<div class="elementor-element elementor-element-6d9422c elementor-widget elementor-widget-text-editor" data-id="6d9422c" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">

However, it’s not just about our technical expertise. What sets us apart is our customer-centric approach. We take the time to understand your business, industry, and objectives thoroughly. Our aim is not to just improve your rankings, but to also drive valuable traffic to your website, enhancing your conversion rates. We believe that our success lies in the growth and success of your business. As such, we pride ourselves on creating tailored strategies that align with your brand’s vision and goals, setting you on a path for long-term digital success.

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
      image: "https://vancouverseo.com/wp-content/uploads/2023/10/vancouver-seo-services.webp"
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-4 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Get on Board with Us Today – Vancouver's SEO Experts</h2>
        <p className="mt-2 text-xl text-gray-600">As Vancouver’s SEO leaders, we are excited to partner with you on your digital transformation journey. When you choose us, you are choosing a team that is dedicated to understanding your unique business needs and creating a customized SEO strategy to help you achieve your goals. We are committed to using our extensive knowledge and expertise to bring your brand to the forefront of your industry’s digital landscape. Our track record of delivering results speaks for itself – but we’d love for you to experience it firsthand.</p>
      </div>
      <div className="">
      {featuredData.map((item, index) => (
        <div
        key={index}
        className={`flex flex-col ${ index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}
      >
        <div className="md:w-1/2 p-4 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">{item?.title}</h2>
        <div className="flex flex-col items-center justify-center mb-4 space-y-5 py-5" dangerouslySetInnerHTML={{ __html: item?.content }}>
            </div>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src={item?.image}
            alt={item?.title}
            className="rounded shadow-md"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}
