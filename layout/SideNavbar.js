import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
    MdCategory,
    MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots, BiUser } from "react-icons/bi";
import Link from "next/link";
import { getSession, signOut, useSession } from 'next-auth/react';
import Header from "../components/admin/Header";

function SideNavbar({ children }) {
    const { data: session } = useSession()

    function handleSignOut(e) {
        e.preventDefault()
        signOut()
    }
    return (
        <div className='flex flex-1 pt-20 bg-gray-100'>
            <aside className="xl:w-76 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto fixed bottom-0 hidden h-full w-72 overflow-y-auto bg-white px-4 pt-24 shadow lg:block">
                <div className="flex flex-col space-y-6 py-3">
                    <a className="text-start flex w-full items-center text-base text-body-dark focus:text-accent" href="/admin/homePage">
                        <MdOutlineSpaceDashboard className="w-5 h-5 mx-4"/>
                        <span>Dashboard</span>
                    </a>
                    <a className="text-start flex w-full items-center text-base text-body-dark focus:text-accent" href="/admin/categoryPage">
                        <MdCategory className="w-5 h-5 mx-4"/>
                        <span>ParentCategory</span>
                    </a>
                    <a className="text-start flex w-full items-center text-base text-body-dark focus:text-accent" href="/admin/dashboard">
                        <MdCategory className="w-5 h-5 mx-4"/>
                        <span>SubCategory</span>
                    </a>
                    <a className="text-start flex w-full items-center text-base text-body-dark focus:text-accent" href="/admin/dashboard">
                        <MdOutlineProductionQuantityLimits className="w-5 h-5 mx-4"/>
                        <span>Product</span>
                    </a>
                    <a className="text-start flex w-full items-center text-base text-body-dark focus:text-accent" href="/admin/dashboard">
                        <BiUser className="w-5 h-5 mx-4"/>
                        <span>Users</span>
                    </a>
                </div>
            </aside>
            <main className="lg:pl-72 xl:pl-76 lg:pr-72 xl:pr-1 w-full">
                <div className="w-full p-5 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default SideNavbar;
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