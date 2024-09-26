import React, { useState } from 'react';
import google_logo from '../assets/image 3.png';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log('Submit:', { fullName, mobileNumber, otp });
  };

  const handleGoogleSignup = () => {
    // Logic to handle Google signup
    console.log('Google Signup');
  };

  return (
      <div className="w-[358px] h-[407px] bg-[#ff4d00] flex flex-col justify-center absolute top-10 right-[-107px] text-white px-3 py-1 rounded-md">
        <h1 className="text-2xl font-bold text-left m-2">Create New Account.</h1>
        <label htmlFor="fullName" className="font-normal text-sm mx-2 my-1">
          Your Full Name :
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => handleInputChange(e, setFullName)}
          className="w-80 h-10 rounded-md bg-[#d9d9d9] mx-auto my-1 outline-none px-4 py-1 text-zinc-700 text-sm"
        />
        <label htmlFor="mobileNumber" className="font-normal text-sm mx-2 my-1">
          Your Mobile Number :
        </label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => handleInputChange(e, setMobileNumber)}
          className="w-80 h-10 rounded-md bg-[#d9d9d9] mx-auto my-1 outline-none px-4 py-1 text-zinc-700 text-sm"
          onKeyDown={(e) => {
            if (e.key !== 'Backspace' && !/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <label htmlFor="otp" className="font-normal text-sm mx-2 my-1">
          OTP :
        </label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => handleInputChange(e, setOtp)}
          className="w-80 h-10 rounded-md bg-[#d9d9d9] mx-auto my-1 outline-none px-4 py-1 text-zinc-700 text-sm"
          onKeyDown={(e) => {
            if (e.key !== 'Backspace' && !/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <button
          onClick={handleSubmit}
          className="my-2 px-4 py-1 rounded-md w-24 h-7 font-bold text-sm ml-[14.5rem] bg-[#252525]"
        >
          Submit
        </button>
        <button
          onClick={handleGoogleSignup}
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

export default Signup;
