// const port= process.env.PORT || 4000;

// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer=require("multer");
// const path=require("path");
// const cors=require("cors");
// const { ppid } = require("process");
// const { request } = require("http");

// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// app.use(express.json());
// app.use(cors());

// //Database connection with mongodb
// mongoose.connect("mongodb+srv://dikshajaiswal855:ioJ6CflXSDpnIjzb@cluster0.ygbyh.mongodb.net/e-glamgait");

// //api creation
// app.get("/",(req,res)=>{
//     res.send("Express App is Running")
// })

// //Inmage Storage Engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${[path.extname(file.originalname)]}`)
//     }
// })

// const upload=multer({storage:storage})

// //creating upload endpoint for images
// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// //t sehema for creating products

// const Product = mongoose.model("Product",{
//     id:{
//         type: Number,
//         require:true,
//     },
//     name:{
//         type:String,
//     required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     avilable:{
//         type:Boolean,
//         default:true,
//     },
// })

// app.post('/addproduct',async(req,res)=>{
//     let products=await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array=products.slice(-1);
//         let last_product=last_product_array[0];
//         id=last_product.id+1;
//     }
//     else{
//         id=1;
//     }
//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,

//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })

// // creating api for deleting producs

// app.post('/removeproduct',async(req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })

// // creating api for getting all products
// app.get('/allproducts',async(req,res)=>{
//     let products = await Product.find({});
//     console.log("All products fetched");
//     res.send(products);
// })

// //Schema creating for user model
// const Users=mongoose.model('Users',{
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     }
// })

// //creating end point for registering the user
// app.post('/signup',async(req,res)=>{
//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json({success:false,errors:"existing user found with same email id"})
//     }
//     let cart={};
//     for(let i=0;i<300;i++){
//         cart[i]=0;
//     }
//     const user=new Users({
//         name:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })

//     await user.save();

//     const data={
//         user:{
//             id:user.id
//         }
//     }

//     const token=jwt.sign(data,'secret_ecom');
//     res.json({success:true,token})
// })

// //creating endpoint for user login

// app.post('/login',async(req,res)=>{
//     let user =await Users.findOne({email:req.body.email});
//     if(user){
//         const passCompare = req.body.password === user.password;
//         if(passCompare){
//             const data={
//                 user:{
//                     id:user.id,
//                 }
//             }
//             const token=jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});
//         }
//         else{
//             res.json({success:false,errors:"Wrong Password"});
//         }
//     }
//     else{
//         res.json({success:false,errors:"Wrong Email Id"})
//     }
// })

// //creating endpoint for popular products
// // app.get('/popularitms',async(req,res)=>{
// //     let products = await Product.find({category:"mens"});
    
// //     let popularitms = products.slice(0,1);
// //     console.log("Popular in women fetched");
// //     res.send(popularitms);
// // })
// app.get('/popularitms', async (req, res) => {
//     try {
//         let products = await Product.find({ category: "mens" });
//         let popularitms = products.slice(0, 4);
//         console.log("Popular in mens fetched");
//         res.send(popularitms);
//     } catch (error) {
//         console.error("Error fetching popular items:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// //creating middleware to fetch user
// const fetchUser=async(req,res,next)=>{
//     const token=req.header('auth-token');
//     if(!token){
//         res.send(401).send({errors:"Please authticate using valid valid token"})
//     }
//     else{
//         try{
//             const data = jwt.verify(token,'secret_ecom');
//             req.user=data.user;
//             next();
//         } catch(error){
//             res.status(401).send({errors:"please authenticate using a valid token"})
//         }
//     }
// }

// // creating endpoints for adding product in cartdata
//  app.post('/addtocart',fetchUser, async(req,res)=>{
//     // console.log(req.body,req.user);
//     console.log("added",req.body.itemId);
//     let userData=await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] +=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("Added")
//  })

// // creating endpoint to remove product from cartdata
// app.post('/removefromcart',fetchUser,async(req,res)=>{
//     console.log("removed",req.body.itemId);
//     let userData=await Users.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId]>0)
//     userData.cartData[req.body.itemId] -=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("Removed")
// })

// //creating api to get cartdata
// app.post('/getcart',fetchUser,async(req,res)=>{
//     console.log("Get cart");
//     let userData=await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);
// })
// app.listen(port,(error)=>{
//     if(!error){
//         console.log("Server Running on Port"+ port);
//     }
//     else{
//         console.log("Error: " + error);
//     }
// })
const port = process.env.PORT || 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
const cors = require("cors");

const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://dikshajaiswal855:ioJ6CflXSDpnIjzb@cluster0.ygbyh.mongodb.net/e-glamgait");

// API creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine using Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "product_images",
        public_id: (req, file) => `${file.fieldname}_${Date.now()}`,
    },
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.post("/upload", upload.single("product"), (req, res) => {
    try {
        res.json({
            success: 1,
            image_url: req.file.path, // The Cloudinary URL will be here
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: "Image upload failed",
            error: error.message,
        });
    }
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Adding a new product with image
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image, // Cloudinary image URL from the request body
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating API for deleting products
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Create API for getting all products
app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// Schema creation for user model
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Creating an endpoint for user registration
app.post("/signup", async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing user found with the same email id" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
});

// Creating an endpoint for user login
app.post("/login", async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });

    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong Email Id" });
    }
});

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please authenticate using a valid token" });
        }
    }
};

// Creating endpoint to add a product to cart data
app.post("/addtocart", fetchUser, async (req, res) => {
    console.log("added", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added");
});

// Creating endpoint to remove a product from cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0) userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed");
});

// Creating API to get cart data
app.post("/getcart", fetchUser, async (req, res) => {
    console.log("Get cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
