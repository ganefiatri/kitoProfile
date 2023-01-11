import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-10 px-16 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">About</h5>
            <p className='text-left leading-loose'>We always prioritize innovation and technology for our products. To maximize customer satisfaction, we provide 5 years warranty for our products and outstanding after-sales services.</p>
            <p className='text-gray-400 font-extralight pb-5 cursor-pointer underline'>View all </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Address</h5>
            <p>Head Office</p>
            <p>Jl. Gatot Subroto No. 317, Medan</p>
            <p>Sumatera Utara, 20158</p>
            <p className='text-gray-400 font-extralight pb-5 cursor-pointer underline'>View all </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Contact</h5>
            <p>0812 6003 8883</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Info</h5>
            <p>Terms Of use</p>
            <p>Become Our Partner</p>
            <p>Catalogue</p>
            <p>Gallery</p>
            <p>Projects</p>
        </div>
    </div>
  )
}

export default Footer