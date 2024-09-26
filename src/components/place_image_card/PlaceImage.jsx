import React, { useContext } from 'react'
import placeImges from '../assets/placeImages'

const PlaceImage = () => {
  return (
    <div className='rounded-lg flex items-center justify-center mx-auto gap-7 py-2'>
        {placeImges.map((image)=>{
            return(
                <div key={image.id}>
                    <img className='h-16 w-36 rounded-t-lg' src={image.image} alt={image.name} />
                    <p className='bg-[#424f63] rounded-b-lg text-white text-center text-base font-medium'>{image.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default PlaceImage
