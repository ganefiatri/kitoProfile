import React, { useState } from 'react';
import { BiCategoryAlt, BiGroup } from 'react-icons/bi';
import { FaList } from 'react-icons/fa';
import { MdOutlineAdUnits, MdPlace, MdProductionQuantityLimits } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from 'swiper';


const ProductDetail = ({ id, img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, title, price, description, quantity, subCategory, discount, place, group, unit,
    titleOne,
    titleTwo,
    titleThree,
    titleFour,
    titleFive,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const Format = price;
    const currencyFormat = Format.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const DiscountPrice = price * discount / 100;
    const TotalDiscPrice = price - DiscountPrice;
    const FormatTotalPrice = TotalDiscPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    
    return (
        <section className="py-10 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex flex-wrap mb-24 -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div className="sticky top-0 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-96">
                                
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#000000",
                                        "--swiper-pagination-color": "#000000",
                                    }}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="p-2"
                                >
                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img2} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img3} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img5} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img6} />
                                    </SwiperSlide><SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img7} />
                                    </SwiperSlide><SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img8} />
                                    </SwiperSlide><SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img9} />
                                    </SwiperSlide><SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img10} />
                                    </SwiperSlide><SwiperSlide>
                                        <img className='object-contain w-full lg:h-full' src={img11} />
                                    </SwiperSlide>
                                </Swiper>
                                {/* <img class="object-contain w-full lg:h-full" src={img} alt="" /> */}
                               
                            </div>
                            <div className="flex-wrap hidden -mx-2 md:flex">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={9}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mt-32 border cursor-pointer"
                                >
                                    <SwiperSlide>
                                        <img src={img} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img3} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img5} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img6} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img7} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img8} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img9} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img10} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img11} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <div className="lg:pl-20">
                            <div className="mb-6 ">
                                <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">New
                                    Arrival</span>
                                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {title}
                                </h2>
                                {/* <div class="flex flex-wrap items-center mb-6">
                                <ul class="flex mb-4 mr-2 lg:mb-0">
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <a class="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                                    View the acer store
                                </a>
                            </div> */}
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>Rp.{FormatTotalPrice}</span>
                                    <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Rp.{currencyFormat}</span>
                                </p>
                            </div>
                            {/* detail */}
                            <div className="mb-6">
                                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Detail Product :</h2>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                    <div className="p-3 lg:p-5 ">
                                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                                                <div className="w-full mb-4 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <MdOutlineAdUnits className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                Unit
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {unit}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <BiGroup className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                Group
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {group}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <MdPlace className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                Place
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {place}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <MdProductionQuantityLimits className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                Quantity
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {quantity}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-full md:ml-4 md:mt-3">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <BiCategoryAlt className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                Category
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {subCategory}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* spek */}
                            <div className="mb-6">
                                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Spesifications Product:</h2>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                    <div className="p-3 lg:p-5 ">
                                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                                                <div className="w-full mb-4 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <FaList className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {titleOne}
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {answerOne}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <FaList className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {titleTwo}
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {answerTwo}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <FaList className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {titleThree}
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {answerThree}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <FaList className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {titleFour}
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {answerFour}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-4 lg:mb-0 md:w-full md:ml-4 md:mt-3">
                                                    <div className="flex ">
                                                        <span className="mr-3 text-gray-500 dark:text-gray-400">
                                                            <FaList className='h-5 w-5' />
                                                        </span>
                                                        <div>
                                                            <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {titleFive}
                                                            </p>
                                                            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                {answerFive}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                <span className="text-base text-gray-600 dark:text-gray-400">Description</span>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {description}
                                    </span>
                                </p>
                            </div>
                            {/* <div class="mb-6 "></div>
                        <div class="flex flex-wrap items-center mb-6">
                            <div class="mb-4 mr-4 lg:mb-0">
                                <div class="w-28">
                                    <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                            <span class="m-auto text-2xl font-thin">-</span>
                                        </button>
                                        <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                            <span class="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4 lg:mb-0">
                                <button class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <a href="#" class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                                Add to cart
                            </a>
                        </div>
                        <div class="flex gap-4 mb-6">
                            <a href="#" class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
                                Buy now</a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* testing */}
            <div>

            </div>
        </section>
    );
}

export default ProductDetail;
