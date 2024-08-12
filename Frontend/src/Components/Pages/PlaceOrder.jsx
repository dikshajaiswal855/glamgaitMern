import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

function PlaceOrder({ theme }) {
  const { getTotalCartAmount } = useContext(ShopContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    // Implement order placement logic
  }

  return (
    <div className={`place-order-container ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-gray-100'}`}>
      <form onSubmit={placeOrder} className={`place-order flex flex-col md:flex-row justify-evenly ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} shadow-lg rounded-lg p-10`}>
        <div className={`placeorder-left w-full md:w-1/2 pr-10 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
          <p className="title font-semibold text-2xl md:text-3xl pb-5">Delivery Information</p>
          <div className="multi-fields flex gap-4 mb-4">
            <input
              name='firstName'
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
            />
            <input
              name='lastName'
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
            />
          </div>
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email address"
            className={`w-full p-2 mb-4 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
          />
          <input
            name='street'
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            className={`w-full p-2 mb-4 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
          />
          <div className="multi-fields flex gap-4 mb-4">
            <input
              name='city'
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
            />
            <input
              name='state'
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} rounded`}
            />
          </div>
          <div className="multi-fields flex gap-4 mb-4">
            <input
              name='zipcode'
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
            />
            <input
              name='country'
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
              className={`w-1/2 p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
            />
          </div>
          <input
            name='phone'
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
            className={`w-full p-2 border ${theme === 'light' ? 'border-gray-300 text-black' : 'border-gray-700 text-black'} rounded`}
          />
        </div>
        <div className={`place-order-right w-full md:w-[40%] md:pl-10 pt-8 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
          <div className="cartitems-total pb-10">
            <h1 className="font-semibold text-2xl md:text-3xl pb-5">Cart Totals</h1>
            <div>
              <div className={`cartitems-totalitem flex justify-between md:text-xl pb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className={theme === 'light' ? 'border-gray-300' : 'border-gray-700'} />
              <div className={`cartitem-totalitem flex justify-between md:text-xl pb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                <p>Delivery Fee</p>
                <p>$2</p>
              </div>
              <hr className={theme === 'light' ? 'border-gray-300' : 'border-gray-700'} />
              <div className={`cartitem-totalitem flex justify-between md:text-xl pb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                <h3>Total</h3>
                <h3>${getTotalCartAmount() + 2}</h3>
              </div>
            </div>
            <button type='submit' className={`text-xl md:text-2xl border-2 rounded-md px-10 mt-5 ${theme === 'light' ? 'border-teal-400 bg-teal-300 text-white' : 'border-teal-600 bg-teal-300 text-gray-900'}`}>
              Proceed To Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
