import React, { useContext } from 'react';
import { CartIcon } from './Icons';
import { CartContext } from './CartContext';


export default function CartWidget() {
    const { cart, setCart } = useContext(CartContext);

    return (
    <>
    <button>
        <CartIcon />
    </button>
    <p>{cart}</p>
    </>
    )
}

