import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import Header from '../../../components/admin/Header';
import SideNavbar from '../../../layout/SideNavbar';
import {useRouter} from 'next/router';

export default function Create() {
    const { data: session } = useSession();
    const [imageUploaded, setImageUploaded] = useState();
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [name, setName] = useState('');
    const router = useRouter();


    const handleImage = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        setImageUploaded(file);
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            // console.log(e.target.result);
            setCreateObjectURL(e.target.result);
        };
        fileReader.readAsDataURL(file);
        // setImageUploaded(e.target.files[0]);
        // setCreateObjectURL(URL.createObjectURL(e.target.files[0]));
    }

    const handleFormData = async (e) => {
        e.preventDefault();
            const forms = new FormData();
            forms.append('name', name);
            forms.append('image', imageUploaded);
            // await axios.post("/api/category/createdata",forms);
            const result = await fetch("/api/category/createdata", {
                method: "POST",
                body: forms
            });
            
            router.push("/admin/categoryPage");
            // console.log({result});


    }

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
                {/* Category */}
                <section>
                    <div className='flex border-b border-dashed border-border-base py-5 sm:py-8'>
                        <h1 className='text-lg font-semibold text-heading'>Create New Category</h1>
                    </div>
                    <form onSubmit={handleFormData}>
                        <div className='my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Image</h4>
                                <p className='text-sm'>Upload Your Category Image here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <section className='upload'>
                                    <label for="dropzone-file" className='border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'>
                                        <FaUpload />
                                        <p className='mt-4 text-center text-xs'>
                                            <span className='font-normal text-gray-600'>Upload an image </span>
                                            or drag and drop
                                            <br />
                                            <span className='text-xs'>PNG, JPG</span>
                                        </p>
                                        <input id="dropzone-file" onChange={handleImage} type="file" className='hidden' />
                                        <div className='flex mb-5'>
                                            {createObjectURL && <img src={createObjectURL} alt="image" width={100} className='h-[100px] object-contain' />}
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                        <div className='my-5 flex flex-wrap sm:my-8'>
                            <div className='w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:px-4 md:w-1/3 md:py-5'>
                                <h4 className='text-base font-semibold mb-2'>Details</h4>
                                <p className='text-sm'>Add Category and Subcategory from here</p>
                            </div>
                            <div className='p-5 md:p-8 bg-white shadow rounded w-full sm:w-8/12 md:w-2/3'>
                                <div className='mb-5'>
                                    <label for="name" className='block mb-3 text-sm font-normal leading-none text-gray-400'>Name</label>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent' autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-end'>
                            <button type="submit" className='inline-flex items-center justify-center flex-shrink-0 font-normal leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-400 text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12'>Add Category</button>
                        </div>
                    </form>
                </section>
            </SideNavbar>
        </>
    );
}

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