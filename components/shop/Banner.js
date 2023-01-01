import React from 'react';

const Banner = () => {
    return (
        <div className='justify-items-center grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-3 gap-2.5'>
            <div id="carouselExampleIndicators" className="carousel slide relative w-full col-span-2" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                        <img
                            src="https://aer.co.id/wp-content/uploads/2019/11/HOME-BANNER-1.jpg"
                            className="block w-full h-auto"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src="https://aer.co.id/wp-content/uploads/2019/11/HOME-BANNER-3.jpg"
                            className="block w-full h-auto"
                            alt="Camera"
                        />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src="https://aer.co.id/wp-content/uploads/2019/11/HOME-BANNER-4.jpg"
                            className="block w-full h-auto"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='relative w-full'>
                <div className="flex justify-center items-center relative max-w-sm pb-3" >
                    <img className="h-[225px] w-full" src="https://images.unsplash.com/photo-1596179140779-a95dd4e86125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="p-10 mt-14 absolute w-full">
                        <a href="#">
                            <h5 className="mb-2 text-sm font-thin tracking-tight text-gray-200 dark:text-white uppercase">Hosana Membership</h5>
                        </a>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Join Now</h5>
                        </a>
                        <a href="/auth/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                            Sign Up
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center relative max-w-sm" >
                    <img className="h-[225px] w-full" src="https://images.unsplash.com/photo-1622622290949-e15fa509d6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    <div className="p-10 mt-auto absolute w-full">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Product Packages</h5>
                        </a>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                            Browse Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
