import React from 'react'
import hotel_Image_1 from '../assets/hotel-image 1.png'
import star from '../assets/Group 3.png'
import location from '../assets/google-maps.png'
import elevator_logo from '../assets/elevator.png'
import room_service_logo from '../assets/restaurant.png'
import add_logo from '../assets/plus-rec (1).png'
import hotel_image_2 from '../assets/hotel-image 2.png'
import hotel_image_3 from '../assets/hotel-image 3.png'

const HotelCard = () => {
  return (
    <div>
        <p className='text-xl font-bold py-2 '>Featured Hotels:</p>
        <div className='flex justify-between items-center gap-3'>
        <div className='bg-[#22272f] rounded-lg flex flex-col'>
            <img className='rounded-lg h-[37vh]' src={hotel_Image_1} alt="" />
            <div className='flex justify-between items-center p-1'>
                <p className='text-white text-xl font-bold pl-2'>Hotel Aditi Inn</p>
                <img className='w-20 pr-2' src={star} alt="" />
            </div>
            <div className='flex justify-start items-center gap-2 px-2 pb-2'>
                <img className='w-5' src={location} alt="" />
                <p className='text-[#c2c2c2] font-normal text-sm'>Madhupur,JH - 815353</p>
            </div>
            <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center p-1 pt-1 gap-1'>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={elevator_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Elevator</p>
                </div>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={room_service_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Room Service</p>
                </div>
            </div>
            <div className='flex justify-center items-center text-white p-1 gap-1'>
                <p className='text-xs font-normal'>Rs.<span className='text-2xl font-bold'>1,355</span> /night</p>
                <img className='w-7 cursor-pointer' src={add_logo} alt="" />
            </div>
            </div>
        </div>
        <div className='bg-[#22272f] rounded-lg flex flex-col'>
            <img className='rounded-lg h-[37vh]' src={hotel_image_2} alt="" />
            <div className='flex justify-between items-center p-1'>
                <p className='text-white text-xl font-bold pl-2'>Hotel Aditi Inn</p>
                <img className='w-20 pr-2' src={star} alt="" />
            </div>
            <div className='flex justify-start items-center gap-2 px-2 pb-2'>
                <img className='w-5' src={location} alt="" />
                <p className='text-[#c2c2c2] font-normal text-sm'>Madhupur,JH - 815353</p>
            </div>
            <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center p-1 pt-1 gap-1'>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={elevator_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Elevator</p>
                </div>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={room_service_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Room Service</p>
                </div>
            </div>
            <div className='flex justify-center items-center text-white p-1 gap-1'>
                <p className='text-xs font-normal'>Rs.<span className='text-2xl font-bold'>1,355</span> /night</p>
                <img className='w-7 cursor-pointer' src={add_logo} alt="" />
            </div>
            </div>
        </div>
        <div className='bg-[#22272f] rounded-lg flex flex-col'>
            <img className='rounded-lg h-[37vh]' src={hotel_image_3} alt="" />
            <div className='flex justify-between items-center p-1'>
                <p className='text-white text-xl font-bold pl-2'>Hotel Aditi Inn</p>
                <img className='w-20 pr-2' src={star} alt="" />
            </div>
            <div className='flex justify-start items-center gap-2 px-2 pb-2'>
                <img className='w-5' src={location} alt="" />
                <p className='text-[#c2c2c2] font-normal text-sm'>Madhupur,JH - 815353</p>
            </div>
            <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center p-1 pt-1 gap-1'>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={elevator_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Elevator</p>
                </div>
                <div className='flex justify-center items-center p-1 bg-[#d9d9d9] rounded-lg'>
                    <img className='w-4' src={room_service_logo} alt="" />
                    <p className='text-[#7a7a7a] font-normal text-xs'>Room Service</p>
                </div>
            </div>
            <div className='flex justify-center items-center text-white p-1 gap-1'>
                <p className='text-xs font-normal'>Rs.<span className='text-2xl font-bold'>1,355</span> /night</p>
                <img className='w-7 cursor-pointer' src={add_logo} alt="" />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HotelCard
