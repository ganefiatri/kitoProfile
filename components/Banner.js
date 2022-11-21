import Image from 'next/image'
import React from 'react'
import house from '../assets/home.jpg' 
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
        src={house}
        layout="fill"
        objectFit="cover"
        />
         <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm xl:text-2xl xl:font-bold text-white sm:text-lg">Not sure where to Buy Perfect Furniture ?</p>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Check Our Store Here</button>
        </div>
    </div>
  )
}

export default Banner