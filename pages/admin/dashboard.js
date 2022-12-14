import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getSession, useSession } from "next-auth/react"
import SideNavbar from '../../layout/SideNavbar'

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <SideNavbar>
            <Head>
                <title>HOSANA GROUP</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/vnd.microsoft.icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            {/* <SideNavbar/> */}
        </SideNavbar>
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