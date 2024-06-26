import React from 'react'
import { useFilterContext } from '../context/FilterContextProvider';

function Filters() {
    const {sortData,updateFilterValue,allProducts} = useFilterContext();
    const getUniqueData = (data,property) => {
        let newVal = data.map((curElem) => {
          return curElem[property];
        })
        return (newVal = ["all",... new Set(newVal)]); 
      }
      const categoryOnlyData = getUniqueData(allProducts,"category");
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center mt-20 mx-10 lg:mx-40 space-y-5 lg:space-y-0 lg:space-x-10">
      <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto lg:flex-grow">
        <input
          type="text"
          name="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={updateFilterValue}
        />
      </form>

      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-5">
        <div>
          <h1 className="text-lg font-semibold mb-2">Category</h1>
          <div className="flex flex-wrap">
            {categoryOnlyData.map((curElem, index) => (
              <button
                key={index}
                type="button"
                name="category"
                onClick={updateFilterValue}
                value={curElem}
                className="mx-2 my-1 px-2 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition-colors duration-200"
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>

        <form action="#" className="w-full lg:w-auto">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={sortData}
          >
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
            <option value="A-Z">Name (A-Z)</option>
            <option value="Z-A">Name (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Filters