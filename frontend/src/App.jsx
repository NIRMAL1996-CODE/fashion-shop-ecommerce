import React from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/cart';
import LoginSignup from './pages/LoginSignup';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/men' element={<ShopCategory category="men"/>}/>
       <Route path='/women' element={<ShopCategory category="women"/>}/>
       <Route path='/kids' element={<ShopCategory category="kids"/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path=':productId' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
     </Routes>

     </BrowserRouter>
      
    </div>
  )
}
export default App;