import Head from 'next/head';
import React from 'react';
import Banner from '../../components/customer/Banner';
import Cardcustomer from '../../components/customer/Cardcustomer';
import Footer from '../../components/Footer';
import Header from '../../components/frontend/Header';
import { signOut, getSession,  useSession } from 'next-auth/react'

const Dashboard = () => {
    const { data: session } = useSession()
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
                <section>
                    <div className='justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-3 ml-3 gap-2.5'>
                        {/* Card Info Section */}
                        <Cardcustomer />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Dashboard;

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        }
    }
    // autorize user
    return {
        props: { session }
    }
}