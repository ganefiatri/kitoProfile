import React from 'react'
import Image from 'next/image'


const Category = ({ img, title }) => {
    return (
        <div className="cursor-pointer">
            <div className="relative h-full w-56">
                <a href="/product">
                    <Image
                        className="rounded-xl h-60"
                        src={img}
                        alt={title}
                        width={500}
                        height={500}
                    />
                    <h2 className='p-2 uppercase text-center'>{title}</h2>
                </a>
            </div>
        </div>
    )
}

export default Category;