import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer () {
    const { prodId } = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {
        setProduct(prodId);
    },[]);
  
    return ( 
    <>
        <h1>Vista de Detalle del Producto</h1>
        <img style={{ width: 250 }} src={product.image} alt={product.title}/>
        <h4>Nombre: {product.name}</h4>
        <h4>Descripción: {product.description}</h4>
        <h4>Stock: {product.stock}</h4>
        <h4>Precio: ${product.price}</h4>
        <ItemDetail key={product.id}/>
    </>
    )
}