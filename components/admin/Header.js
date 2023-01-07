import { getSession, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi"

const Header = () => {
    const { data: session } = useSession()

    function handleSignOut(e) {
        e.preventDefault()
        signOut()
    }
    return (
        <header className='fixed z-40 w-full bg-white shadow'>
            <nav className='flex items-center justify-between px-5 py-4 md:px-8'>
                <button className='flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none lg:hidden'>
                    <HiOutlineMenuAlt2 />
                </button>
                <div className='mx-5 m-auto hidden md:flex'>
                    <a href="/" className='inline-flex'>
                        <span className='relative overflow-hidden w-[128px] h-[40px]'>
                            <span className='block overflow-hidden bg-none absolute inset-0'>
                                <img src='/assets/logo-hosana.png' className='object-contain w-full h-full absolute' />
                            </span>
                        </span>
                    </a>
                </div>
                <div className='space-x-8 flex items-center'>
                    <button onClick={handleSignOut} className='inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-gray-700 text-white border border-transparent hover:bg-gray-hover px-3 py-0 h-9 text-sm mx-4 md:mx-6'>Logout</button>
                    <div className='relative inline-block text-left'>
                        <button className='flex items-center focus:outline-none' type="button" id='headlessui-menu-button-1' aria-haspopup="true" aria-expanded="false">
                            <div className='relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100'>
                                <span className='block overflow-hidden bg-none border absolute inset-0'>
                                   {session && <img src={session.user.image = "null" ? "../images/default-img.jpg" : session.user.image} alt="user"/>} 
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

