import React from 'react'
import Product from './Product';
import { useProdContext } from '../context/ProductContextProvider';
import { useFilterContext } from '../context/FilterContextProvider';
import Pagination from './Pagination';
import Filters from './Filters';

function Products() {
  const {filters:{category},filterProducts,sortData,updateFilterValue,allProducts} = useFilterContext();
  const {isLoading} = useProdContext();
  const getUniqueData = (data,property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    })
    return (newVal = ["all",... new Set(newVal)]); 
  }
  const categoryOnlyData = getUniqueData(allProducts,"category");
  if(isLoading) return <div className='text-2xl font-bold text-center mt-40'>...Loading</div>
  return (
    <>
      <Filters/>
      <div className="bg-white">  
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            filterProducts.map((curElem) => {
                    return <Product key={curElem.id}{...curElem}/>
            })
        }
        </div>
      </div>
    </div>
    <Pagination/>
    </>
  )
}

export default Products