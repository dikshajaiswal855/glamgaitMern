import React from 'react'
import arrow from "../assets/next.png";
const Breadcrum =(props)=> {
    const {product} = props;
    return (
        <div className='breadcrum flex pl-20 pt-4'>
            HOME <img className='w-5  h-5' src={arrow} alt="" />SHOP <img className='w-5  h-5' src={arrow} alt="" />{product.category} <img className='w-5  h-5' src={arrow} alt="" />{product.name}
        </div>
    )
}

export default Breadcrum
