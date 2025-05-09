import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
import Header from '../components/Header'

const ContactPage = () => {
  return (
    <div className='w-full mx-auto max-w-[1500px]'>
        <Notification />
        <Header />
        <div className="absolute top-26 left-0 w-full">
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default ContactPage
