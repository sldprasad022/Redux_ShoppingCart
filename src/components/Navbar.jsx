import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg bg-stone-700 p-4 w-full flex items-center justify-between gap-40'>
      <h1 className='text-2xl text-white'>Shopping Cart</h1>
      <div className='flex gap-5'>
        <Link className='text-white' to='/'>Home</Link>
        <Link className='text-white' to='/cart'>Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar
