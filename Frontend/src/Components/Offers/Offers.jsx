import React from 'react'
import exclusive_img from '../assets/excl.offer.jpg'
function Offers() {
    return (
        <>
        <div className='offers flex flex-col-reverse justify-between md:flex-row'>
            <div className='bg-[#0A080F] pb-4 md:w-[50%]'>
            <div className='offers-left pt-20 text-[2.5rem] text-center text-white'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only on best seller products</p>
                <button className='bg-[#99F6E4] px-4 font-bold  text-black rounded-lg'>Click Here </button>
            </div>
            </div>
            <div className='offers-right bg-[#111B27] md:w-[50%]'>
                <img className='' src={exclusive_img} alt=""  />
            </div>
        </div>
        </>
    )
}

export default Offers
