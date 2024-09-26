import React from "react";
import searchIcon from "../assets/plex (1).png";
import { useState } from "react";
import "./HotelSearch.css";

const HotelSearch = () => {
  const [city, setCity] = useState("New Delhi");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [roomGuests, setRoomGuests] = useState("1 Room 2 Guests");
  return (
    <div className="max-w-fit mx-auto bg-[#eeeeee] h-16 px-[2px] rounded-2xl flex">
      <form
        action="/hotelsearch"
        method="get"
        className="flex justify-between items-center gap-[2px]"
      >
        <div className="bg-white flex rounded-l-2xl justify-between flex-col px-4 py-3 w-44">
          <label className="font-normal text-xs text-gray-500" htmlFor="city">
            Location
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="font-bold text-sm focus:outline-none w-36"
            
          />
        </div>
        <div className="bg-white flex justify-between flex-col px-4 py-[11px] w-40 ">
          <label
            className="font-normal text-xs text-gray-500"
            htmlFor="checkin"
          >
            Check In
          </label>
          <input
            id="checkin"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="font-bold text-sm focus:outline-none"
            onBlur={(e) => e.target.classList.add("calenderlogo")}
            onFocus={(e) => e.target.classList.remove("calenderlogo")}
          />
        </div>
        <div className="bg-white flex justify-between flex-col px-4 py-[11px] w-40">
          <label
            className="font-normal text-xs text-gray-500"
            htmlFor="checkout"
          >
            Check Out
          </label>
          <input
            id="checkout"
            type="date"
            value={checkout}
            className="font-bold text-sm focus:outline-none"
            onChange={(e) => setCheckout(e.target.value)}
            onBlur={(e) => e.target.classList.add("calenderlogo")}
            onFocus={(e) => e.target.classList.remove("calenderlogo")}
          />
        </div>
        <div className="bg-white flex justify-between flex-col px-4 py-3 w-44">
          <label
            className="font-normal text-xs text-gray-500"
            htmlFor="room-guests"
          >
            Rooms & Guests
          </label>
          <input
            id="room-guests"
            type="text"
            value={roomGuests}
            className="font-bold text-sm focus:outline-none"
            onChange={(e) => setRoomGuests(e.target.value)}
          />
        </div>
        <div className="rounded-r-2xl px-4 py-3 w-44 bg-[#ff4d00] flex justify-center items-center">
          <button
            type="submit"
            className="text-white px-3 py-1 font-normal text-lg"
          >
            Search
          </button>
          <img src={searchIcon} alt="search" className="w-4 h-4" />
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;
