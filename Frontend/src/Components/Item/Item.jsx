import React from "react";
import {Link} from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item w-44 md:w-[249px] md:h-[300px] pt-2 flex flex-col items-center mb-12 hover:border-2 border-teal-300 duration-300 ease-in-out ">
      <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} className="w-[10.4rem] h-[200px] items-center" src={props.image} alt="image" /></Link>
      <p className="text-1xl font-bold ">{props.name}</p>
      <div className="item_prices flex flex-col text-center ">
        <div className="item_prices_new text-1xl font-bold mt-1 ">₹{props.new_price}</div>
        <div className="item_prices_old text-1xl font-bold mt-1 text-gray-400 line-through">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
