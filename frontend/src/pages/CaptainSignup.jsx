// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [newUserData,setUserData] = useState({});
    const submitHandler = (e)=>{
      e.preventDefault();
    
    const newUserData = {
      fullName: {
        firstname,
        lastname
      },
      email,
      password
    };
  
    setUserData(newUserData);
  
    // console.log(newUserData); 
  
    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
    }
  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
    <div>
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />

      <form method="POST"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >

        <h3 className="text-lg w-full font-medium mb-2">What's our Captain's name</h3>
        <div className="flex gap-4 mb-6">
        <input
          required
          className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
          type="text"
          name="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e)=>{
            setFirstname(e.target.value);
          }}
        />
        <input
          required
          className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
          type="text"
          name="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e)=>{
            setLastname(e.target.value);
          }}
        />
        </div>

        <h3 className="text-lg  font-medium mb-2">What's our Captain's email</h3>
        <input
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          name="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          name="password"
          placeholder="password"
        />
        <button
          className="bg-[#111] text-white font-semibolt mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center">
      Already hava a Account?
        <Link to="/captain-login" className="text-blue-600">
          Login here
        </Link>
      </p>
    </div>
    <div>
    <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Policy</span> and <span className="underline">Terms of Service apply</span>.
    Privacy</p>
    </div>
  </div>
  )
}

export default CaptainSignup