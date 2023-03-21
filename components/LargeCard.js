import Image from 'next/image'
import React from 'react'
import { MdMap } from 'react-icons/md'
import {FaWhatsapp} from "react-icons/fa";

function LargeCard({ img, company ,title, description, buttonText, contact, map }) {
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
              <p className='mb-5'>{contact}</p>
  
              <a href={map} target='_blank' className="w-full flex px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out justify-center justify-items-center items-center mb-2"><MdMap className='h-6 w-6 mr-2'/>{buttonText}</a>
              <a href="https://api.whatsapp.com/send?phone=6281260038883" className="w-full flex px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out justify-center justify-items-center items-center" target="_blank"><FaWhatsapp className='h-6 w-6 mr-2'/> Whatsapp us</a>
          </div>
      </div>
    )
  }
  
  export default LargeCard