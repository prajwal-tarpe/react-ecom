import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import Star from './Star';

function Product(curElem) {
    const {id,price,image, category,rating} = curElem;
  return (
    <NavLink to={`/singleProduct/${id}`}>
    <div className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg relative xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={image}
            alt={category}
            className="aspect-square object-contain object-center group-hover:opacity-75 p-3"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
        </div>
        <div className='p-2 m-1'>
        <h3 className="mt-4 text-sm text-gray-700">{category}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Mrp: <FormatPrice price={price}/></p>
        <Star stars={rating.rate} reviews={rating.count}/>
        </div>
      </div>
    </NavLink>
  )
}

export default Product