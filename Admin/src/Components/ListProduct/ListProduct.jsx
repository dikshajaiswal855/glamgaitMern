import React, { useEffect, useState } from 'react'
import cross_icon from "../../assets/cross.png";

function ListProduct() {
    const [allproducts,setAllProducts]=useState([]);

    const fetchInfo = async ()=>{
        await fetch('https://glamgaitmern-backend.onrender.com/allproducts')
        .then((res)=>res.json()).
        then((data)=>{setAllProducts(data)})
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id)=>{
        await fetch('https://glamgaitmern-backend.onrender.com/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
         await fetchInfo();
    }

    return (
        <div className=' mx-4 my-4 lg:w-[800px]  bg-white h-[100vh]'>
            <div className='add-product mx-4 my-5 md:mx-6 flex flex-col gap-5'>
            <div className='flex flex-wrap flex-col items-center'>
            <h1 className='text-xl font-bold text-center'>ALL Products List</h1>
            <div className="w-36 h-1 border-b-4 border-teal-300  "></div>
            </div>
            
            <div className='listproduct-formet-main md:grid md:grid-cols-6 justify-between md:text-xl font-semibold md:px-[40px] px-10 pt-5  hidden '>
                <p>Products</p>
                <p className='ml-8 lg:ml-7'>Title</p>
                <p className='ml-8 lg:ml-8'>Old Price</p>
                <p className='ml-8 lg:ml-8'>New Price</p> 
                <p className='ml-8 lg:ml-12'>Category</p>
                <p  className='ml-8 lg:ml-12'>Remove</p>
            </div>
             <hr />
            <div className="listprodt-allproducts overflow-y-auto h-[380px]">
             {allproducts.map((product,index)=>{
                return<> <div key={index} className='pt-4 listproduct-formet-main flex flex-wrap justify-around w-full pb-4 '>
                    <img src={product.image} alt="" className='listproduct-product w-[60px] '/>
                    <p className=''>{product.name}</p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>remove_product(product.id)} src={cross_icon} alt="" className='w-7 h-7 '/>
                    </div> 
                    <hr />
                    </>
             })}
            </div>
            </div>
        </div>
    )
}

export default ListProduct
