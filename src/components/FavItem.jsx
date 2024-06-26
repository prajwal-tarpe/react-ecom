import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavContext } from '../context/FavContextProvider';
import { FaHeart } from "react-icons/fa";
import FormatPrice from '../Helpers/FormatPrice';

function FavItem({ title, price, image, id }) {
    const { removeItem } = useFavContext();

    return (
        <div className="flex flex-col sm:flex-row justify-between bg-purple-50 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 w-full sm:w-auto">
            <NavLink to={`/singleProduct/${id}`} className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <img src={image} alt={title} className="w-full sm:w-32 h-32 object-contain p-2" />
                <div className="p-4 w-full sm:w-auto">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600">MRP: <FormatPrice price={price} /></p>
                </div>
            </NavLink>
            <button
                onClick={() => removeItem(id)}
                className="text-lg flex justify-end p-4 sm:p-2"
            >
                <FaHeart className='text-red-600 hover:text-red-500' />
            </button>
        </div>
    );
}

export default FavItem;
