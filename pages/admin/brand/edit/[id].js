import Head from 'next/head';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import Header from '../../../../components/admin/Header';
import SideNavbar from '../../../../layout/SideNavbar';
import prisma from '../../../../utils/prisma';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ params }) {
    const brand = await prisma.brands.findMany({
        where: {
            id: params.id
        }
    });
    return {
        props: {
            brand
        },
    }
}

const subCategorybyId = props => {
    const { brand } = props;
    const [name, setName] = useState(brand[0].name)
    const router = useRouter()
    //state

    const handleFormData = async (e) => {
        e.preventDefault();
        const id = brand[0].id;
        const res = await fetch("/api/brand/editdata", {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                id: id
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await res.json();
            if (!result) {
                toast('Something Wrong!', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
            } else {
                toast('Successfully Edit data!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
            }
        router.push("/admin/brandPage");
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
                        <h1 className='text-lg font-semibold text-heading'>Edit Brands</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Details</h4>
                                <p className='text-sm'>Edit Brands</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="name" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Name</label>
                                    <input type="text"value={name} onChange={e => setName(e.target.value)} name="name" id="name" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Edit Category</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

export default subCategorybyId;    
