import Image from 'next/image'
import React from 'react'

function ProductCard({ img, title, price, description, quantity, subCategory, discount, place, group, unit }) {
    const Format = price;
    const currencyFormat = Format.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const DiscountPrice = price * discount / 100;
    const TotalDiscPrice = price - DiscountPrice;
    const FormatTotalPrice = TotalDiscPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="cursor-pointer">
            <div className="relative h-full w-64">
                <div class="w-full p-4">
                    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-t-lg overflow-hidden">
                        <div class="relative pb-48 overflow-hidden">
                            <Image class="absolute inset-0 h-full w-full" layout="fill" src={img} alt={title} />
                            <p class="flex animate-bounce w-8 h-8 m-2 mx-48 text-xs font-bold text-slate-600 absolute items-center justify-center text-center bg-yellow-500 rounded-full">
                                {discount}%
                            </p>
                        </div>
                    </a>
                    <div class="p-4 bg-slate-50">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                        <h2 class="mt-2 mb-2 font-bold">{title}</h2>
                        <p className='text-sm truncate'>{description}</p>
                        <div class="mt-3 grid grid-cols-2 items-center">
                            <span class="font-bold text-red-500 text-xs line-through">{currencyFormat} IDR</span>
                            <span class="font-bold text-sm">{FormatTotalPrice} IDR</span>
                        </div>
                    </div>
                    <div class="p-4 bg-slate-50 border-t border-b text-xs text-gray-800">
                        <span class="flex items-center mb-1">
                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> Place at {place}
                        </span>
                        <span class="flex items-center mb-1">
                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> Product from {group}
                        </span>
                        <span class="flex items-center mb-1">
                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 1 {unit}
                        </span>
                        <span class="flex items-center">
                            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> {quantity} quantity
                        </span>
                        <span class="flex items-center">
                            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> {subCategory} Category
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard