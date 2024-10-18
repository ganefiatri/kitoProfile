import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../../components/admin/Header';
import SideNavbar from '../../../layout/SideNavbar';


const Create = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleFormData = async (e) => {
        e.preventDefault();
           const name = e.target.name.value;
            // await axios.post("/api/category/createdata",forms);
            const res = await fetch("/api/unit/createdata", {
                method: "POST",
                body:JSON.stringify({
                    name: name,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await res.json();
            router.push("/admin/unitPage");

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
                {/* subCategory */}
                <section>
                    <div className='flex border-b border-dashed border-border-base py-5 sm:py-8'>
                        <h1 className='text-lg font-semibold text-heading'>Create New Unit</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Details</h4>
                                <p className='text-sm'>Add Unit from here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="name" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Name</label>
                                    <input type="text" name="name" id="name" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Add Unit</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

export default Create;

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

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