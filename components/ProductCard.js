import Image from 'next/image'
import React from 'react'
import house from '../assets/home.jpg' 

function ProductCard() {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    className="rounded-xl"
                    src={house}
                    layout="fill"
                />
            </div>
            <h3 className="text-2xl mt-3">Product</h3>
        </div>
    )
}

export default ProductCard