import React from 'react';
import { signOut, useSession } from 'next-auth/react'

const Cardcustomer = () => {
    const { data:session } = useSession()
    console.log(session)

    function handleSignOut(e) {
        e.preventDefault()
        signOut()
    }
    return (
        <>
            {/* About */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ24lMjB0b2lsZXQlMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute ">
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-slate-200 dark:text-white">{session?.user.name}</h5>
                        <span class="text-sm text-slate-200 dark:text-gray-400">{session?.user.email}</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <button onClick={handleSignOut} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
                        </div>
                    </div>
                </div>
            </div >

            {/* Browse */}
            < div className="flex p-3 justify-start items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1588095803059-6e4bbbe24dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Your Point</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Total Point</p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                        More Detail
                    </button>
                </div>
            </div >

            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Purchases</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">See here what you purchases from our store.</p>
                    <a href="/contact" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-105 transform transition duration-300 ease-out">
                        More Detail
                    </a>
                </div>
            </div >
        </>
    )
}

export default Cardcustomer;
