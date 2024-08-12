import React from "react";
import footerLogo from "../assets/logo.jpg";
import Banner from "../assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "Men",
//     link: "/mens",
//   },
//   {
//     title: "Women",
//     link: "/womens",
//   },
//   {
//     title: "Kids",
//     link: "/kids",
//   },
// ];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white ">
      <div className="container ">
        <div data-aos="zoom-in" className="flex flex-col justify-center items-center text-center pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4 flex flex-row items-center ">
            <h1 className=" md:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              glamgait
            </h1>
            
          </div>

          {/* Footer Links
          <div className="grid grid-cols-2  col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold  text-centre mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.link}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div> */}
            {/* social links */}

            <div className="px-10 "> 
              <div className="flex items-center gap-3 mt-6 ">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/diksha-jaiswal-b9374a234">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;