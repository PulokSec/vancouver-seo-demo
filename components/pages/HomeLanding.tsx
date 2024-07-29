import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import HomeBanner from '../hero-sections/HomeBanner'
import PartnersSlider from '../carousels/PartnerSlider'

export default function HomeLanding() {
  return (
    <div>
      <main>
        <HomeBanner />
        <section>
          <PartnersSlider />
        </section>
      </main>
    </div>
  )
}
