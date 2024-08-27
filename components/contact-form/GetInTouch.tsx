'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const GetInTouch = () => {
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-gray-100">
      <section className="flex flex-col md:flex-row justify-between items-start px-4 md:px-10 py-16">
      {/* Left Side */}
      <div className="flex flex-col items-center w-full md:w-1/2 mb-10 md:mb-0 justify-center mt-[10%]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">An Award Winning Company</h2>
        <p className="text-center mb-8">
          Please share your contact details and website URL for a detailed marketing analysis of your business.
        </p>
        {/* <div className="flex justify-around w-full">
          <div className="mx-4">
            <Image
              src="/path/to/award1.png"
              alt="Award 1"
              width={100}
              height={100}
              className="h-24"
            />
          </div>
          <div className="mx-4">
            <Image
              src="/path/to/award2.png"
              alt="Award 2"
              width={100}
              height={100}
              className="h-24"
            />
          </div>
          <div className="mx-4">
            <Image
              src="/path/to/award3.png"
              alt="Award 3"
              width={100}
              height={100}
              className="h-24"
            />
          </div>
        </div> */}
      </div>

      {/* Divider */}
      <div className="hidden md:block h-px md:h-[600px] w-full md:w-[2px] bg-gray-800 md:mx-8"></div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 border border-gray-400 rounded">
        <div className="py-10">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Get in touch</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="block text-gray-700">Service Required?</label>
            <select
              className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="" disabled>
                Service Required?
              </option>
              <option value="SEO">SEO</option>
              <option value="PPC">PPC</option>
              <option value="SMM">SMM</option>
              <option value="GP">GP</option>
              <option value="E-Comm">E-Comm</option>
              <option value="Local SEO">Local SEO</option>
              <option value="None">None</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]"
              rows={4}
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GetInTouch;
