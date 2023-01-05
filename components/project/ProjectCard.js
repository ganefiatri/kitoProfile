import Image from 'next/image'
import React from 'react'

function ProjectCard({img, name,}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-60 w-60">
                <Image
                    className="rounded-xl"
                    src={img}
                    alt={name}
                    width={500}
                    height={500}
                />
                <h3 className="text-xl p-2 text-center uppercase">{name}</h3>
            </div>
        </div>
    )
}

export default ProjectCard