import React from 'react'

function CartAmountToggle({count,setDecrease,setIncrease}) {
  return (
    <>
        <div className='flex justify-between items-center h-1/2 p-1'>
        <div className='w-6 px-1 text-xl font-bold cursor-pointer border text-center border-black rounded-sm' onClick={() => setIncrease()}>+</div>
        <button className='px-3 text-xl font-bold border border-black mx-1 rounded-sm'>{count>=0 && <h1>{count}</h1>}</button>
        <div className='w-6 px-1 text-xl font-bold cursor-pointer border border-black text-center rounded-sm' onClick={() => setDecrease()}>-</div>
        </div>
    </>
  )
}

export default CartAmountToggle
