import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-[600px] md:w-full lg:w-full sm:w-full'>
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
        </div>
    );
}

export default Banner;
