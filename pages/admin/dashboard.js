import React from 'react'
import Header from '../../components/admin/Header'
import { getSession, useSession } from "next-auth/react"
import SideNavbar from '../../layout/SideNavbar'

const Dashboard = () => {
    const { data: session } = useSession()

    return (
        <div className='flex min-h-screen flex-col bg-gray-100 transition-colors duration-150'>
            <Header/>
            <SideNavbar/>
        </div>
    )
}

export default Dashboard;

// Dashboard.layout = Admin;


export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (session?.user.role != "ADMIN") {
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