import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import ReactLoading from './ReactLoading';
import './ItemDetailContainer.css';
import { getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

    const { prodId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getFirestore(prodId));
      }, []);
  

    return loading ? ( 
        <div className='loading'>
        <ReactLoading text='Cargando...'/>
        </div>
        ) : (
            <div>
            <h1>Vista de Detalle del Producto</h1>
            <img style={{ width: 250 }} src={product.image} alt={product.title}/>
            <h4>Nombre: {product.name}</h4>
            <h4>Descripción: {product.description}</h4>
            <h4>Stock: {product.stock}</h4>
            <h4>Precio: ${product.price}</h4>
            <ItemDetail product={product}/> <br /> <br />
            <button>
            <Link to='/'> Volver al Inicio </Link>
            </button>
            </div>
        );
    };