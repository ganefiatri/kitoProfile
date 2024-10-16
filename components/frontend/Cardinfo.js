import React from 'react';

const Cardinfo = () => {
    return (
        <>
            {/* About */}
            <div className='md:flex justify-center items-center md:grid-cols-3'>
                <div className="flex p-3 justify-center items-center md:col-span-1 relative">
                    <div className='item-center justify-center'>
                        <img src="https://hokito.nyc3.digitaloceanspaces.com/img-sejarah.jpg" alt="" className='w-[400px] h-[300px]'/>
                    </div>
                    <div className="p-10 mt-14 md:mt-6 absolute ">
                        <a href="#">
                            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-200 dark:text-white uppercase">About us</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Company Profile</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300">Hosana Kito Group was established in 1995 market Indonesia.</p>
                        <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                            Read more
                        </a>
                    </div>
                </div >

                {/* Browse */}
                < div className="flex p-3 justify-center items-center md:col-span-1 relative" >
                    <div className='item-center justify-center'>
                        <img src="https://hokito.nyc3.digitaloceanspaces.com/img-sejarah.jpg" alt="" className='w-[400px] h-[300px]'/>
                    </div>
                    <div className="p-10 mt-14 md:mt-6 absolute">
                        <a href="#">
                            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Browse</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Our Product</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Complite Products Line here.</p>
                        <a href="/product" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                            Browse
                        </a>
                    </div>
                </div >

                {/* Contact */}
                < div className="flex p-3 justify-center items-center col-span-1 relative" >
                    <div className='item-center justify-center'>
                        <img src="https://hokito.nyc3.digitaloceanspaces.com/img-sejarah.jpg" alt="" className='w-[400px] h-[300px]'/>
                    </div>
                    <div className="p-10 mt-14 md:mt-6 absolute">
                        <a href="#">
                            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Contact</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Find Us Near You</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Local Dealers Nearby Your Location here.</p>
                        <a href="/contact" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                            Find Us
                        </a>
                    </div>
                </div >
            </div>
        </>
    )   
}

export default Cardinfo;
