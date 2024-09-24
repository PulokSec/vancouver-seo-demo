'use client';
import React, { useState } from 'react';
import SeoTabs from '../service-components/SeoTabs';
import SeoContent from '../service-components/SeoContent';


const SeoTabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("SEO Audit");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex flex-col md:flex-row mt-20">
      <SeoTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <SeoContent activeTab={activeTab} />
    </section>
  );
};

export default SeoTabComponent;
