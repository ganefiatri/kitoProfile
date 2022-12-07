import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getSession, useSession } from "next-auth/react"

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <div>
            <Header/>
                <main className='max-w-7xl mx-auto px-8 pb-16 xl:grid xl:grid-cols-3 items-center justify-center'>
                    <div className='pt-6'>
                        <div className='bg-gray-200 w-[300px] h-[200px] border rounded-md shadow-md'>
                            <div className='p-2'>
                                <h2 className='font-bold'>PROFILE</h2>
                            </div>
                            <hr className='border border-red-500'/>
                            <div className='p-2'>
                                detail here
                            </div>
                        </div>
                    </div>

                    <div className='pt-6'>
                        <div className='bg-gray-200 w-[300px] h-[200px] border rounded-md shadow-md'>
                            <div className='p-2'>
                                <h2 className='font-bold'>Total Order</h2>
                            </div>
                            <hr className='border border-red-500'/>
                            <div className='p-2'>
                                detail here
                            </div>
                        </div>
                    </div>

                    <div className='pt-6'>
                        <div className='bg-gray-200 w-[300px] h-[200px] border rounded-md shadow-md'>
                            <div className='p-2'>
                                <h2 className='font-bold'>Point</h2>
                            </div>
                            <hr className='border border-red-500'/>
                            <div className='p-2'>
                                detail here
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}

// Dashboard.layout = Admin;


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