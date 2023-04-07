import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/contact/Banner';
import Footer from '../components/Footer';
import Header from '../components/frontend/Header';
import LargeCard from '../components/LargeCard';

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const stores = await prisma.stores.findMany();
    return {
      props: {
        stores
      }
    };
  }

const Showroom = ({ stores }) => {
    return (
        <div className='w-[700px] md:w-full lg:w-full sm:w-full'>
            <Head>
                <title>HOSANA GROUP - SHOWROOM</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <div className="max-w-7xl mx-auto px-8 sm:px-16">
                     {stores.map(store => (
                        <LargeCard
                            img={store.img}
                            title={store.name}
                            map={store.map}
                            contact={store.contact}
                            description={store.description}
                            buttonText="Map"
                        />
                    ))}
            </div>
            <Footer />
        </div>
    );
}

export default Showroom;
