import React from 'react';
import Image from 'next/image';

const ProjectHome = ({img, name}) => {
    return (
        <div className="cursor-pointer">
        <div className="relative h-full w-56">
            <a href="/product">
                <Image
                    className="rounded-xl h-60 bg-cover p-5"
                    src={img}
                    alt={name}
                    width={300}
                    height={300}
                />
                <h2 className='p-2 uppercase text-center'>{name}</h2>
             </a>
        </div>
    </div>
    );
}

export default ProjectHome;
