import React from 'react';
import SideNavbar from '../../layout/SideNavbar';
import { getSession, useSession } from "next-auth/react"

const HomePage = () => {
    const { data: session } = useSession()
    return (
        <SideNavbar>
            <div className='flex h-full flex-col justify-start items-left p-10'>
                <div class="justify-center">
                    {/* input Header text */}
                    <div class="mb-3 xl:w-96">
                        <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                        >Example label</label
                        >
                        <input
                            type="text"
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlInput1"
                            placeholder="Example label"
                        />
                    </div>
                    {/* upload foto */}
                    <div class="mb-3 w-96">
                        <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload Foto</label>
                        <input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                    </div>
                </div>
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