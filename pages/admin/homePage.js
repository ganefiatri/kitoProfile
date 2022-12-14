import React from 'react';
import SideNavbar from '../../layout/SideNavbar';
import { getSession, useSession } from "next-auth/react"

const HomePage = () => {
    const { data: session } = useSession()
    return (
        <SideNavbar>
        <div className='flex h-full flex-col justify-center items-center'>
            <h1 className='text-4xl mb-5 font-bold'>HomePage</h1>
            <span className='text-7xl'>💬</span>
        </div>
        </SideNavbar>
    );
}

export default HomePage;

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