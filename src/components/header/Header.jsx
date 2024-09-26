import React, { useState } from "react";
import logo from "../assets/Group 118.png";
import hotel_logo from "../assets/Group 202.png";
import cabs_logo from "../assets/NAV-CABS (2).png";
import flight_logo from "../assets/Group 204.png";
import headphone_icon from "../assets/headphone.png";
import profile from "../assets/image 1 (1).png";
import down_arrow from "../assets/Group.png";
import ProfileDropdown from "../profile_dropdown/ProfileDropdown";
import Login from "../login/Login";
import Signup from "../signup/Signup";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignupOpen(false);
    setIsDropdownOpen(false);
  };

  const handleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
    setIsLoginOpen(false);
    setIsDropdownOpen(false);
  };

  const handleProfile = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between flex-wrap md:flex-nowrap shadow-sm shadow-black/20">
      <div className="h-20 max-w-52 mr-[23vw]">
        <img
          className="w-[183px] rounded-t-[10px] rounded-b-[10px] p-2"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center mr-28 flex-row gap-1 flex-wrap md:flex-nowrap">
        <a href="/">
          <img className="max-h-9" src={hotel_logo} alt="" />
        </a>
        <a href="/">
          <img className="max-h-9" src={cabs_logo} alt="" />
        </a>
        <a href="/">
          <img className="max-h-9" src={flight_logo} alt="" />
        </a>
      </div>
      <div className="w-48 h-46 rounded-lg bg-[#EEEEEE] p-1 flex items-center justify-center mr-[18px]">
        <img className="h-7" src={headphone_icon} alt="" />
        <div className="ml-[6px]">
          <p className="font-normal text-xs">Customer Service 24*7</p>
          <p className="font-normal text-[9px] leading-[13px]">
            Call +91{" "}
            <span className="font-semibold text-xs text-[#7a7a7a]">
              82925 32917
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[128px] h-[46px] p-1 flex justify-center items-center flex-col rounded-l-lg relative bg-[#EEEEEE]">
          <button
            className="font-semibold text-xs reset-btn pl-14 underline"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="font-normal text-[8px] text-[#7a7a7a]">
            already have a account
          </p>
          {isLoginOpen && (
            <div className="absolute top-16 right-0">
              <Login />
            </div>
          )}
        </div>
        <div className="w-[115px] h-[46px] p-1 flex justify-center items-start flex-col rounded-r-lg bg-[#FF4d00]">
          <button
            className="font-semibold text-xs reset-btn text-white underline"
            onClick={handleSignup}
          >
            Sign-Up
          </button>
          <p className="font-normal text-[8px] text-white">
            Create a New account
          </p>
          {isSignupOpen && (
            <div className="absolute">
              <Signup />
            </div>
          )}
        </div>
      </div>
      <div className="ml-[10px] rounded bg-[#252525] h-[46px] w-[84px] flex items-center">
        <img className="h-[45px]" src={profile} alt="" />
        <img
          onClick={handleProfile}
          className="h-[23px] ml-[5px] relative cursor-pointer"
          src={down_arrow}
          alt=""
        />
        <div
          className={`transition-all duration-500 absolute right-0 top-0 ${
            isDropdownOpen ? "opacity-100 scale-x-100" : "opacity-100 scale-x-0"
          }`}
        >
          <div onClick={() => setIsDropdownOpen(false)}>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
