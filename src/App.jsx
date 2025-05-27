import React from 'react'

import ProductList from './components/ProductList'
import Cart from './components/Cart'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default App
