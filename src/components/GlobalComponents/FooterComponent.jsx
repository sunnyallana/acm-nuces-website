import React from "react";
import Logo from "../../assets/acm.svg";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="bg-white">
      <footer>
      <div className="mx-auto w-full p-4 py-6 lg:py-8 pl-20">
          <div className="md:flex md:justify-between">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0 ml-9">
              <a
                href="https://www.acmdevday.com"
                className="flex items-center md:flex md:justify-center"
              >
                <img
                  className="mx-auto md:mx-0"
                  src={Logo}
                  width={"250vw"}
                  alt="Logo"
                />
              </a>
            </div>
            {/* Events and Social Links Section */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 mt-9 mr-9">
              {/* Our Events */}
              <div>
                <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">
                  Our Events
                </h2>
                <ul className="text-gray-600 font-medium text-lg">
                  <li className="mb-4">
                    <a
                      href="https://www.acmcoderscup.online/"
                      className="hover:underline text-gray-600"
                    >
                      Coders Cup
                    </a>
                  </li>
                  {/* Additional Events can be added here */}
                </ul>
                <ul className="text-gray-600 font-medium text-lg">
                  <li className="mb-4">
                    <a
                      href="https://www.acmdevday.com/"
                      className="hover:underline text-gray-600"
                    >
                      ACM Developers Day
                    </a>
                  </li>
                  {/* Additional Events can be added here */}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-lg font-bold text-[#031e2c] uppercase">
                  Meet the Developers
                </h2>

                <ul className="text-gray-600 font-medium text-lg">
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/sunnyallana/"
                      className="hover:underline text-gray-600"
                    >
                      Sunny Shaban Ali
                    </a>
                  </li>
                  {/* Additional Events can be added here */}
                </ul>
                <ul className="text-gray-600 font-medium text-lg">
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/owais-rafiq-639494253/"
                      className="hover:underline text-gray-600"
                    >
                      Owais Rafiq
                    </a>
                  </li>
                  {/* Additional Events can be added here */}
                </ul>
                <ul className="text-gray-600 font-medium text-lg">
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/ali-nazir-74b909275/"
                      className="hover:underline text-gray-600"
                    >
                      Ali Nazir
                    </a>
                  </li>
                  {/* Additional Events can be added here */}
                </ul>
              </div>

              {/* Connect with Us */}
              <div>
                <h2 className="text-lg font-bold text-[#031e2c] uppercase sm:ml-4">
                  Connect with Us
                </h2>
                <div className="flex flex-wrap mt-4 items-left justify-left">
                  <a
                    href="https://www.instagram.com/acmnuceskhi/"
                    className="text-[#031e2c] mx-1 lg:mx-4 text-xl sm:text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/acmnuceskhi"
                    className="text-[#031e2c] mx-1 lg:mx-4 text-xl sm:text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/acmnuces/"
                    className="text-[#031e2c] mx-1 lg:mx-4 text-xl sm:text-2xl"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border border-gray-300 h-0.5 mt-8 mb-3"></div>

          {/* Footer Text */}
          <h2 className="text-sm text-center text-gray-600">
            © 2024{" "}
            <a
              href="https://devday23.tech/index.html"
              className="hover:underline text-[#031e2c]"
            >
              ACM NUCES™
            </a>
            . All Rights Reserved.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;