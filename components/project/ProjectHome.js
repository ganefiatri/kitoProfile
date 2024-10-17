import React from 'react';
import Image from 'next/image';

const ProjectHome = ({img, name}) => {
    return (
        <div className="cursor-pointer">
        <div className="relative h-full w-56">
            <a href="/product">
                <Image
                    className="rounded-xl h-60 object-contain p-5"
                    src={img}
                    alt={name}
                    width={300}
                    height={300}
                />
                <h2 className='p-2 uppercase text-center text-sm md:text-sm lg:text-base lg:font-medium'>{name}</h2>
             </a>
        </div>
    </div>
    );
}

export default ProjectHome;
