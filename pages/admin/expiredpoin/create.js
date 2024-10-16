import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from '../../../components/admin/Header';
import SideNavbar from '../../../layout/SideNavbar';
import prisma from '../../../utils/prisma';
import Select from 'react-select';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Create = ({ userPhone, poinCount }) => {
    // const { data: session } = useSession();
    const [selectedNames, setSelectedNames] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [expired, setExpired] = useState('');
    const router = useRouter();

    const handleFormData = async (e) => {
        e.preventDefault();
        // await axios.post("/api/category/createdata",forms);
        // const phoneNumber = selectedNumber.map(items => items.id)
        // const multiProduct = selectedNames.map(items => items.id);
        const res = await fetch("/api/expiredpoin/createdata", {
            method: "POST",
            body: JSON.stringify({
                number: selectedNumber.id,
                poin: String(selectedNames[0]),
                date: expired
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await res.json();
        if (result) {
            toast('Succesfully Insert Data, fill again!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
        } else {
            toast('Failed Inserting Data! Try Again', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        }

        router.push("/admin/expiredPoinPage");

    }

    const optionPhone = userPhone.map(item => ({ label: item.number, id: item.id }))


    const handleChangeNumber = (selectedNumber) => {
        setSelectedNumber(selectedNumber)
        router.push(`/admin/expiredpoin/create/?phoneNo=${selectedNumber.label}`)
        const totalPoin = poinCount.map(item => item.history.reduce((sum, items) => sum + parseInt(items.productDetail.poin), 0));
        setSelectedNames(totalPoin)
    }
    // console.log(selectedNumber.id)
    return (
        <>
            <Header />
            <SideNavbar>
                <Head>
                    <title>HOKITO GROUP</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" href="/assets/favicon/favicon.ico" />
                </Head>
                {/* subCategory */}
                <section>
                    <div className='flex border-b border-dashed border-border-base py-5 sm:py-8'>
                        <h1 className='text-lg font-semibold text-heading'>Create Expired Poin</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='mb-5 w-1/2'>
                            <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Phone Number</label>
                            <Select
                                options={optionPhone}
                                value={selectedNumber}
                                onChange={handleChangeNumber}
                                placeholder="Choose Phone Number"
                            />
                        </div>
                        <div className='mb-5 w-1/2'>
                            <label for="date" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Date</label>
                            <input type="date" value={expired} min={0} onChange={e => setExpired(e.target.value)} name="date" id="date" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' />
                        </div>
                        {selectedNames && <div className='mb-5  w-1/2'>
                            <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>Total Poin</label>
                           <input type="text" disabled name="poin" value={selectedNames}/>
                        </div>}
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Add Expired Date</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

export default Create;

export async function getServerSideProps(context) {
    // console.log(context.query.phoneNo)
    // const session = await getSession({ req });
    const userPhone = await prisma.phone_user_poin.findMany();
    const poinCount =  await prisma.phone_user_poin.findMany({
        where:{
            number: context.query.phoneNo
        },
        select: {
            id: true,
            number: true,
            history: {
                select:{
                    productDetail: {
                        select:{
                            poin: true
                        }
                    }
                }
            }
        }
    })

    // if (!session) {
    //     return {
    //         redirect: {
    //             destination: "/auth/login",
    //             permanent: false
    //         }
    //     }
    // }
    // autorize user
    return {
        props: {  userPhone, poinCount }
    }
}