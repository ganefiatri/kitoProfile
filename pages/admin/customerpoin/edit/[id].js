import Head from 'next/head';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import Header from '../../../../components/admin/Header';
import SideNavbar from '../../../../layout/SideNavbar';
import prisma from '../../../../utils/prisma';
import Select from 'react-select';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ params }) {
    const users = await prisma.customer_poin.findMany({
        where: {
            id: parseInt(params.id)
        }
    });
    const customer = await prisma.history_poin.findMany()
    return {
        props: {
            users,
            customer
        },
    }
}

const CustomerPoinbyId = props => {
    const { users, customer } = props;
    const router = useRouter()
    const [userpoin, setUserPoin] = useState(users[0].ar_no)
    const [selectedNames, setSelectedNames] = useState([]);

    const optionProduct = customer.map(item => ({ label: `${item.nama_cust} - ${item.no_faktur}`, id: item.id, value: item.id }));
    const handleChange = (options) => {
        setSelectedNames(options)
    }

    const handleFormData = async (e) => {
        e.preventDefault();
        const id = users[0].id;
        const res = await fetch("/api/customerpoin/editdata", {
            method: "PUT",
            body: JSON.stringify({
                number: userpoin,
                id: id,
                multipleId: selectedNames
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await res.json();
        if(!result){
            toast('Something Wrong!', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        }else{
            toast('Successfully Linked data!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
            router.push("/admin/linkCustomerPage")
        }
    }

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
                {/* Category */}
                <section>
                    <div className='flex border-b border-dashed border-border-base py-5 sm:py-8'>
                        <h1 className='text-lg font-semibold text-heading'>Link Customer Poin To History Poin</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Details</h4>
                                <p className='text-sm'>Add & Link to history customer poin</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="number" className='block mb-3 text-sm font-normal leading-none text-gray-400'>No Faktur</label>
                                    <input type="text" disabled inputmode="numeric" pattern="[0-9]*" value={userpoin} onChange={e => setUserPoin(e.target.value)} name="number" id="number" className='px-4 h-12 flex items-center text-gray-500 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' />
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-gray-400 font-normal text-sm leading-none mb-3'>History Poin (sesuaikan dengan no faktur)</label>
                                    <Select
                                        isMulti
                                        name="products"
                                        options={optionProduct}
                                        onChange={handleChange}
                                        placeholder="Choose Product" />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Edit User Poin</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

export default CustomerPoinbyId;    
