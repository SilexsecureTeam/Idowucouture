import { ArrowRightIcon, ServerCogIcon, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Notification = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${isScrolled ? 'fixed top-0' : 'relative'} z-40 w-full transition-all duration-300`}>
      <div className='bg-[#38CB89] w-full text-black h-10 flex items-center justify-center relative'>
        <ServerCogIcon className='w-5 h-5 mr-2' />
        <div className="flex gap-x-2 text-[12px] sm:text-[14px] font-semibold">
          30% off storewide — Limited time!
          <span className='flex items-center gap-x-1 sm:border-b-2 border-b-1 pb-[0.5px] sm:pb-[1px] border-b-black'>
            Shop Now <ArrowRightIcon className='font-light' size={18} />
          </span>
        </div>
        <X className='absolute right-2 sm:right-4 top-3 w-3.5 h-3.5 cursor-pointer' />
      </div>
    </div>
  )
}

export default Notification
