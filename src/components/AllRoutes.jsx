import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import SingleProduct from '../pages/SingleProduct';
import Payment from '../pages/Payment';

export default function AllRoutes({isOpen, onOpen, onClose,setCurrUser}) {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='/login' element={<Login  isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} setCurrUser={setCurrUser}/>}></Route>
      <Route path='/signup' element={<SignUp isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} setCurrUser={setCurrUser} />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Payment/>}></Route>
      <Route path='/products/:id' element={<SingleProduct/>}></Route>
    </Routes>
  )
}
