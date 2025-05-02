import React from 'react'
import Notification from '../components/Notification'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedSlider from '../components/FeaturedSlider'

const HomePage = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Hero />
      <FeaturedSlider />
    </div>
  )
}

export default HomePage
