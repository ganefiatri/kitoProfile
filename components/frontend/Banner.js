import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation } from 'swiper';

const Banner = ({ picture }) => {
    // console.log(picture)
    return (
        <>
            <Swiper className='relative w-[600px] md:w-full lg:w-full sm:w-full' navigation={true} modules={[Navigation]}>
                {picture.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='absolute top-80 left-28 z-auto justify-center items-start text-white'>
                            <h5 className="text-2xl font-extralight mb-5">Hosana Kito Group</h5>
                            <h5 className="text-5xl font-bold">{item.title}</h5>
                        </div>
                        <img src={item.img} alt={item.title} className="block w-full h-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div id="carouselExampleIndicators" className="carousel slide relative w-full" data-bs-ride="carousel">
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
                            src="https://hokito.sgp1.digitaloceanspaces.com/Dekor.jpg"
                            className="block w-full h-auto"
                            alt="Wild Landscape"
                        />
                        <div className="carousel-caption space-y-5 hidden md:block absolute justify-center items-start mb-56">
                            <h5 className="text-2xl font-extralight">Hosana Kito Group</h5>
                            <h5 className="text-5xl font-bold">Inovations that</h5>
                            <h5 className="text-5xl font-thin">Never Ends</h5>
                        </div>
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src="https://hokito.sgp1.digitaloceanspaces.com/tile.jpg"
                            className="block w-full h-auto"
                            alt="Camera"
                        />
                        <div className="carousel-caption space-y-5 hidden md:block absolute justify-center items-start mb-56">
                            <h5 className="text-2xl font-extralight">Hosana Kito Group</h5>
                            <h5 className="text-5xl font-bold">We will Guide You</h5>
                            <h5 className="text-5xl font-thin">To Inovate</h5>
                        </div>
                    </div>
                    <div className="carousel-item float-left w-full">
                        <img
                            src="https://hokito.sgp1.digitaloceanspaces.com/living.jpg"
                            className="block w-full h-auto"
                            alt="Exotic Fruits"
                        />
                        <div className="carousel-caption space-y-5 hidden md:block absolute justify-center items-start mb-56">
                            <h5 className="text-2xl font-extralight">Hosana Kito Group</h5>
                            <h5 className="text-5xl font-bold">Your Happiness is</h5>
                            <h5 className="text-5xl font-thin">Our Concern</h5>
                        </div>
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
            </div> */}
        </>
    );
}

export default Banner;
