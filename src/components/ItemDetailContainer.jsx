import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import ReactLoading from './ReactLoading';
import { CartContext } from './CartContext';


export default function ItemDetailContainer () {

    const {cart, setCart} = useContext(CartContext);

    const { prodId } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(prodId);
    },[]);
  

    return ( 
    <>
        <ReactLoading />
        <h1>Vista de Detalle del Producto</h1>
        <img style={{ width: 250 }} src={product.image} alt={product.title}/>
        <h4>Nombre: {product.name}</h4>
        <h4>Descripción: {product.description}</h4>
        <h4>Stock: {product.stock}</h4>
        <h4>Precio: ${product.price}</h4>
        <ItemDetail product={product}/>
        <Link to='/'> Volver </Link>
    </>
    )
    };