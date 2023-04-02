import React from 'react';

const Profile = ({ img1, img2, title1, title2 }) => {
    return (
        <>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest'>Company Profile</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Hosana Kito Group</h2>
                {/* <h3 className='pt-3 font-medium text-md leading-6 xl:pr-16 lg:pr-16'>
                   {title1}
                </h3> */}
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>
                    {title1}
                </p>

            </div>
            <div className='flex relative h-[350px]'>
                {/* <img src="https://images.unsplash.com/photo-1635247049694-0269c357ab69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' /> */}
                <img src={img1} alt="" className='w-full bg-cover' />
            </div>
            <div className='flex relative h-[350px]'>
                {/* <img src="https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxzaG93ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full bg-cover' /> */}
                <img src={img2} alt="" className='w-full bg-cover' />
            </div>
            <div className='relative'>
                <p className='pt-5 text-justify pl-2 lg:pl-16 xl:pl-16 text-sm leading-7'>{title2}</p>
            </div>
        </>
    );
}

export default Profile;
