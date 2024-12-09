import { createContext, useState } from 'react';

export const CartContext = createContext(false);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addItem = (item) => {
    const productRepeat = cart.find((product) => product.id === item.id);

    if(productRepeat) {
      setCart(cart.map ((item) => item.id === product.id ? {...item, quanty: productRepeat.quanty + 1} : item));
    } 
    else {
      setCart([...cart, item]);
    }
  }

  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {children}
    </CartContext.Provider>
  );
}