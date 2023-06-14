import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import SingleProduct from '../pages/SingleProduct';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/products/:id' element={<SingleProduct/>}></Route>
    </Routes>
  )
}
