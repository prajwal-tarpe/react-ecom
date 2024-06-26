import React from 'react';
import { useCartContext } from '../context/CartContextProvider';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

function Cart() {
  const { cart, clearCart, total_price } = useCartContext();
  console.log("from CART: ", cart);

  if (cart.length === 0) {
    return (
      <div className="font-bold text-xl p-20 m-20">
        <div className='text-2xl font-bold text-center'>NO ITEMS IN CART</div>
        <NavLink to="/products">
          <button className='p-2 rounded-md m-2 bg-purple-500 text-white text-xl font-semibold'>Continue Shopping</button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center px-4">
        <div className='font-bold text-xl bg-white border border-purple-200 rounded-2xl w-full md:w-2/3 mx-4 mt-20 mb-10 p-6'>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="w-full md:w-2/3 text-center">
          <div className='m-2 text-2xl font-semibold'>Total Price: <FormatPrice price={total_price} /></div>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <NavLink to="/products">
              <button className='px-2 py-1 rounded-md m-2 bg-indigo-600 text-white text-xl font-semibold'>Continue Shopping</button>
            </NavLink>
            <button onClick={clearCart} className='text-xl font-semibold px-2 py-1 bg-gray-800 rounded-md text-white m-2'>Clear Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
