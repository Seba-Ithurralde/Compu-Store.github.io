import React, { useContext, useEffect, useState } from "react";
import { AddToCartIcon, CartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "./CartContext";


export default function  ItemDetail({ initial, min, max, setQuantity }) {
    const [, , addItem] = useContext(CartContext);

    const [cart, setCart] = useContext(CartContext);

    const [counter, setCounter] = useState(initial);

    const handleClick = () => {
        addItem(product);
      };
  
  
      const handleIncrement = () => {
        counter < max ? setCounter(counter + 1) : console.log("Máximo alcanzado");
      };
    
      const handleDecrement = () => {
        counter > min ? setCounter(counter - 1) : console.log("Mínimo alcanzado");
      };
    
      useEffect(() => {
        setQuantity(counter);
      }, [counter, setQuantity]);
  

    return (<>
        <button onClick={handleDecrement}> <RemoveFromCartIcon /> - </button>
        <p>{cart.length}</p>
        <button onClick={handleIncrement}> <AddToCartIcon /> + </button>
        <button onClick={handleClick}> <CartIcon /> Añadir al carrito {cart.length} </button> 
    </>)
}