import { useContext } from "react";
import { AddToCartIcon, CartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "./CartContext";


export default function  ItemDetail({product}) {
    const [, , addItem] = useContext(CartContext);

    const [cart, setCart] = useContext(CartContext);


    const handleClick = () => {
        addItem(product);
      };
  
      const handleClickInc = () => {
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.quanty !== 1 &&
        setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1} : item)))
    
        };
  
      const handleClickDec = () => {
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.quanty !== 1 &&
        setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1} : item)))
        
    };
  

    return (<>
        <button onClick={handleClickDec (product)}> <RemoveFromCartIcon /> - </button>
        <p>{product.quanty}</p>
        <button onClick={handleClickInc (product)}> <AddToCartIcon /> + </button>
        <button onClick={handleClick (product)}> <CartIcon /> Añadir al carrito </button> 
    </>)
}