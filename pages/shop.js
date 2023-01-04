import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/frontend/Header';
import ProductCardSearch from '../components/product/ProductCardSearch';
import Banner from '../components/shop/Banner';
import prisma from '../utils/prisma';

const Shop = ({products}) => {
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
                    <h2 className='text-4xl font-thin pb-3 text-left'>Product</h2>
                    <p className='text-gray-400 font-extralight text-left pb-5 cursor-pointer underline'>View all </p>
                    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                        {products.map(item => (
                            <ProductCardSearch key={item.id} title={item.title} img={item.image} price={item.price} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Shop;

export async function getServerSideProps() {
    const products = await prisma.product.findMany();
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      }
    };
  } 
