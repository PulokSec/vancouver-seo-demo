"use client";
import React, { useState } from 'react';
import CompetitorTabs from '../service-components/CompetitorTabs';
import CompetitorContent from '../service-components/CompetitorContent';


const CompetitorTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1. It helps you get to know your competition");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex flex-col md:flex-row mt-20">
      <CompetitorTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <CompetitorContent activeTab={activeTab} />
    </section>
  );
};

export default CompetitorTabsSection;
