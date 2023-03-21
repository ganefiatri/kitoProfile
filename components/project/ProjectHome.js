import React from 'react';
import Image from 'next/image'

const ProjectHome = ({img, name}) => {
    return (
        <div className="cursor-pointer">
        <div className="relative h-full w-56">
            <a href="/product">
                <Image
                    className="rounded-xl h-60 bg-contain"
                    src={img}
                    alt={name}
                    width={500}
                    height={500}
                />
                <h2 className='p-2 uppercase text-center'>{name}</h2>
             </a>
        </div>
    </div>
    );
}

export default ProjectHome;
