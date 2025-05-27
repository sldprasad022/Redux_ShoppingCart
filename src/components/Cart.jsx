import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

useSelector((state=>console.log(state.cart))




)

  return (
    <div className=''>
      <div className='px-24'>
        <h2 className='text-start text-2xl font-bold mb-4'>Your Cart</h2>
        <div className='flex gap-20'>
          <img src='image' alt='image' className='' />
          <div className='flex flex-col items-start gap-4'>
            <h3 className=''>Image Title</h3>
            <p className=''>Price : $200</p>
            <div className='flex gap-2'>
              <input type='number' min='1' className='w-[20%] border b-1'  />
              <button className='bg bg-orange-600 text-white rounded-lg p-2' >Update</button>
              <button className='bg bg-orange-600 text-white rounded-lg p-2'>Remove</button>
            </div>
          </div>
        </div>
        <div className='shadow-2xl rounded p-16 mt-10'>
          <p className='text-xl font-bold text-end mb-4'> Total : $200</p>
          <button className='bg bg-orange-600 text-white py-4 px-96'>Back to Shopping</button>
        </div> 
      </div>
    </div>
  )
}

export default Cart
