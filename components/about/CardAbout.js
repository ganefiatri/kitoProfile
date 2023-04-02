import React from 'react';

const CardAbout = ({img1, img2, img3, img4, title1, title2, title3, title4, detail1, detail2, detail3, detail4}) => {
    return (
        <>
            {/* About */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
            {/* <img src="https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ24lMjB0b2lsZXQlMjBibGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/> */}
                <img src={img1} alt=""/>
                <div className="p-10 mt-14 absolute ">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">01</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">{title1}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">{detail1}</p>
                </div>
            </div >

            {/* Browse */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
            {/* <img src="https://images.unsplash.com/photo-1588095803059-6e4bbbe24dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}
                <img src={img2} alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">02</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">{title2}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">{detail2}</p>
                    
                </div>
            </div >

            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
            {/* <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}
                <img src={img3} alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">03</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">{title3}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">{detail3}</p>
                    
                </div>
            </div >
            {/* Contact */}
            < div className="flex p-3 justify-center items-center relative max-w-sm" >
            {/* <img src="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}
                <img src={img4} alt="" />
                <div className="p-10 mt-14 absolute">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white uppercase">04</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white uppercase">{title4}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300">{detail4}</p>
                    
                </div>
            </div >
        </>
    );
}

export default CardAbout;
