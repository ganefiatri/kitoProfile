import React from 'react';

const Quality = () => {
    return (
        <>
            <div className='relative'>
                <h2 className='font-medium text-3xl pt-2 tracking-wide'>Export Quality</h2>
                <h3 className='pt-3 text-sm leading-6'>Most of our faucets and showers has now gained approval from PUB, Singapore’ national water agency which compromises of:</h3>
                <div className='flex p-2 lg:p-4'>
                    <div className='w-20 h-20 pr-4'>
                        <h2 className='text-6xl text-gray-300'>01</h2>
                    </div>
                    <div className='pl-2'>
                        <p className='text-justify text-sm leading-7 font-medium'>Non-hazardous chemical test</p>
                        <p className='text-justify text-xs leading-7'>Our products are proven by PUB test to be environmental friendly and give no harm to any skin touch.</p>
                    </div>
                </div>
                <div className='flex p-2'>
                    <div className='w-20 h-20'>
                        <h2 className='text-6xl text-gray-300'>02</h2>
                    </div>
                    <div className='pl-2'>
                        <p className='text-justify text-sm leading-7 font-medium'>Excellent in water saving performance</p>
                        <p className='text-justify text-xs leading-7'>Our product is certified by PUB Singapore for its water efficiency.</p>
                    </div>
                </div>
                <div className='flex p-2 lg:pl-3'>
                    <div className='w-20 h-20'>
                        <h2 className='text-6xl text-gray-300'>03</h2>
                    </div>
                    <div className='pl-2 lg:pl-3'>
                        <p className='text-justify text-sm leading-7 font-medium'>Mechanical & Performance test</p>
                        <p className='text-justify text-xs leading-7'>Precision and durable over Award-Winning Worldwide Brands, Sedal for mixer faucets and Hent for cold faucets.</p>
                    </div>
                </div>
            </div>
            <div className='flex relative h-[500px]'>
                <img src="https://images.unsplash.com/photo-1635247049694-0269c357ab69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' />
            </div>
        </>
    );
}

export default Quality;
