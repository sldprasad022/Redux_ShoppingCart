import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../features/ShopCart/productSlice';
import { addToCart } from '../features/ShopCart/cartSlice';

const ProductList = () => {

  

  const {items : products,status }  = useSelector((state)=>state.products);
  const dispatch = useDispatch();



useEffect(()=>{
  if (status ==='idle') 
  {
    dispatch(fetchProducts())
  }
},[status])

if (status==='loading') return  <p>Loading Products.....</p>

if (status==='failed') return <p>Failed to Load Products . Please try again</p>





  return (
    <>
      <Navbar/>

      <div className='mt-10  grid grid-cols-4 gap-4'>
        {
          products.map((eachProduct)=>(
            <div className='flex flex-col shadow-xl rounded-lg w-56 p-4 gap-2 items-center justify-center' key={eachProduct.id}>
              <img src={eachProduct.image} alt='Image Title' className='h-20'/>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold'>{eachProduct.title.length > 20 ?`${eachProduct.title.slice(0,20)}...` : eachProduct.title}</h2>
                <p className='font-bold'>Price :${eachProduct.price}</p>
                <button className='p-2 bg bg-orange-600 rounded-lg text-white' onClick={()=>dispatch(addToCart(eachProduct))}>Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductList
