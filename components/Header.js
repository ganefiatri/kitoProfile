import React from 'react'
import { MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const { data:session } = useSession()

    function handleSignOut(){
        signOut()
    }

    function handleSignIn(){
        signIn()
    }


    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* first logo */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={handleClick}>
                <Image src="http://localhost:3000/assets/hosana-logo1.jpg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* second search Button */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder='Search product' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <SearchIcon className='hidden md:inline-flex text-white h-8 bg-gray-700 rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {/* third account */}
            <div className='flex items-center justify-end text-gray-500 space-x-2'>
                {session ?(
                <div className='flex items-center space-x-2 border-2 p-2 cursor-pointer rounded-full'>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </div>
                ): ''}
                <Menu as="div" className="relative inline-block text-left">
                    <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                        <UserCircleIcon className="h-6"></UserCircleIcon>
                            <MenuIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            {session? <span>{session?.user.email}</span> : <span className='collapse'></span>}
                                        </a>
                                    )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                    <Menu.Item>
                                            {session ? (
                                            <button
                                                onClick={handleSignOut}
                                                type="submit"
                                                className='block w-full px-4 py-2 text-left text-sm'
                                            >
                                                Sign out
                                            </button>
                                            ) : <Link href={'/auth/login'} className='block w-full px-4 py-2 text-left text-sm'>SignIn</Link>}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    )
}

export default Header