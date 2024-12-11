import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartTotal from "./CartTotal";
import CartWidget from "./CartWidget";
import { CartContext } from "./CartContext";
import './CartContent.css';
import { CartIcon } from "./Icons";

export default function CartContent () {
    const [cart] = useContext(CartContext);

    return (<>
        {cart.length > 0 
        ? (
            <>
        <CartWidget />
        <CartTotal />
        </>
      ) : (
          <h1>No hay productos en el carrito. <br /> <span>¡Agrega algunos para comprar!</span></h1>
        )}
        <button>
        <Link to='/'>Volver al Inicio</Link>
        </button>
    </>)
}