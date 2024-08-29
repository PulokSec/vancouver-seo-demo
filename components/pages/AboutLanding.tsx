import AboutSection from '../about-sections/AboutSection'
import HomeAboutSection from '../about-sections/HomeAbout'
import ReasonsSection from '../accordions/ReasonSection'
import PartnersSlider from '../carousels/PartnerSlider'
import TeamCarousel from '../carousels/TeamCarousel'
import HomeChoiceSection from '../choice-section/HomeChoice'
import GetInTouch from '../contact-form/GetInTouch'
import HomeContact from '../contact-form/HomeContact'
import JourneySection from '../elements/JourneySection'
import AboutBanner from '../hero-sections/AboutBanner'
import HomeBanner from '../hero-sections/HomeBanner'
import FeaturedRounded from '../service-sections/FeaturedRounded'
import FeaturedServices from '../service-sections/FeaturedServices'
import FeaturedTabService from '../service-sections/FeaturedTabService'

type MyProps = {
  data: any;
}
export default function AboutLanding(props: MyProps) {
  const { data } = props;
  console.log(data);
  return (
      <main>
        <AboutBanner bannerSection={data?.homeBannerSection}/>
        <AboutSection aboutSection={data?.aboutSection}/>
        <JourneySection />
        <HomeChoiceSection choiceSection={data?.choiceSection}/>
        <FeaturedServices featuredSection={data?.importanceSection}/>
        <FeaturedRounded featuredSection={data?.powerSection}/>
        <FeaturedServices featuredSection={data?.investingSection}/>
        <FeaturedServices featuredSection={data?.necessarySection}/>
        <ReasonsSection reasonSection={data?.pointSection}/>
        {/* <ReviewSlider /> */}
        {/* <TabSection /> */}
        {/* <FaqAccordion /> */}
        <TeamCarousel />
        <GetInTouch/>
      </main>
  )
}
