import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Header from '../components/frontend/Header';
import Banner from '../components/contact/Banner';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import prisma from '../utils/prisma';

const Shops = ({products}) => {
    const rowRef = useRef(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    };
    return (
        <div>
            <Head>
                <title>HOSANA GROUP</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <main className='max-w-7xl mx-auto px-2 sm:px-16'>
                <section className='pt-10'>
                    <h2 className='text-4xl font-thin pb-3 text-center'>Products</h2>
                    <p className='text-gray-400 font-extralight text-center pb-5 cursor-pointer underline'><a href="/product">View all</a></p>
                    <div className="group relative md:-ml-2">
                        <AiOutlineLeft className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`} onClick={() => handleClick("left")} />
                        <div ref={rowRef} className='flex overflow-scroll scrollbar-hide p-3 ml-3'>
                            {products.map(item => (
                                <ProductCard key={item.id} id={item.id} title={item.product.title} img={item.product.image} price={item.price} description={item.product.description} quantity={item.product.quantity} subCategory={item.subCategory.name} discount={item.discount} place={item.stores.name} group={item.product.group} unit={item.units.name} />
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

export default Shops;

export async function getServerSideProps() {
    const products = await prisma.product_detail.findMany({
      include: {
        product:true,
        subCategory: true,
        stores: true,
        units: true,
      },
      orderBy: {
        id: 'asc'
      }
    });
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      }
    };
  } 
