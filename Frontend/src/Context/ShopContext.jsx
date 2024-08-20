import React ,{createContext, useEffect, useState}from "react";

export const ShopContext= createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
            cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const[dataa_product,setDataa_product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://glamgaitmern-backend.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setDataa_product(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://glamgaitmern-backend.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])
    // useEffect(() => {
    //     fetch('https://glamgaitmern-backend.onrender.com/allproducts')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // console.log('Raw fetched data:', data); // Log raw data
    //             if (Array.isArray(data)) {
    //                 setDataa_product(data);
    //             } else {
    //                 console.error('Unexpected data format:', data);
    //             }
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);
    // // console.log(dataa_product);

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://glamgaitmern-backend.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/from-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
                fetch('https://glamgaitmern-backend.onrender.com/removefromcart',{
                    method:'POST',
                    headers:{
                        Accept:'application/from-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({"itemId":itemId}),
                })
                .then((response)=>response.json())
                .then((data)=>console.log(data));
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=dataa_product.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    } 
     const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
     }
    const contextValue = {getTotalCartItems,getTotalCartAmount,dataa_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

 export default ShopContextProvider;
