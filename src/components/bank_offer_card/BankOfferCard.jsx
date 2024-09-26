import React from 'react'

const BankOfferCard = ({axis_img}) => {
  return (
    <div className='flex justify-between rounded-xl bg-[#ff4d00]'>
      <img className='w-[10vw]' src={axis_img} alt="axis" />
      <div className='flex flex-col justify-center items-center text-white p-3'>
        <p className='font-medium text-sm'><span className='font-bold text-4xl'>10%</span><br />
        OFF WITH<br />
        AXIS CREDIT CARDS
        <br />
        <br />
        USE CODE:<br />
         <span className='font-bold text-base'>AXIS20</span>
        </p>
      </div>
    </div>
  )
}

export default BankOfferCard
