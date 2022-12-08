import Image from 'next/image';
import React from 'react';

const LargeCardSecond = ({ img, company ,title, description,seconddesc, buttonText }) => {
    return (
        <div className="relative py-2 cursor-pointer">
          <div className="relative h-[500px] min-w-[600px]">
              <Image
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  className="p-2 bg-contain"
              />
          </div>
          <div className="absolute top-60 right-12 text-right text-white">
              <h5 className="text-xl mb-3  font-thin">{company}</h5>
              <h3 className="text-4xl mb-3  font-bold">{title}</h3>
              <p className=''>{description}</p>
              <p className=''>{seconddesc}</p>
  
              <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transform transition duration-300 ease-out">{buttonText}</button>
          </div>
      </div>
    );
}

export default LargeCardSecond;
