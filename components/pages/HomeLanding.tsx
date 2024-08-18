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
import FeaturedRounded from '../service-sections/FeaturedRounded'
import SeoBackground from '../hero-sections/SeoBackground'
import FeaturedTabService from '../service-sections/FeaturedTabService'

type MyProps = {
  data: any;
}
export default function HomeLanding(props: MyProps) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <main>
        <HomeBanner bannerSection={data?.homeBannerSection}/>
        <PartnersSlider partnerData={data?.partnerSection}/>
        <HomeAboutSection aboutSection={data?.aboutSection}/>
        <FeaturedTabService serviceSection={data?.serviceSection}/>
        <HomeChoiceSection choiceSection={data?.choiceSection}/>
        <FeaturedServices featuredSection={data?.importanceSection}/>
        <FeaturedRounded featuredSection={data?.powerSection}/>
        <FeaturedServices featuredSection={data?.investingSection}/>
        <FeaturedServices featuredSection={data?.necessarySection}/>
        <ReasonsSection reasonSection={data?.pointSection}/>
        {/* <ReviewSlider /> */}
        {/* <TabSection /> */}
        {/* <FaqAccordion /> */}
        <HomeContact contactSection={data?.homeContactSection}/>
      </main>
    </div>
  )
}
