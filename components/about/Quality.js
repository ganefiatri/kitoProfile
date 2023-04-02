import React from 'react';

const Quality = ({img, title, detail}) => {
    return (
        <>
            <div className='relative'>
                <h2 className='font-medium text-3xl pt-2 tracking-wide'>{title}</h2>
                <div className='flex p-2 lg:p-4'>
                    <h2 className='text-sm leading-7'>{detail}</h2>
                </div>
            </div>
            <div className='flex relative h-[400px]'>
            {/* <img src="https://images.unsplash.com/photo-1635247049694-0269c357ab69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' /> */}
                <img src={img} alt="" className='w-full bg-cover' />
            </div>
        </>
    );
}

export default Quality;
