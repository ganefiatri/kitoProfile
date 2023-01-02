import Image from 'next/image'
import React from 'react'

function LargeCard({ img, company ,title, description, buttonText }) {
    return (
      <div className="relative py-10 cursor-pointer">
          <div className="relative h-[500px] min-w-[600px]">
              <Image
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  className="p-2 bg-contain"
              />
          </div>
          <div className="absolute top-60 left-12 text-white">
              <h5 className="text-xl mb-3 w-64 font-thin">{company}</h5>
              <h3 className="text-4xl mb-3 w-64 font-bold">{title}</h3>
              <p>{description}</p>
  
              <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transform transition duration-300 ease-out">{buttonText}</button>
          </div>
      </div>
    )
  }
  
  export default LargeCard