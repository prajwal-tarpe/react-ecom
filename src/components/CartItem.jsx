import React from 'react';
import { useCartContext } from '../context/CartContextProvider';
import CartAmountToggle from './CartAmountToggle';
import FormatPrice from '../Helpers/FormatPrice';
import { MdDelete } from "react-icons/md";

function CartItem({ id, title, price, image }) {
  const { removeItem, setIncrease, setDecrease, cart } = useCartContext();
  const currentProduct = cart.find(item => item.id === id);
  let totalPrice = currentProduct.count * price;

  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-3 p-4 border-b'>
      <img
        src={image}
        alt={title}
        className="w-full md:w-32 h-32 object-contain p-2"
      />
      <div className="text-lg w-full md:w-2/5 text-center md:text-left">{title}</div>
      <CartAmountToggle
        count={currentProduct.count}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
      <div className='text-lg font-semibold text-center md:text-left'>
        <FormatPrice price={totalPrice} />
        <br />
        <div className="text-gray-500">
          <FormatPrice price={price} /> (each)
        </div>
      </div>
      <div
        className="font-semibold text-lg cursor-pointer border-2 border-black-800 p-1 rounded-md text-center md:text-left"
        onClick={() => removeItem(id)}
      >
        <MdDelete size={24} />
      </div>
    </div>
  );
}

export default CartItem;
