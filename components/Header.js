import React from 'react'
import { MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/')
      }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* first logo */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={handleClick}>
                <h1 className='xl:text-xl font-bold text-gray-600'>HOSANA KITO GROUP</h1>
            </div>

            {/* second search Button */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder='Search product' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <SearchIcon className='hidden md:inline-flex text-white h-8 bg-gray-700 rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {/* third account */}
            <div className='flex items-center justify-end text-gray-500 space-x-2'>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className="h-6"></MenuIcon>
                    <UserCircleIcon className="h-6"></UserCircleIcon>
                </div>
            </div>

        </header>
    )
}

export default Header