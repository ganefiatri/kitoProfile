import React from 'react';

const CardAbout = () => {
    return (
        <>
            {/* About */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ24lMjB0b2lsZXQlMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className="p-10 mt-14 absolute ">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">01</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Main Building Material</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Floor, Wall, Door & Windows, Roofing & Building Material</p>
                </div>
            </div >

            {/* Browse */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1588095803059-6e4bbbe24dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">02</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Secondary Building Material</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Bath & Kitchen, Paint & Coating</p>
                    
                </div>
            </div >

            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">03</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Supplementary Building Material</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Plumbing & Water Heater, Electrical & Lamps</p>
                    
                </div>
            </div >
            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
                <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">04</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">Complementary Building Material</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">Hardware & Tools, House Ware, Living Room & Furniture, Home Textile, Home Decoration</p>
                    
                </div>
            </div >
        </>
    );
}

export default CardAbout;
