import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Banner from '../../components/customer/Banner';
import Cardcustomer from '../../components/customer/Cardcustomer';
import Footer from '../../components/Footer';
import Header from '../../components/frontend/Header';
import { auth } from "../../utils/firebase";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getSession, useSession } from 'next-auth/react';
import prisma from '../../utils/prisma';

const Dashboard = ({userPhone}) => {
    // console.log(userPhone.email)
    const { data: session } = useSession()
    const auth = getAuth();
    const [phone, setPhone] = useState('');
    const router = useRouter();
    // console.log(session)
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const phones = user.phoneNumber;
    //       const PhoneNumbers = '0' + phones.slice(3);
    //       setPhone(PhoneNumbers);
    //     } else {
    //         // signOut(auth)
    //         // router.push('/customer/dashboard')
    //     }
    // });

    const point = userPhone.map(item => item.customers.reduce((sum, items) => sum + parseInt(items.payment), 0));
    // const point = userPhone.map(item => item.redeem.map(items => items.total_poin))
    // console.log(point)
    const id = userPhone.map(item => item.id);
//    
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
                        <Cardcustomer phoneNumber={userPhone.map(item => item.email)} poin={point} id={id}/>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Dashboard;

export async function getServerSideProps({req}) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        }
    }
    // console.log(session.user.email)
    const userPhone = await prisma.user.findMany({
        where:{
            email: session.user.email
        },
        select: {
            id: true,
            phone: true,
            name: true,
            email: true,
            customers: {
                select:{
                    id: true,
                    payment: true,
                    histories: {
                        select:{
                            id: true
                        }
                    }
                }
            },
            redeem: {
                select: {
                    expiredAt: true,
                    total_poin: true,
                }
            }
        }
    });

    // autorize user
    return {
        props: { session, userPhone }
    }
}