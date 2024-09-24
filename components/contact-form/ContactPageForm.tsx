'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BiSolidMessageRounded } from "react-icons/bi";
import { TbLocationFilled } from "react-icons/tb";
import { BsFillPhoneFill } from "react-icons/bs";


export default function ContactPageForm() {
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="bg-white">
      <section className="py-5 lg:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start px-5 py-16">
      {/* Left Side (Form) */}
      <div className="w-full md:w-3/6">
        <div className="py-10">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-center">Work with us.</h3>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded text-gray-900 lg:w-[400px] xl:w-[600px] border border-solid  focus:border-gray-500 outline-none"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded text-gray-900 lg:w-[400px] xl:w-[600px] border border-solid  focus:border-gray-500 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 rounded text-gray-900 lg:w-[400px] xl:w-[600px] border border-solid  focus:border-gray-500 outline-none"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="block text-gray-700">Service Required?</label>
            <select
              className="w-full p-2 rounded text-gray-900 lg:w-[400px] xl:w-[600px] border border-solid  focus:border-gray-500 outline-none"
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
              className="w-full p-2 rounded text-gray-900 lg:w-[400px] xl:w-[600px] border border-solid  focus:border-gray-500 outline-none"
              rows={4}
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </form>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="hidden md:block h-px md:h-[600px] w-full md:w-[2px] bg-gray-800 md:mx-8"></div> */}

      {/* Right Side  */}
      <div className="flex flex-col items-start px-5 w-full md:w-3/6 mb-10 md:mb-0 justify-center bg-[#F2F4F7] rounded-xl h-[600px] py-10">
      <div className="mt-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-start">Request a Consultation</h2>
        <p className="text-center mb-8 lg:text-start">
        If you’re interested in discussing a specific project or learning more about our services, you can fill out our online consultation request form. This form will help us understand your needs in advance, ensuring our initial conversation is as productive as possible.
        </p>
      </div>
      <div className="flex justify-start items-start gap-4 mt-5">
        <div className="mt-1">
        <span className=" text-[#3864E3]"><BiSolidMessageRounded className="w-[20px] h-[20px]"/></span>
        </div>
        <div className="flex flex-col items-start">
        <p className="text-2xl md:text-2xl font-bold">Email us</p>
        <p className=" mt-2">
        Please fill the form or send us an email at
        </p>
        <p className="text-lg font-semibold">
        contact@company.com
        </p>
        </div>
      </div>
      <div className="flex justify-start items-start gap-4 mt-5">
        <div className="mt-1">
        <span className="text-[#3864E3]"> <TbLocationFilled className="w-[20px] h-[20px]" /></span>
        </div>
        <div className="flex flex-col items-start">
        <p className="text-2xl md:text-2xl font-bold">Our Address</p>
        <p className=" mt-2">
        Grace our office with your presence
        </p>
        <p className="text-lg font-semibold">
        1192 Hamilton St. Vancouver, BC V6B 2S2
        </p>
        </div>
      </div><div className="flex justify-center items-start gap-4 mt-5">
        <div className="mt-1">
        <span className=" text-[#3864E3]"><BsFillPhoneFill  className="w-[20px] h-[20px]"/>
        </span>
        </div>
        <div className="flex flex-col items-start">
        <p className="text-2xl md:text-2xl font-bold">
        Reach Out Us Here!</p>
        <p className=" mt-2">
        Phone: +1(778)-655-8505
        </p>  
        </div>
      </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 bg-gray-100 rounded-xl p-5">
      <div className="flex flex-col w-3/4 px-2">
        <p className="text-sm lg:text-lg text-[#3864E3]">You should Contact Our Team Of Experts</p>
        <p className="text-2xl lg:text-4xl">
        We are here to sit with you to find the perfect solution
        </p>
        <p className="mt-2">Whether you have questions about our services, want to discuss a potential project, or simply want to say hello, we’re here to hear from you. Contact us through any of the methods below, and our team will be delighted to assist you.</p>
      </div>
      <div className="flex justify-center items-center gap-2 w-1/4">
      <div className="border border-[#3864E3] rounded text-[#3864E3] px-3 py-2 text-center">Monday - Saturday</div>
      <div className="border bg-[#3864E3] rounded text-white px-3 py-2 text-center">9AM - 7PM</div>
      </div>
    </div>
    </section>
    </div>
  )
}
