import React from 'react'
import { getSession, useSession } from "next-auth/react"
import CardBarChart from '../../components/Cards/CardBarChart'
import CardLineChart from '../../components/Cards/CardLineChart'
import CardPageVisits from '../../components/Cards/CardPageVisits'
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic'

// layout for page

import Admin from "../../layout/Admin";

export default function Dashboard() {
    const { data: session } = useSession()

    return (
        <>
            <Admin>
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardLineChart />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardPageVisits />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic />
                    </div>
                </div>
            </Admin>
        </>
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