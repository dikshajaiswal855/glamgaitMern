import React from 'react'
import logo from "../../assets/logo.jpg";
import admin from "../../assets/admin.png";

function Navbar() {
    return (
    <div className="navbar flex flex-row justify-between px-14 py-1 shadow-md shadow-teal-200 bg-white">
        <img src={logo} alt="" className='w-8 md:w-12'/>
        <img src={admin} alt="" className='w-8 md:w-12' />
    </div>
    )
}

export default Navbar;
