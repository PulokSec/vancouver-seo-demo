import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import HomeBanner from '../hero-sections/HomeBanner'
import PartnersSlider from '../carousels/PartnerSlider'
import HomeAboutSection from '../about-sections/HomeAbout'
import HomeServices from '../service-sections/HomeServices'
import HomeChoiceSection from '../choice-section/HomeChoice'
import TabRenovation from '../tab-sections/TabRenovation'

export default function HomeLanding() {
  return (
    <div>
      <main>
        <HomeBanner />
        <PartnersSlider />
        <HomeAboutSection />
        <HomeServices />
        <HomeChoiceSection />
      </main>
    </div>
  )
}
