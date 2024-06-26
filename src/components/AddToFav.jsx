import React from 'react';
import { useFavContext } from '../context/FavContextProvider';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function AddToFav({ singleProduct }) {
    const { addToFav, data, removeItem } = useFavContext();
    const { id } = singleProduct;

    const like = data.find(item => item.id === id);

    const handleClick = () => {
        if (like) {
            removeItem(id);
        } else {
            addToFav(singleProduct, id);
        }
    };

    return (
        <div className='flex items-center justify-center text-red-600 text-xl mt-3 font-bold cursor-pointer w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out' onClick={handleClick}>
            {like ? <FaHeart className='text-red-600' /> : <FaRegHeart className='text-black' />}
        </div>
    );
}

export default AddToFav;

