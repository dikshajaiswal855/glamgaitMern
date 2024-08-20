import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Popular = ({ theme }) => {
  const [popularProd, setPopularProd] = useState([]);

  useEffect(() => {
    fetch('https://glamgaitmern-backend.onrender.com/popularitms')
      .then((response) => response.json())
      .then((data) => setPopularProd(data));
  }, []);

  return (
    <div className={`popular px-7 md:px-16 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} h-auto w-full flex flex-wrap flex-col items-center pt-4`}>
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className="font-bold text-2xl md:text-4xl text-center">TRENDING FOOTWEAR</h1>
        <div className={`w-36 h-1 border-b-4 ${theme === 'light' ? 'border-teal-300' : 'border-teal-500'} mt-2 mb-7 md:mt-4`}></div>
      </div>
      <div className="popular_item px-2 md:px-16 w-full flex flex-wrap justify-evenly">
        {popularProd.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;