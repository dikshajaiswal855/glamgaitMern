import React, { useState, useContext } from "react";
import burgr from "../../Components/assets/burger-side.png";
import cross_for_nav from "../../Components/assets/cross_for_nav.png";
import logo from "../assets/logo.jpg";
import darklogo from "../assets/darklogo.png";
import lamp_dark from "../assets/lamp-dark.png";
import lamp_light from "../assets/lamp-light.png";
import trolly from "../assets/trolley.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar({theme,setTheme}) {
  const toggle_mode=()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <div className="nav_main flex justify-between px-6 md:px-20 font-bold py-3.5 relative md:flex md:flex-row md:justify-between md:items-center">
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-[gray-900] text-white'} nav_main flex justify-between px-6 md:px-20 font-bold py-3.5 relative md:flex md:flex-row md:justify-between md:items-center` }>
      <div className="flex items-center">
        <button
          className="md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="w-8" src={isMenuOpen ? cross_for_nav : burgr} alt="Menu Toggle" />
        </button>
        <div className="nav_logo_name w-14  ml-4 md:ml-0">
        <Link to="/">  <img className={theme === 'light' ? 'w-9' : 'w-12'} src={theme=='light'?logo:darklogo} alt="Logo" /></Link>
        {/* <Link to="/">  <img className="" src={darklogo} alt="Logo" /></Link> */}
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} px-6 md:px-0 z-10 w-full left-0 top-[60px] md:relative md:top-0 md:flex md:w-auto md:space-x-[2rem] lg:space-x-[4rem] xl:space-x-[5rem] duration-500 ease-in-out`}
      >
        <li
          onClick={() => {
            setMenu("shop");
            setIsMenuOpen(false);
          }}
          className="nav_list_items mt-2 md:mt-0"
        >
          <Link style={{ textDecoration: "none",  }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-8" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none", }}
            to="/mens"
          >
            Men
          </Link>{" "}
          {menu === "Men" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none",  }}
            to="/womens"
          >
            Women
          </Link>{" "}
          {menu === "Women" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-12" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none",}}
            to="/kids"
          >
            Kids
          </Link>{" "}
          {menu === "Kids" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
          ) : null}
        </li>
      </ul>
      <div className="nav_buttons flex space-x-1 md:space-x-4 ">
        {localStorage.getItem('auth-token')
        ?<button className="bg-[#5EEAD4] p-1 px-4 rounded-lg" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<button
          className="login"
          onClick={() => setMenu("Login")}
        >
          <Link
            className="bg-[#5EEAD4] p-1 px-4 rounded-lg"
            style={{ textDecoration: "none", color: "black" }}
            to="/login"
          >
            <button className="navbar_login_button lg:text-sm"> Login</button>
          </Link>
        </button>}
        
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img className="w-8" src={trolly} alt="Cart" />
          <div className="cart-count bg-red-600 pt-1 w-[16px] h-[16px] flex justify-center items-center mt-[-36px] ml-[28px] rounded-full text-[14px] text-white">
            {getTotalCartItems()}
          </div>
        </Link>
        {/* <Link style={{ textDecoration: "none" }} to={"/profile"}>
          <img className="w-9" src={profile_logo} alt="Profile" />
        </Link> */}
        <img onClick={()=>{toggle_mode()}} className="w-10 cursor-pointer" src={theme=='light'?lamp_dark:lamp_light} alt="" />
      </div>
    </div>
  );
}

export default Navbar;