import React from "react";
import HotelSearch from "../hotel_search/HotelSearch";
import PlaceImage from "../place_image_card/PlaceImage";
import HotelCard from "../hotelCard/HotelCard";
import arrow from "../assets/arrow-down-thick.png";
import spiritual_image from "../assets/spiritual.png";
import wildlife_image from "../assets/wildlife.png";
import honeymoon_image from "../assets/honeymoon.png";
import family_image from "../assets/family.png";
import friendly_image from "../assets/friendly.png";
import BankOfferCard from "../bank_offer_card/BankOfferCard";
import axis_img from "../assets/axis.png";
import kotak_img from "../assets/kotak.png";
import sbi_img from "../assets/sbi.png";
import zest_img from "../assets/zest.png";

const MainSection = () => {
  return (
    <div className="w-5/6 border border-black border-solid border-t-0 mx-auto mt-1">
      <HotelSearch />
      <p className="text-center text-xs font-bold text-[#7a7a7a] py-1">
        Popular Destinations
      </p>
      <PlaceImage />
      <HotelCard />
      <div className="flex items-end justify-between pt-6 pb-2">
        <h1 className="font-bold text-3xl">
          Plan Your Tour{" "}
          <span className="font-normal text-zinc-500">
            With
            <br /> Our
          </span>{" "}
          Cheapest Travel Packages.
        </h1>
        <div className="flex bg-[#eeeeee] items-center justify-between px-4 py-1">
          <button className=" text-sm font-light">
            Select Your Tour Type
          </button>
          <img className="h-8 cursor-pointer" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="relative text-white">
        <p className="font-bold text-4xl absolute top-14 left-14">Spiritual</p>
        <img className="h-[58vh] w-[20vw]" src={spiritual_image} alt="spiritual" />
        <img className="absolute top-0 left-[20vw] w-[40vw] h-[30vh]" src={honeymoon_image} alt="honeymoon" />
        <p className="font-bold text-4xl absolute top-24 left-[26vw]">Honeymoon</p>
        <img className="absolute top-[30vh] left-[20vw] h-[28vh] w-[22.2vw]" src={wildlife_image} alt="wildlife" />
        <p className="font-bold text-4xl absolute top-[47vh] left-[22vw]">Wildlife</p>
        <img className="absolute top-0 right-[-4px] h-[30vh] w-[23vw]" src={friendly_image} alt="friendly" />
        <p className="font-bold text-4xl absolute top-24 right-24">Friendly</p>
        <img className="absolute top-[30vh] left-[42vw] h-[28vh] w-[40.5vw]" src={family_image} alt="family" />
        <p className="font-bold text-4xl absolute top-[31.5vh] left-[43.5vw]">Family</p>
      </div>
      <div className="mt-1 mb-3">
      <h1 className="text-xl font-bold text-start">Offers we have:</h1>
      <div className="flex items-center justify-between">
      <BankOfferCard axis_img = {axis_img}/>
      </div>
      </div>
    </div>
  );
};

export default MainSection;
