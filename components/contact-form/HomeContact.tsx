'use client';
import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

type MyProps = {
  contactSection : any;
}
const HomeContact = (props: MyProps) => {
  const { contactSection } = props;
  return (
    <div className="relative max-w-screen h-screen w-full bg-blue-300 bg-repeat bg-center">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-85">
        <Image
          src={contactSection?.bgImage?.node?.sourceUrl}
          alt={contactSection?.bgImage?.node?.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    <section className="flex justify-center items-center mt-20relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full max-w-5xl p-4 gap-10 rounded  py-10 relative px-5">
        <div className="relative z-1 w-full hidden lg:block">
        <Fade direction='down'delay={0.5} fraction={0.2} triggerOnce>
        <Image
                src={contactSection?.leftImage?.node?.sourceUrl}
                alt={contactSection?.leftImage?.node?.altText}
                className="rounded-2xl shadow-md w-full lg:w-[700px] h-[400px] bg-white"
                objectFit='contain'
                width={700}
                height={475}
                style={{
                  borderRadius: '100px 100px 300px 100px',
                }}
                quality={100}
              />
              </Fade>
              <Fade direction='up'delay={0.5} fraction={0.2} triggerOnce>
          <Image
                src={contactSection?.rightImage?.node?.sourceUrl}
                alt={contactSection?.rightImage?.node?.altText}
                className="rounded-2xl shadow-2xl w-full lg:w-[700px] h-[400px] left-[-100px]"
                objectFit='contain'
                width={700}
                height={475}
                style={{
                  borderRadius: '300px 100px 100px 100px',
                }}
                quality={100}
              />
          </Fade>
        </div>
        <div className="flex-1 px-5 bg-white rounded-lg shadow-lg justify-center items-center py-10 w-full relative">
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
            <button className="w-full py-2 px-4 bg-[#00C2CC] text-white rounded hover:bg-blue-700">
              Start here!
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomeContact;
