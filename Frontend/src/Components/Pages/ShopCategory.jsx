import React, { useContext } from "react";
import Item from "../Item/Item.jsx";
import dropdownicon from "../assets/down-arrow.png";
import { ShopContext } from "../../Context/ShopContext.jsx";

const ShopCategory = (props) => {
  const { dataa_product } = useContext(ShopContext);

  // Filter products based on the category
  const filteredProducts = dataa_product.filter(item => item.category === props.category);

  return (
    <div className={`main_shop_category ${props.theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="shop_category_hero">
        <div className="flex items-center justify-center">
          <img src={props.banner} alt="" />
        </div>

        <h1 className="shop_category_main_heading pt-10 font-bold text-3xl md:text-4xl text-center">
          Popular in {props.category}
        </h1>
        <div className="items-center w-full h-auto flex flex-wrap flex-col">
          <div className={`w-36 h-1 border-b-4 ${props.theme === 'light' ? 'border-teal-300' : 'border-teal-500'} mt-2 mb-7 md:mt-4`}></div>
        </div>
        {/* <div className="px-16 shopCategory-indexSort flex pr-5 py-2 justify-between">
          <p className="px-5 py-2.5">
            <span className="font-semibold">Showing 1-12</span> out of 36 products
          </p>
          <div className={`shopCategory-Sort flex md:mr-14 px-5 py-2.5 rounded-full border ${props.theme === 'light' ? 'border-gray-500' : 'border-gray-300'}`}>
            Sort by <img className="w-5" src={dropdownicon} alt="" />
          </div>
        </div> */}
        <div className="shop_category_popular_item px-2 md:px-16 w-full flex flex-wrap justify-evenly">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ))
          ) : (
            <p>No products available for {props.category}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;