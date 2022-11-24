import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getSession, useSession } from "next-auth/react"
import Image from 'next/image'

function Dashboard() {
    const { data:session } = useSession()
    
    return (
        <div>
            <Header />
            <div className='max-w-7xl mx-auto px-8 sm:px-1'>
                <div class="w-full min-h-screen flex flex-col p-4">
                    <div class="bg-gray-200 text-gray-600 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <div class="rounded-full w-4 h-4 border border-purple-500"></div>
                                <div class="text-md font-bold">History Pembelian</div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="cursor-pointer">
                                    {session?.user.email}  
                                </div>
                                <div class="cursor-pointer">
                                    <img class="w-5 h-5 rounded-lg" src="https://i.pravatar.cc/300" />
                                </div>
                                
                            </div>
                        </div>
                        <div class="mt-4 text-gray-500 font-bold text-sm">
                            keramik
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard

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