import React from 'react'
import { useProdContext } from '../context/ProductContextProvider'
import Product from './Product';

function FeaturedSection() {
  const {isLoading,featuredProducts} = useProdContext();

  if(isLoading) return <div className='text-5xl font-extrabold text-center'>...Loading</div>
  console.log(featuredProducts);
  return (
    <>
      <div className="bg-indigo-30 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold mb-20 underline decoration-solid underline-offset-8 ">Featured Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            featuredProducts.map((curElem) => {
                    return <Product key={curElem.id}{...curElem}/>
            })
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedSection