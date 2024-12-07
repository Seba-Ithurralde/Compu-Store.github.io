import React, { useContext, useState } from "react";
import { AddToCartIcon, CartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "./CartContext";


export default function  ItemDetail() {
    const [, , addItem] = useContext(CartContext);

    const handleClick = () => {
        addItem(product);
      };

      const [product, setProduct] = useState([])
  
      const [counter, setCounter] = useState(0);
  
      const handleClickInc = () => {
          if (counter < product.stock) {
      setCounter(counter + 1);
          }
    };
  
      const handleClickDec = () => {
          if (counter > 0) {
      setCounter(counter - 1);
          }
    };
  
      const [cart, setCart] = useContext(CartContext);

    return (<>
        <button onClick={handleClickDec}> <RemoveFromCartIcon /> - </button>
        <p>{cart.length}</p>
        <button onClick={handleClickInc}> <AddToCartIcon /> + </button>
        <button onClick={handleClick}> <CartIcon /> Añadir al carrito </button> 
    </>)
}