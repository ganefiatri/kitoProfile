import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
            <Image
                src='/assets/home.jpg'
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}

export default Banner;
