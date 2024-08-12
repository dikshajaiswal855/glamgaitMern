import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers"

const Shop = ({theme}) => {
  return (
    <div className="">
      <Hero />
      <Popular theme={theme}/>
      {/* <Offers/> */}
    </div>
  );
};

export default Shop;
