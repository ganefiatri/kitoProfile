import React from 'react'
import Image from 'next/image'


function Category({ img, title }) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
            <div className="p-2  relative justify-center items-center">
                <Image
                    className="rounded-xl h-60"
                    src={img}
                    alt={title}
                    width={500}
                    height={500}
                />
                <h2 className='p-2 uppercase text-center'>{title}</h2>
            </div>
        </div>
    )
}

export default Category