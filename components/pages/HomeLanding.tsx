import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import HomeBanner from '../hero-sections/HomeBanner'
import PartnersSlider from '../carousels/PartnerSlider'
import HomeAboutSection from '../about-sections/HomeAbout'
import HomeServices from '../service-sections/HomeServices'
import HomeChoiceSection from '../choice-section/HomeChoice'
import TabRenovation from '../tab-sections/TabRenovation'
import ReasonsSection from '../accordions/ReasonSection'
import ReviewSlider from '../carousels/ReviewSlider'
import TabSection from '../tab-sections/TabSection'
import FaqAccordion from '../accordions/FaqAccordion'
import HomeContact from '../contact-form/HomeContact'
import FeaturedServices from '../service-sections/FeaturedServices'

export default function HomeLanding() {
  return (
    <div>
      <main>
        <HomeBanner />
        <PartnersSlider />
        <HomeAboutSection />
        <HomeServices />
        <HomeChoiceSection />
        <ReasonsSection />
        <FeaturedServices />
        <ReviewSlider />
        <TabSection />
        <FaqAccordion />
        <HomeContact />
      </main>
    </div>
  )
}
