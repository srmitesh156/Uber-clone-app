// import React from 'react'

import { Link } from "react-router-dom";

const UserSignup = () => {
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

          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
          <input
            required
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            type="text"
            name="text"
            placeholder="First Name"
          />
          <input
            required
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            type="text"
            name="text"
            placeholder="Last Name"
          />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
           
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
           
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
  )
}

export default UserSignup