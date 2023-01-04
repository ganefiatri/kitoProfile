import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {useRouter} from 'next/router';

const Search = () => {
    const [input, setInput] = useState("");
    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/product/',
            query:{
                q: input
            }
        })
    }
    return (
        <form className='m-0' onSubmit={submitHandler}>
            <div className='relative w-full xl:px-72 sm:px-10'>
                <AiOutlineSearch className='absolute top-3 h-6 w-6 translate-x-1/2 text-gray-400'/>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border-none font-normal px-11 py-3 rounded-md outline-none w-full bg-slate-100'/>
            </div>
        </form>
    );
}

export default Search;
