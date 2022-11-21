import { FaShower } from 'react-icons/fa'
import React from 'react'


function Category() {
    return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="p-2 h-16 w-16 relative justify-center items-center">
           <FaShower className='w-10 h-10'/>
        </div>
        <div>
            <h2>Bathroom</h2>
            <h3 className="text-gray-500">Hosana Group</h3>
        </div>
    </div>
    )
}

export default Category