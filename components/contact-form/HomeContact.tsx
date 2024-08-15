import React from 'react';
import Image from 'next/image';


type MyProps = {
  contactSection : any;
}
const HomeContact = (props: MyProps) => {
  const { contactSection } = props;
  return (
    <div className="flex justify-center items-center min-h-screen mt-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:bg-[#04BF7E] rounded-lg shadow-lg w-full max-w-5xl p-4 gap-4">
        <div className="right-[100px] relative z-1 w-full hodden lg:block">
          <Image
            src={contactSection?.leftImage?.node?.sourceUrl}
            alt={contactSection?.leftImage?.node?.altText}
            width={200}
            height={600}
            objectFit="cover"
            className="rounded shadow-md bg-white w-full lg:w-2/4 h-[80%] absolute top-[45%] left-0 translate-y-[-50%]"
            quality={100}
          />
          <Image
            src={contactSection?.rightImage?.node?.sourceUrl}
            alt={contactSection?.rightImage?.node?.altText}
            width={300}
            height={600}
            objectFit="cover"
            className="rounded shadow-md bg-white absolute top-[50%] left-[270px] translate-y-[-45%] w-2/4 h-[80%]"
            quality={100}
          />
        </div>
        <div className="flex-1 px-5 bg-white rounded-lg shadow-lg justify-center items-center py-10 w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">{contactSection?.title}</h2>
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Your name *"
                className="flex-1 p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Your phone number *"
                className="flex-1 p-2 border rounded w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Your work e-mail *"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Company website *"
              className="w-full p-2 border rounded"
            />
            <div className="space-y-2 p-4">
              <p>I'm interested in services: *</p>
              <div className="grid grid-cols-3 text-xs">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>SEO</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>SEM</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Copywriting</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Dev</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Linkbuilding</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Audit</span>
                </label>
              </div>
            </div>
            <textarea
              placeholder="What brings you to us today?"
              className="w-full p-2 border rounded"
              rows={4}
            />
            <div className="flex items-center justify-start space-x-2">
              <input type="checkbox" />
              <span className="text-xs">
                By providing your e-mail and clicking "Start here!", you give
                your voluntary consent to receive periodic commercial and
                marketing information from Delante. Read Privacy Policy to learn
                how we process personal data and what rights you have.
              </span>
            </div>
            <button className="w-full py-2 px-4 bg-[#DC2626] text-white rounded hover:bg-blue-700">
              Start here!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
