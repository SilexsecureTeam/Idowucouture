import React from 'react'
import Notification from '../components/Notification'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedSlider from '../components/FeaturedSlider'
import Category from '../components/Category'

const HomePage = () => {
  return (
    <div className='w-full mx-auto max-w-[1500px]'>
      <Notification />
      <Header />
      <Hero />
      <FeaturedSlider />
      <Category />
    </div>
  )
}

export default HomePage
