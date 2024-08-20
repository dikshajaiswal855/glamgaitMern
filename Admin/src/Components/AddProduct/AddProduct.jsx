import React,{useState} from 'react'
import upload from "../../assets/upload-svgrepo-com.png"


function AddProduct() {
    const [image,setImage]=useState(false);
    const [productDetails, setProductDetails]=useState({
        name:"",
        image:"",
        category:"",
        new_price:"",
        old_price:"",
    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product=async ()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        let formData= new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product); 
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }

    return (
        <div className='mx-4 my-4 lg:w-[800px]  bg-white h-[100vh]'>
        <div className='add-product mx-4 my-5 md:mx-6 flex flex-col gap-5'>
            <div className="addproduct-itemfield flex flex-col gap-2">
                <p className='text-xl md:text-2xl'>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='    type here' className='border border-teal-300 rounded-sm w-full md:text-xl py-2'/>
            </div>
            <div className="addproduct-price flex flex-row gap-10 ">
                <div className="addproduct-itemfields">
                    <p className='text-xl md:text-2xl'>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='    type here' className='border border-teal-300 rounded-sm w-full md:text-xl  py-2'/>
                </div>
                <div className="addproduct-itemfields">
                    <p className='text-xl'>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='    type here' className='border border-teal-300 rounded-sm w-full md:text-xl  py-2 '/>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p className='text-xl'>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector border border-teal-300 rounded-sm' id="">
                    <option value="womens">Women</option>
                    <option value="mens">Men</option>
                    <option value="kids">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield w-24">
                <label htmlFor="file-input" className=" cursor-pointer ">
                    <img src={image?URL.createObjectURL(image):upload} alt="" className='w-24 outline-teal-300 outline-double outline-offset-2' />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{Add_Product()}} className='addproduct-btn w-20 border border-teal-300 bg-teal-300 rounded-md'>ADD</button>
        </div>
        </div>
    )
}

//  w-[350px] mx-10 my-2 md:w-[600px] md:mx-20 md:my-10 justify-center items-center

export default AddProduct

