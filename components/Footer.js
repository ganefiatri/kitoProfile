import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-10 px-16 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">About</h5>
            <p className='leading-loose text-justify'>
                <a href="/aboutDynamic" className='underline'>More detail</a>
            </p>
            
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Address</h5>
            <p>Head Office</p>
            <p>Jl. Gatot Subroto No. 317, Medan</p>
            <p>Sumatera Utara, 20158</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Contact</h5>
            <p>0812 6003 8883</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Info</h5>
            <p>
                <a href="/">Home</a>
            </p>
            <p>
                <a href="/product">Product</a>
            </p>
            {/* <p>
                <a href="/showroom">Showroom</a>
            </p> */}
            <p>
                <a href="/store">Store</a>
            </p>
            <p>
                <a href="/contact">Contact</a>
            </p>
            {/* <p>
                <a href="/auth/login" className='bg-slate-300 p-2 border rounded-md'>Admin</a>
            </p> */}
        </div>
    </div>
  )
}

export default Footer;