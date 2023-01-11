import React from 'react'
import Image from 'next/image'


function Category({ img, title }) {
    return (
        <div className="cursor-pointer">
            <div className="relative h-full w-56">
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