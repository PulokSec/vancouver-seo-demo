'use client';
import React, { useEffect, useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}
const items = [
  {
    title: "Custom SEO Services for Every Business",
    content: "Details about Custom SEO Services."
  },
  {
    title: "Up-To-Date SEO Strategies",
    content: "Details about Up-To-Date SEO Strategies."
  },
  {
    title: "Clear and Concise Communication",
    content: "Details about Clear and Concise Communication."
  },
  {
    title: "Cost-Effective Services",
    content: "Details about Cost-Effective Services."
  },
  {
    title: "Data-Driven Approach",
    content: "Details about Data-Driven Approach."
  },
  {
    title: "Comprehensive Services",
    content: "Details about Comprehensive Services."
  },
  {
    title: "Expert SEO Professionals",
    content: "Details about Expert SEO Professionals."
  }
]

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ↑
        </span>
      </button>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

const FaqAccordion: React.FC = () => {

  return (
    <div className="max-w-lg mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FaqAccordion;
