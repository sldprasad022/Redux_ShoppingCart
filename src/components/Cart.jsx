import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { removeFromCart } from '../features/ShopCart/cartSlice';

const Cart = () => {

const navigate = useNavigate();

const {items:cartItems, tempItems,totalPrice} = useSelector((state=>state.cart))

useSelector(state=>console.log(state));

const dispatch = useDispatch();

const handleRemove = (id)=>{
  dispatch(removeFromCart(id))
}

  return (
    <div className=''>
      <div className='px-24'>
        <h2 className='text-start text-2xl font-bold mb-4'>Your Cart</h2>

        { cartItems.map((item)=>(
          <div className='flex gap-20 mb-8' key={item.id}>
            <img src={item.image} alt={item.image} className='h-[100px] w-[100px]' />
            <div className='flex flex-col items-start gap-4'>
              <h3 className=''>{item.title}</h3>
              <p className=''>{item.price}</p>
              <div className='flex gap-2'>
                <input type='number' min='1' className='w-[20%] border b-1'  />
                <button className='bg bg-orange-600 text-white rounded-lg p-2' >Update</button>
                <button className='bg bg-orange-600 text-white rounded-lg p-2' onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
          ))
        }

        <div className='shadow-2xl rounded p-16 mt-10'>
          <p className='text-xl font-bold text-end mb-4'> Total :${totalPrice}</p>
          <button className='bg bg-orange-600 text-white py-4 px-96'onClick={()=>navigate('/')} >Back to Shopping</button>
        </div> 
      </div>
    </div>
  )
}

export default Cart
