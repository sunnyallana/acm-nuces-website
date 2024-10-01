import React from 'react'
import Logo from "../../assets/about-fast.png";


const AboutFast = () => {
  return (
    <div>
        {/* 1st hero-section */}
        <div className="inline-block lg:flex lg:justify-between lg:items-center mt-2 m-4 sm:ml-20">
        <div>
        <img src={Logo} alt="Image" className="mx-auto lg:flex" />
        </div>
        <div className="w-100 ml-0 lg:w-2/4 lg:ml-10 lg:mt-12">
        <h1 className="mainh1 font-extrabold text-5xl text-center lg:text-left lg:text-7xl text-[#006984]">WHAT IS FAST?</h1>
        <p className="text-gray-700 font-semibold text-md text-center md:text-left ml-0 md:text-left lg:text-left lg:text-lg xl:text-lg pt-12">
        Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premier University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries. The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot-Faisalabad. These campuses provide world class educational environment and recreational facilities to about over 11,000 students, around one quarter are female and over 500 skilled faculty members.
        </p>
        </div>
        </div>
    </div>
  )
}

export default AboutFast