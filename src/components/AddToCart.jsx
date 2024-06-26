import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContextProvider';

function AddToCart({ singleProduct }) {
    const { cart, addToCart} = useCartContext();
    const { id } = singleProduct;

    const currentProduct = cart.find(item => item.id === id);
    const count = currentProduct?currentProduct.count:1;

    return (
        <>
            <NavLink to="/cart" onClick={() => addToCart(id, count, singleProduct)} className="font-bold text-xl bg-indigo-500 text-white px-3 py-1 rounded-md w-1/2 sm:w-1/3 text-center">
                Add To Cart
            </NavLink>
        </> 
    );
}

export default AddToCart;
