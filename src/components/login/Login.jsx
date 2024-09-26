import React, { useState } from "react";
import google_logo from "../assets/image 3.png";
// import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleGetOtp = () => {
    // Logic to handle OTP generation
    console.log("Get OTP for:", mobileNumber);
  };

  const handleGoogleLogin = () => {
    // Logic to handle Google login
    console.log("Google Login");
  };

  return (
      <div className="w-[358px] h-[270px] bg-[#22272f] flex flex-col justify-center text-white px-3 py-1 rounded-md">
        <h1 className="text-4xl font-bold text-left m-2">Login</h1>
        <label htmlFor="mobileNumber" className="font-normal text-sm mx-2 my-1">
          Your Registered Mobile Number :
        </label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleInputChange}
          className="w-80 h-10 rounded-md bg-[#d9d9d9] mx-auto my-1 outline-none px-4 py-1 text-zinc-700 text-sm"
          onKeyDown={(e) => {
            if (e.key !== "Backspace" && !/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <button
          onClick={handleGetOtp}
          className="my-2 px-4 py-1 rounded-md w-24 h-7 font-bold text-sm ml-[14.5rem] bg-[#ff4d00]"
        >
          Get OTP
        </button>
        <button
          onClick={handleGoogleLogin}
          className="h-8 w-40 rounded-3xl flex items-center justify-center gap-1 bg-white font-normal text-xs text-gray-500 mx-auto mt-2"
        >
          <img
            src={google_logo}
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Login With <span className="font-bold text-xs">Google</span>
        </button>
      </div>
  );
};

export default Login;
