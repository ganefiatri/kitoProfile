import React from 'react';

const Cardinfo = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 sm:px-16 flex justify-center items-center'>
            <div className='pt-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-2.5">
                    {/* About */}
                    <div class="flex p-3 justify-center items-center relative max-w-sm bg-white rounded-lg">
                        <img class="rounded-lg" src="https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ24lMjB0b2lsZXQlMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div class="p-10 mt-14 absolute ">
                            <a href="#">
                                <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">About us</h5>
                            </a>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Company Profile</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-300">Hosana Kito Group was established in 1995 market Indonesia.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                                Read more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Browse */}
                    <div class="flex p-3 justify-center items-center relative max-w-sm bg-white rounded-lg">
                        <img class="rounded-lg" src="https://images.unsplash.com/photo-1588095803059-6e4bbbe24dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div class="p-10 mt-14 absolute">
                            <a href="#">
                                <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Browse</h5>
                            </a>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Our Product</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Complite Products Line here.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                                Browse
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div class="flex p-3 justify-center items-center relative max-w-sm bg-white rounded-lg">
                        <img class="rounded-lg" src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div class="p-10 mt-14 absolute">
                            <a href="#">
                                <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">Contact</h5>
                            </a>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Find Us Near You</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-300">Check Our Hosana Kito Group Local Dealers Nearby Your Location here.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                                Find Us
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardinfo;
