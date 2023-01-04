import Image from 'next/image'
import React from 'react'

function ProductCardSearch({ img, title, price }) {
    return (
        <div className="w-[200px] min-h-max bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={img} alt="product image" />
            </a>
            <div className="px-2 pb-5 pt-2">
                <a href="#">
                    <h5 className="text-lg font-normal tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <div class="flex items-center justify-between pt-2">
                    <span class="text-sm font-thin text-gray-600 dark:text-white">IDR {price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSearch