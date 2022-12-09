import React from 'react';

const Profile = () => {
    return (
        <>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest'>Company Profile</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Hosana Kito Group</h2>
                <h3 className='pt-3 font-medium text-md leading-6'>was established in 1997 entering sanitary wares in Indonesian market.</h3>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>Since then, Hosana Kito Group has grown from strength to strength and expanded it ranges of products to become Indonesia’s Industrial leader in sanitary wares.</p>
                <p className='pt-4 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>Ongoing investment in research and development, supported with testing and uncompromising quality control system, Hosana Kito Group has been recognized and trusted by the customers and real estate developers to supply bathroom fixtures and accessories to lots of hotel chains, residential and commercial projects in Indonesia.</p>
                <p className='pt-4 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>Every product becomes a real synthesis of quality, design, and style, to adapt modern and stylish lifestyle.</p>
            </div>
            <div className='flex relative h-[500px]'>
                <img src="https://images.unsplash.com/photo-1635247049694-0269c357ab69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' />
            </div>
            <div className='flex relative h-[500px]'>
                <img src="https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' />
            </div>
            <div className='relative'>
                <p className='pt-5 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>In addition to our expertise in our product lines, the company enjoys over 25 collective years of sales, technical, advisory and support experience. We now offer products and services covering the nations throughout distributors and a variety of domestic retail from traditional, modern, to online stores as well as International export markets.</p>
                <p className='pt-5 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>An important milestone of AER’s growth was the ability to satisfy the Singapore Statutory Board (PUB) in meeting the strict requirement and high end drinking water and sanitation standards in the region.</p>
                <p className='pt-4 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>Taking into consideration that our end-user customers are our primary business partner, we intentionally tend to achieve their satisfaction by supplying a range of quality products at their comfort and ease & implementation a long-term relationship based on safety, quality, timely service and an anticipation of their needs.</p>
                <p className='pt-4 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>Hereby, we are pleased to annouce our showrooms that located in Pakuwon Trade Center (Surabaya), Mega Glodok Kemayoran and Plaza Kenari Mas (Jakarta).</p>
            </div>
        </>
    );
}

export default Profile;
