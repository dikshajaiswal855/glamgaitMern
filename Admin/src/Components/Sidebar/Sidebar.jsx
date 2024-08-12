import React from 'react'
import {Link} from 'react-router-dom'
import add_product from "../../assets/trolley.png"
import prod_list from "../../assets/prod_list.png"

const Sidebar=()=> {
    return (
        <div className='sidebar flex flex-row lg:flex-col justify-center lg:justify-start gap-5 pt-3 my-1 py-3 lg:py-0 lg:w-[250px] lg:h bg-white'>
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item  flex felx-col   bg-gray-100 items-center justify-evenly gap-4 px-3 lg:mx-4 lg:mt-4  py-1">
                <img src={add_product} alt="" className='w-7 md:w-9' />
                <p>Add Product</p>
            </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item flex felx-col   bg-gray-100 items-center justify-evenly gap-4 px-3 lg:mx-4  py-1">
                <img src={prod_list} alt="" className='w-7 md:w-9' />
                <p>Product List</p>
            </div>
            </Link>
        </div>
    )
}

export default Sidebar;
