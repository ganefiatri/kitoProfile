import Image from 'next/image'
import React from 'react'

function ProductCard({ img, title, price, description, quantity, subCategory }) {
    return (
        <>
            <div className='flex flex-wrap -mx-4'>
                <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-t-lg overflow-hidden">
                        <div class="relative pb-48 overflow-hidden">
                            <img class="absolute inset-0 h-full w-full object-cover" src={img} alt={title} />
                        </div>
                    </a>
                    <div class="p-4 bg-slate-50">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                        <h2 class="mt-2 mb-2 font-bold">{title}</h2>
                        <p className='text-sm truncate'>{description}</p>
                        <div class="mt-3 flex items-center">
                            <span class="font-bold text-xl">{price}</span>&nbsp;<span class="text-sm font-semibold">IDR</span>
                        </div>
                    </div>
                    <div class="p-4 bg-slate-50 border-t border-b text-xs text-gray-800">
                        <span class="flex items-center mb-1">
                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> {quantity} Quantity
                        </span>
                        <span class="flex items-center">
                            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> {subCategory}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard