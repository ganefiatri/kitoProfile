import React from 'react';

const Cardinfo = () => {
    return (
        <>
            {/* About */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ24lMjB0b2lsZXQlMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute ">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">About us</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Company Profile</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Hosana Kito Group was established in 1995 market Indonesia.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                        Read more
                    </a>
                </div>
            </div >

            {/* Browse */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1588095803059-6e4bbbe24dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Browse</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Our Product</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Complite Products Line here.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                        Browse
                    </a>
                </div>
            </div >

            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Contact</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Find Us Near You</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Local Dealers Nearby Your Location here.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                        Find Us
                    </a>
                </div>
            </div >
        </>
    )   
}

export default Cardinfo;
