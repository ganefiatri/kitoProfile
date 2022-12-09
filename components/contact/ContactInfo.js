import React from 'react';

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
                <form className='pt-4'>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="First name" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" id="exampleInput124"
                                aria-describedby="emailHelp124" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" id="exampleInput125" placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                            className="form-control block w-full px-3 py-1.5text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3"placeholder="Message"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                </form>
            </div>
        </>
    );
}

export default ContactInfo;
