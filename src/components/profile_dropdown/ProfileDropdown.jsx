import React from 'react';

const ProfileDropdown = () => {
  return (
    <div className="absolute top-20 right-0 bg-zinc-400 shadow-md rounded-md w-[22vw] p-[2px]">
      <div className="p-4 border-b rounded-md bg-white">
        <h2 className='text-xl font-medium '>My Profile</h2>
        <p className='text-xs font-normal'>Manage Profile, Login Credentials.</p>
      </div>
      <div className="p-4 border-b rounded-md bg-white">
        <h2 className='text-xl font-medium'>My Trips</h2>
        <p className='text-xs font-normal'>See all Bookings, Modify & Cancel, Refund Status</p>
      </div>
      <div className="p-4 rounded-md bg-white">
        <h2 className='text-xl font-medium'>My Wallet</h2>
        <p className='text-xs font-normal'>Plan Tour, Save in Installments, Pay Due or Balance Payments</p>
      </div>
    </div>
  );
};

export default ProfileDropdown;