import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import { HiPlusSm, HiSearch, HiArrowDown } from 'react-icons/hi';
import Header from '../../components/admin/Header';
import SideNavbar from '../../layout/SideNavbar';

const ProductPage = () => {
    const { data: session } = useSession()
    return (
        <>
            <Header />
            <SideNavbar>
                <Head>
                    <title>HOSANA GROUP</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" href="/assets/favicon/favicon.ico" />
                </Head>
                <div class="flex items-center justify-between pb-5">
                    <div>
                        <h1 class="text-2xl font-semibold leading-relaxed text-gray-600">Products</h1>
                        <p class="text-sm font-medium text-gray-500">
                            Let's grow to your business! Create your product and upload here
                        </p>
                    </div>
                    <button
                        class="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    >
                        <HiPlusSm class="w-6 h-6 fill-white" />
                        <span class="text-sm font-semibold tracking-wide">Create Item</span>
                    </button>
                </div>
                <div className='p-5 md:p-8 bg-white shadow rounded mb-8 flex flex-col'>
                    <div className='flex w-full flex-col items-center md:flex-row'>
                        <div className='mb-4 md:mb-0 md:w-1/4'>
                            <h1 className='text-lg font-semibold text-heading text-gray-600'>Products</h1>
                        </div>
                        <div className='flex w-full flex-col items-center mx-auto md:w-3/4'>
                            <form className='relative flex w-full items-center' role="search">
                                <label for="search" className='sr-only'>Search</label>
                                <button type="button" className='col-start-1 absolute p-2 text-base outline-none focus:outline-none active:outline-none'>
                                    <HiSearch className='h-5 w-5 text-gray-400'/>
                                </button>
                                <input type="text" name="searchText" id="search" placeholder='Type your query and press enter' aria-label='Search' autoComplete='off' className='px-10 py-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent'/>
                            </form>
                        </div>
                        <button type="button" className='mt-5 flex items-center whitespace-nowrap text-base font-semibold text-gray-500 md:mt-0 md:mx-5'>
                            Filter
                            <HiArrowDown className='h-6 w-6 text-gray-600'/>
                        </button>
                    </div>
                </div>
            </SideNavbar >
        </>
    );
}

export default ProductPage;

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