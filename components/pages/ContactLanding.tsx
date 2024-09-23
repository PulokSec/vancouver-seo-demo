import AboutSection from '../about-sections/AboutSection'
import HomeAboutSection from '../about-sections/HomeAbout'
import ReasonsSection from '../accordions/ReasonSection'
import PartnersSlider from '../carousels/PartnerSlider'
import TeamCarousel from '../carousels/TeamCarousel'
import HomeChoiceSection from '../choice-section/HomeChoice'
import ContactPageForm from '../contact-form/ContactPageForm'
import GetInTouch from '../contact-form/GetInTouch'
import HomeContact from '../contact-form/HomeContact'
import ConnectSection from '../elements/ConnectSection'
import JourneySection from '../elements/JourneySection'
import VisitSection from '../elements/VisitSection'
import AboutBanner from '../hero-sections/AboutBanner'
import ContactBanner from '../hero-sections/ContactBanner'
import HomeBanner from '../hero-sections/HomeBanner'
import FeaturedRounded from '../service-sections/FeaturedRounded'
import FeaturedServices from '../service-sections/FeaturedServices'
import FeaturedTabService from '../service-sections/FeaturedTabService'

type MyProps = {
  data: any;
}
export default function ContactLanding(props: MyProps) {
  const { data } = props;
  console.log(data);
  return (
      <main> 
        <ContactBanner bannerSection={data?.homeBannerSection}/>
        <ContactPageForm/>
        <VisitSection bannerSection={data?.homeBannerSection}/>
        <ConnectSection />
      </main>
  )
}
