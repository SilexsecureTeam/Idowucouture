import contact from '../assets/contact.png'
import {  HelpCircle, AlertTriangle, Headphones } from 'lucide-react';
import call from '../assets/call.png'
import geo from '../assets/geo.png'
import Secondletter from './Secondletter';

const Contact = () => {
  return (
    <div> 
        <div className="relative w-full">
            <div className="relative w-full h-[50vh] overflow-hidden">
  <div className="absolute inset-0 min-w-[100vw] min-h-[50vh]">
    <img src={contact} alt="term" className="h-full w-full object-cover object-center" />
  </div>
  </div>
  <div className="absolute left-1/2 -bottom-10 md:-bottom-16 z-40 transform -translate-x-1/2 bg-[#38CB89] px-5 py-3 md:text-5xl w-[80%] md:w-[50%] text-center text-xl font-bold text-black">
    Connect With Us
  </div>
</div>
           <div className="px-5 md:px-10 text-black lg:px-20 py-20 pt-30">
                  <div className="bg-[#7AB58D0D] px-5 mb-5 py-10 flex flex-wrap justify-center sm:justify-around ">
        {/* Header Section */}
        <div className="mb-6 max-w-[370px]">
            <h1 className='poppins font-medium text-[18px] md:text-[20px] text-[#6F6969] mb-1'>I'M NEW HERE</h1>
          <h1 className="text-2xl md:text-3xl font-medium text-black poppins mb-1">
            Interested in a product?
          </h1>
          <h2 className="text-[#575454] poppins font-meduim text-[20px] md:text-[25px]  mb-1">Talk to our sales team.</h2>
          <p className="text-gray-500 text-sm md:text-base poppins font-normal">
             From questions about insurance to online personal policy, we're here to connect & help get you started.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid gap-6 mb-6">
          {/* Enquiry Section */}
          <div className="bg-white max-w-[350px] sm:max-w-[500px] p-4 md:px-8 rounded-lg">
            <div className="flex items-center mb-3">
                <img src={call} alt="call" className="w-5 h-5  mr-2"  />
              <h2 className="text-lg poppins font-bold text[#383C39]">Enquiry now</h2>
            </div>
            <p className="text-black font-medium poppin px-8 text-[18px] mb-1">+234 80234545061</p>
            <p className="text-black font-medium poppin px-8 text-[18px] mb-1">+234 7030559507</p>
            <p className="text-black font-medium poppin px-8 text-[18px] mb-1">+234 81506748472</p>
            <p className="text-black font-medium poppin px-8 text-[16px] mb-1">contact@npfinsurance.com</p>
          </div>

          {/* Address Section */}
          <div className="bg-white max-w-[350px] sm:max-w-[500px] p-4 md:px-8 rounded-lg">
            <div className="flex items-center mb-3">
                <img src={geo} alt="geo" className="w-5 h-5  mr-2"  />
              <h2 className="text-lg poppins font-bold text[#383C39]">Address</h2>
            </div>
            <p className="text-black poppins text-[16px] max-w-[300px] md:max-w-[350px]">
              Idowu Couture, Shop 2 Hee 120, adjacent TASTIA Restaurant 38 Road junction, 3rd Avenue Gwarinpa
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center itrem-center flex-wrap gap-4">
          {/* Policy Question */}
          <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
            <HelpCircle className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">Policy Question</h3>
            <p className="text-gray-600 text-sm w-[200px]">
              Have a question about our products, please contact idowucouture.
            </p>
          </div>

          {/* Report a Case */}
          <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
            <AlertTriangle className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">Report a case</h3>
            <p className="text-gray-600 text-sm w-[200px]">
              We guide you through the simple, hassle-free process securing your items.
            </p>
          </div>

          {/* Ongoing Support */}
          <div className="bg-[#1F83401A] p-8 gap-4 rounded-lg flex flex-col items-center text-center">
            <Headphones className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">Ongoing Support</h3>
            <p className="text-gray-600 text-sm w-[200px]">
              Enjoy peace of mind with our 24/7 support and assistance whenever you need it.
            </p>
          </div>
        </div>
        <div className="mt-20">
            <Secondletter />
        </div>
           </div>
        </div>
  )
}

export default Contact
