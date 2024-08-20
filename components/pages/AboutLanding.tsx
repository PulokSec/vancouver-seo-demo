import HomeAboutSection from '../about-sections/HomeAbout'
import ReasonsSection from '../accordions/ReasonSection'
import PartnersSlider from '../carousels/PartnerSlider'
import TeamCarousel from '../carousels/TeamCarousel'
import HomeChoiceSection from '../choice-section/HomeChoice'
import HomeContact from '../contact-form/HomeContact'
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
        <TeamCarousel />
        <HomeContact contactSection={data?.homeContactSection}/>
      </main>
    </div>
  )
}
