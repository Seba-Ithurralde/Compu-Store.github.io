import React from 'react';
import "./App.css";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './components/CartContext';
import Checkout from './components/Checkout';
import CartContent from './components/CartContent';


export default function App() {

  return (
    <>
       <BrowserRouter>
        <NavBar />
        <CartProvider>
        <Routes>
          <Route exact path='/' element={<ItemListContainer title='Bienvenidos a Compu Store'/>}/>
          <Route exact path='/category/:catId' element={<ItemListContainer title='Productos de Computación'/>} />
          <Route exact path="/item/:prodId" element={<ItemDetailContainer />} />
          <Route exact path='/:catId' element={<CartContent/>} />
          <Route exact path='/:catId' element={<ItemListContainer title='Carrito de compras'/>} />
          <Route exact path='/checkout' element={<Checkout title='Checkout'/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}


