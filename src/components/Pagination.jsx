import React from 'react';
import { useProdContext } from '../context/ProductContextProvider';
import { GrPrevious, GrNext } from "react-icons/gr";

function Pagination() {
    const { nextPage, prevPage, pages } = useProdContext();
    return (
        <div className='w-full flex justify-center items-center my-10'>
            <button 
                className='font-bold text-xm m-2 py-2 px-4 rounded-full border border-black hover:bg-gray-200 transition-colors duration-200' 
                onClick={prevPage}
            >
                <GrPrevious size={20} />
            </button>
            <div className='text-lg font-semibold text-gray-600 mx-4'>
                Page {pages} of 50
            </div>
            <button 
                className='font-bold text-xm m-2 py-2 px-4 rounded-full border border-black hover:bg-gray-200 transition-colors duration-200' 
                onClick={nextPage}
            >
                <GrNext size={20} />
            </button>
        </div>
    );
}

export default Pagination;
