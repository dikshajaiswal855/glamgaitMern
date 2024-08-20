import React,{useState} from 'react';
import bgimg from "../assets/nnw.jpg";

const LoginSignup = ({ theme }) => {
  const [state, setState]=useState("Login");
  const [formData, setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    // console.log(e);
    setFormData({...formData,[e.target.name]:e.target.value}); 

  }

  const login = async ()=>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    console.log("Sign Up Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className={`bg-white ${theme === 'light' ? 'bg-opacity-75' : 'bg-opacity-90'}  bg-opacity-75 shadow-lg rounded-lg p-8 max-w-sm w-full`}>
        <h1 className="text-2xl font-bold text-center text-black mb-6">{state}</h1>
        <div className="space-y-4">
          {state==="Sign Up"?<input
            name='username' 
            value={formData.username} onChange={changeHandler}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]"
          />:<></>}
          <input
          name='email' 
          value={formData.email} onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]"
          />
          <input
          name='password' 
          value={formData.password} onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5EEAD4]"
          />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} className="w-full mt-6 bg-[#5EEAD4] text-black py-2 rounded-md hover:bg-teal-600 transition duration-300">
          Continue
        </button>
        {state==="Sign Up"?<p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <span onClick={()=>{setState("Login")}} className="text-red-500 cursor-pointer hover:underline">
            Login here
          </span>
        </p>:<p className="text-center text-gray-600 mt-4">
          Create an account?{' '}
          <span onClick={()=>{setState("Sign Up")}} className="text-red-500 cursor-pointer hover:underline">
            Click here
          </span>
        </p>}
        
        
        <div className="mt-4 flex items-start">
          <input type="checkbox" name="agree" id="agree" className="mt-1" />
          <p className="text-gray-600 ml-2">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
