import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrWordpress } from "react-icons/gr";

const ConnectSection: React.FC = () => {
  return (
    <div className=" bg-black mt-20 lg:mt-40">
      {/* Left Side */}
      <section className="flex flex-col md:flex-row justify-between items-center  text-white py-16 px-4 md:px-10">
      <div className="text-center md:text-left md:w-1/2 text-white">
      <p className="text-md">We love the Expertise</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Connect with Us Online</h2>
        <p className="mb-4">
        You can also connect with us on various social media platforms to stay updated on the latest trends in digital marketing and to engage with our team and the wider Vancouverseo.com community.
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-px md:h-[300px] w-full md:w-[2px] bg-[#00C2CC] md:mx-8"></div>

      {/* Right Side */}
      <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8 text-center">
      <p className="text-4xl lg:text-5xl font-bold mb-4">Find us on:</p>
        <p className="mb-4">
        1192 Hamilton St Vancouver, BC V6B 2S2
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
        <div className="mt-1">
        <span className=" text-[#3864E3]"><BsFacebook  className="w-[25px] h-[25px]"/>
        </span>
        </div>
        <div className="mt-1">
        <span className=" text-[#3864E3]"><AiFillTwitterCircle  className="w-[25px] h-[25px]"/>
        </span>
        </div>
        <div className="mt-1">
        <span className=" text-[#3864E3]"><GrWordpress  className="w-[25px] h-[25px]"/>
        </span>
        </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ConnectSection;
