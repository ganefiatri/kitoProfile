import Head from 'next/head';
import { useRouter } from 'next/router';
import { func } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/contact/Banner';
import Footer from '../components/Footer';
import Header from '../components/frontend/Header';
import ProductCardSearch from '../components/product/ProductCardSearch';
import Search from '../components/product/Search';
import prisma from '../utils/prisma';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const Product = ({ productsQuery, productsLimit }) => {
    console.log(productsQuery)
    const [slideData, setSlide] = useState([])
    const router = useRouter()
    const queries = router.query.q;
    const rowRef = useRef(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    }

    return (
        <div>
            <Head>
                <title>HOSANA GROUP - Product</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <main className='max-w-7xl mx-auto px-2 sm:px-16'>
                <section className='pt-10 justify-items-center'>
                    <h2 className='text-4xl text-center font-thin pb-3'>Products</h2>
                    <p className='text-gray-400 font-extralight text-center pb-5 underline'>Search here for more product </p>
                    <Search />
                </section>
                <section className='pt-10'>
                <div className="group relative md:-ml-2">
                    <AiOutlineLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`} onClick={() => handleClick("left")} />
                    <div ref={rowRef} className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
                        {productsLimit.map(item => (
                            <ProductCardSearch key={item.id} title={item.title} img={item.image} price={item.price} description={item.description} quantity={item.quantity} subCategory={item.subCategory.name} />

                        ))}
                    </div>
                    <AiOutlineRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} onClick={() => handleClick("right")} />
                </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Product;

export async function getServerSideProps(context) {
    const q = context.query.q
    console.log(q)
    const productQuery = await prisma.product.findMany({
        where: {
            title: {
                search: q
            }
        },
        include: {
            subCategory: true,
        },
    });
    const productLimit = await prisma.product.findMany({
        include: {
            subCategory: true,
        },
        take: 6,
        orderBy: {
            id: 'asc'
        }
    })

    return {
        props: { productsQuery: JSON.parse(JSON.stringify(productQuery)) }, // will be passed to the page component as props
        props: { productsLimit: JSON.parse(JSON.stringify(productLimit)) }, // will be passed to the page component as props
    }
}