import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignUp from "./Components/Pages/LoginSignUp";
// import Profile from "./Components/Pages/Profile";
import Footer from "./Components/Footer/Footer";
import menmain from "./Components/assets/men ca-1,28,26/MEN_Main_category_5_1296x.jpg"
import womenmain from "./Components/assets/women/bg_slideshow_h1_1_1296x.jpg"
import kidsm from "./Components/assets/kids/KidsCollection_CategoryImage_1296x.jpg"
import PlaceOrder from "./Components/Pages/PlaceOrder";
import { useState } from "react";

function App() {

  const[theme, setTheme]=useState('light');

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} transition-all duration-500 ease-in-out` }>
      <BrowserRouter >
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes   basename="/glamgait">
          <Route path="/" element={<Shop theme={theme} />} />
          <Route path="/mens" element={<ShopCategory banner={menmain} category="mens" theme={theme}/>} />
          <Route path="/womens" element={<ShopCategory banner={womenmain} category="womens" theme={theme}/>} />
          <Route path="/kids" element={<ShopCategory banner={kidsm} category="kids" theme={theme}/>} />
          <Route path="/product" element={<Product theme={theme}/>}>
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder theme={theme} />} />
          <Route path="/login" element={<LoginSignUp theme={theme}/>} />
        </Routes>

        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
