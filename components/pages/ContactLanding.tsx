import ContactPageForm from '../contact-form/ContactPageForm'
import ConnectSection from '../elements/ConnectSection'
import VisitSection from '../elements/VisitSection'
import ContactBanner from '../hero-sections/ContactBanner'
import StrategySection from '../service-components/StratagySection'
import BoxServices from '../service-sections/BoxServices'
import CompetitorTabsSection from '../tab-sections/CompetitorTabsSection'
import SeoTabComponent from '../tab-sections/SeoTabComponent'

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
        <SeoTabComponent />
        <CompetitorTabsSection />
        <StrategySection bannerSection={data?.homeBannerSection}/>
        <BoxServices featuredSection={data?.investingSection}/>
      </main>
  )
}
