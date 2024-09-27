import React from 'react'
import Logo from "../../assets/about-acm.svg";

const AboutACM = () => {
  return (
    <div>
        {/* 1st hero-section */}
        <div className="inline-block lg:flex lg:justify-between lg:items-center mt-12">
        <div className="w-100 mt-20 ml-0 lg:w-3/4 lg:ml-20 lg:mt-12">
        <h1 className="mainh1 font-extrabold text-5xl text-center lg:text-left lg:text-7xl text-[#006984]">WHAT IS ACM?</h1>
        <p className="text-gray-700 font-semibold text-md text-left m-5 md:text-left lg:text-left lg:text-lg xl:text-lg pt-12">
            The ACM Student Chapter at FAST-NUCES Karachi Campus is dedicated to
            the promotion of computing education, research and development.
            <br />
            <br />
            At ACM-NUCES KHI Chapter, you join a team that aims to change the
            methodology with which students approach computing and technology. We
            do our utmost to deliver the latest, and most innovative educational
            and professional development resources that our members require to
            strengthen their skill sets and enrich their careers. Most
            importantly, we take your view into consideration.
            <br />
            <br />
            At ACM-NUCES KHI Chapter. It’s all about YOU! Join Us and enjoy the
            truly unique benefits.
        </p>
        </div>
        <div>
        <img src={Logo} alt="Image" className="mx-auto hidden lg:flex" />
        </div>
        </div>
    </div>
  )
}

export default AboutACM