import React from 'react'
import Image from 'next/image'


function Category({ img, title }) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-300 hover:scale-105 transition transform duration-200 ease-out">
            <div className="p-2 h-16 w-16 relative justify-center items-center">
                <Image
                    className="rounded-xl"
                    src={img}
                    layout="fill bg-contain"
                />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Category