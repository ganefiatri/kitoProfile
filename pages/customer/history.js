import Head from 'next/head';
import React from 'react';
import Banner from '../../components/contact/Banner';
import TableHistory from '../../components/customer/TableHistory';
import Header from '../../components/frontend/Header';
import prisma from '../../utils/prisma';

const History = ({historyByUser}) => {
    // console.log(historyByUser)
    return (
        <div className='w-[600px] md:w-full lg:w-full sm:w-full'>
            <Head>
                <title>HOSANA GROUP</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            {/* header Section */}
            <Header />
            <Banner />

            <main className='max-w-7xl mx-auto px-2 sm:px-16'>
                <section className='pt-10'>
                    <h2 className='text-4xl font-thin pb-3 text-center'>History</h2>
                    <TableHistory history={historyByUser} />
                </section>
            </main>
        </div>
    );
}

export default History;

export async function getServerSideProps(context) {
    // console.log(context.query.q)
    const historyByUser = await prisma.user.findMany({
        where:{
            id: context.query.q
        },
        include:{
           history: true,
        }
    });

    // autorize user
    return {
        props: { historyByUser }
    }
}