import React,{useContext} from 'react';
import { ShopContext } from '../../Context/ShopContext';
import removecart from '../../Components/assets/basket.png';
import {useNavigate} from 'react-router-dom';

function CartItems() {
    const {getTotalCartAmount,dataa_product,cartItems,removeFromCart}=useContext(ShopContext);

    const navigate= useNavigate();

    return (
        <div className='cartitems'>
            <hr className='hidden '/>
            <div className='cartitems-format-main  md:grid md:grid-cols-6 justify-between md:text-xl font-semibold md:px-[100px] px-10 pt-5  hidden '>
                <p>Products</p>
                <p>Title</p>
                <p className='ml-5 lg:ml-0'>Price</p>
                <p className='ml-5 lg:ml-0'>Quantity</p>
                <p className='ml-9 lg:ml-0'>Total</p>
                <p className='ml-8 lg:ml-0'>Remove</p>
            </div>
            <hr className='hidden sm:block' />
            <div className='md:hidden'>
                <p className='text-xl pl-8 font-semibold'>Your products are waiting for you:</p>
            </div>
        {/* <div className='cartitems-format-main  flex flex-row lg:grid lg:grid-cols-6 justify-between md:text-xl font-semibold md:px-[100px] px-10 pt-5 hidden sm:block'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='hidden sm:block' /> */}
            {dataa_product.map((e)=>{
                // console.log(e);
                if(cartItems[e.id]>0)
                {
                    return(
                    <div>
                    <div className="cartitems-format  grid grid-cols-3  md:grid md:grid-cols-6  lg:grid lg:grid-cols-6  px-10 md:px-[100px]">
                        <img className='carticon-product-icon w-[60px]' src={e.image} alt="" />
                        <p className='lg:ml-1 '>{e.name}</p>
                        <p className='ml-20 md:ml-5 lg:ml-2'>${e.new_price}</p>
                        <button className='cartitems-quantity ml-2 md:ml-7 lg:ml-0 pb-5 h-5 w-8 border-2 border-teal-300 rounded-md'>{cartItems[e.id]}</button>
                        <p className='md:ml-9 lg:ml-0 '>${e.new_price*cartItems[e.id]}</p>
                        <img className='w-10 h-10 ml-20 md:ml-10 lg:ml-1' onClick={()=>{removeFromCart(e.id)}} src={removecart} alt="" />
                    </div>
                    <hr />                   
                    </div>)
                }
                return null;
            })}
            <div className="cartitems-down flex flex-col px-8 md:flex-row md:justify-between md:px-[80px] mt-20">
                <div className="cartitems-total pb-10 w-80">
                    <h1 className='font-bold text-xl md:text-3xl pb-[20px]'>cart Totals</h1>
                    <div>
                        <div className="cartitems-totalitem flex justify-between  md:text-xl pb-[5px]">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem flex justify-between md:text-xl pb-[5px]">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem flex justify-between md:text-xl pb-[5px]">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')} className='text-xl md:text-2xl border-2 border-teal-300 rounded-md px-10 bg-teal-300'>Proceed  To  Checkout</button>
                </div>
                <hr />
                <div className="cartitems-promocode text-xl pt-2 md:pt-0 pb-2 md:pb-0 md:px-[50px]">
                    <p className=''>If you have a promo code, Enter it here </p>
                    <div className="cartitems-promobox flex md:justify-between ">
                        <input type="text" className='bg-gray-300 rounded-md w-[160px]' placeholder='   promo code'/>
                        <button className='bg-teal-300 px-2 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
