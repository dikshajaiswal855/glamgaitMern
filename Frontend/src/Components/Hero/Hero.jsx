import React from "react";
// import hero_img from "../assets/Hero_shoe2.png";
import h_img from "../assets/newglam.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero flex flex-col mb-10 sm:flex-col md:flex-row">
      {/* <div className="hero_left grow text-center font-bold text-lg text-[50px] flex flex-col m-9 pt-20">
        <h1 className="mt-6 p-2 text-3xl font-bold md:text-5xl">New Arrivals</h1>
        <h2 className="mt-6 p-2 text-3xl font-bold md:text-4xl">FootWear for</h2>
        <h2 className="mt-6 p-2 text-3xl font-bold md:text-4xl">EVERYONE!!</h2>
        <button className="mt-6 bg-teal-200 py-3 pr-1 text-3xl font-bold md:text-4xl rounded-md"to=".popular" >Explore More &#8594; </button>
      </div> */}
      <div className="hero_right grow-0">
      <Link to={`/product/${9}`} ><img src={h_img} alt="hero_img_shoe" className="hero_shoe_img overflow-hidden md:max-w-100" /></Link>
      </div>
    </div>
  );
};

export default Hero;
