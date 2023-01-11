import React from 'react';

const Profile = () => {
    return (
        <>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest'>Company Profile</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Hosana Kito Group</h2>
                <h3 className='pt-3 font-medium text-md leading-6 xl:pr-16 lg:pr-16'>
                    Initially opened in 1997 only 1 (one) small shop and far from the city of Medan, namely the city of Tanjung Morawa.
                </h3>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>
                    A simple shop started with small capital with a very traditional concept. Run directly by the sole owner of a married couple Mr. Wali and Mrs. Mei Sien.
                </p>
                <p className='pt-4 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>
                    For more than 21 years the company has been running with a traditional system that only relies on the experience, skills, commitment, consistency and hard work of the founders of the company.
                </p>

            </div>
            <div className='flex relative h-[350px]'>
                <img src="https://images.unsplash.com/photo-1635247049694-0269c357ab69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' />
            </div>
            <div className='flex relative h-[350px]'>
                <img src="https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' />
            </div>
            <div className='relative'>
                <p className='pt-5 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>With the development of the Building Materials and Home Furnishing Retail Business in Medan, the idea of the founder of the company to develop a more modern and systemized business and expand the business was formed Hosana Home Gallery First Branch in Tanjung Morawa City and followed by Hosana Ceramics Siantar Second Branch, Hosana Gallery in Medan Third Branch, Kito Home Gallery Fourth Branch which is now the most complete Granite Import Sales Center, Home Decoration in Medan City. Then followed by the fifth branch of Hosana Keramik Krakatau and now the sixth branch of Hosana Home Gallery Sunggal will open soon.</p>
            </div>
        </>
    );
}

export default Profile;
