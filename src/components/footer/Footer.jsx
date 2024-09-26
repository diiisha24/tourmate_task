import React from "react";
import whatsapp_logo from "../assets/image 2.png";
import instagram_logo from "../assets/instagram.png";
import facebook_logo from "../assets/facebook.png";
import youtube_logo from "../assets/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[327px]">
        <div className="w-full h-[303px] bg-[#22272f] px-[8vw] py-[3vw] flex justify-between items-start text-white">
          <div>
            <p className="font-semibold text-xl">Product Links:</p>
            <br />
            <ul className="font-normal text-sm">
              <li>Hotels</li>
              <li>Rental Cars</li>
              <li>Flight Tickets</li>
              <li>Train Ticket</li>
              <li>Bus Tickets</li>
              <li>Travel Packages</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl">Listing:</p>
            <br />
            <ul className="font-normal text-sm">
              <li>List Your Hotel</li>
              <li>List Your Car</li>
            </ul>
            <p className="font-semibold text-xl">Log-In:</p>
            <br />
            <ul className="font-normal text-sm">
              <li>Hotel Partners</li>
              <li>Cab Owners</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl">Log-In:</p>
            <br />
            <ul className="font-normal text-sm">
              <li>Business Travelers</li>
              <li>Travel Agents</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center items-end gap-14">
              <div>
                <p className="font-semibold text-xl">Support:</p>
                <br />
                <ul className="font-normal text-sm">
                  <li>
                    Customer Support:{" "}
                    <span className="ml-4">+91 82925 32917</span>
                  </li>
                  <li>
                    Listing Support:{" "}
                    <span className="ml-10">+91 79039 35589</span>
                  </li>
                  <li>
                    Business Travelers & <br />
                    Travel Agents:{" "}
                    <span className="ml-12">+91 79039 35589</span>
                  </li>
                </ul>
              </div>
              <div className="pl-1 flex justify-center items-center  gap-2">
                <p className="font-normal text-xs">
                  Chat with Our <br />
                  <span className="text-sm">Support</span> on <br />
                  <span className="text-sm">Whatsapp.</span>
                </p>
                <img className="h-16" src={whatsapp_logo} alt="whatsapp_logo" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 py-1 px-3 my-9 bg-[#ff4d00]">
                <p className="font-normal text-lg">Social Media Links :</p>
                <div className="flex justify-center items-center gap-1">
                <img className="h-5" src={instagram_logo} alt="instagram_logo"/>
                <span className="font-semibold text-xs">Instagram</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                <img className="h-5" src={facebook_logo} alt="facebook_logo"/>
                <span className="font-semibold text-xs">Facebook</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                <img className="h-5" src={youtube_logo} alt="youtube_logo"/>
                <span className="font-semibold text-xs">Youtube</span>
                </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-1">
          <ul className="flex justify-center items-center gap-5 font-normal text-xs ml-[40vw]">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>The Team</li>
            <li>Careers</li>
          </ul>
          <p className="font-normal text-sm mr-[0vw] ml-auto">
            &copy; Tourmates India Pvt. Ltd. 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
