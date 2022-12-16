import React from 'react'
import Head from 'next/head'
import Header from '../../components/admin/Header'
import Footer from '../../components/Footer'

import { getSession, useSession } from "next-auth/react"
import SideNavbar from '../../layout/SideNavbar'

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <div className='flex min-h-screen flex-col bg-gray-100 transition-colors duration-150'>
            <Header/>
            <SideNavbar/>
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