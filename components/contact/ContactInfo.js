import React, { useState } from 'react';
import {FaWhatsapp} from "react-icons/fa";

const ContactInfo = () => {
    return (
        <>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest uppercase text-gray-400'>Representative</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Medan</h2>
                <p className='pt-5 text-justify text-sm pr-9 xl:pr-16 lg:pr-16 leading-7'>Jl. Gatot Subroto No.162, Sei Putih Bar., Kec. Medan Petisah</p>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>0813-9746-0294.</p>

            </div>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest uppercase text-gray-400'>HeadQuarter</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Medan</h2>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>JL Jenderal Gatot Subroto No.162, Petisah Tengah, Kec. Medan Petisah</p>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'> (061) 4522845</p>
            </div>
            <div className='relative'>
                <h5 className='font-medium text-lg tracking-widest uppercase text-gray-400'>Get In Touch</h5>
                <h2 className='font-semibold text-3xl pt-2 tracking-wide'>Start Conversation</h2>
                <p className='pt-5 text-justify text-sm pr-2 xl:pr-16 lg:pr-16 leading-7'>Tell us more about how we can help you. Tell us your business goals and we’ll see how we can create something amazing together.</p>
                {/* form */}
                <div className='pt-4'>
                    <a href="https://api.whatsapp.com/send?phone=6281260038883" className="w-full flex px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out justify-center justify-items-center items-center" target="_blank"><FaWhatsapp className='h-6 w-6 mr-2'/> Whatsapp us</a>
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
