// import React from 'react'
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import axios from 'axios';
import {UserDataContext} from '../context/UserContext'
import {useNavigate} from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate()
  const {user,setUser} = useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      navigate('/home')
      }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name="password"
            placeholder="password"
          />
          <button
            className="bg-[#111] text-white font-semibolt mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signUp" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/Captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibolt mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
