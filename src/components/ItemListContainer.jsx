import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ProductsList from './ProductsList';



const ItemListContainer = ({title}) => {

  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    if (catId == 'Notebooks') {
      setProductos([<ProductsList />]);
    } 
    else if (catId == 'Perifericos') {
      setProductos(["/public/periferico1.jpg", "/public/periferico2.jpg", "/public/periferico3.jpg", "/public/periferico4.jpg", "/public/periferico5.jpg", "/public/periferico6.jpg"]);
    } 
    else if (catId == 'Kits') {
      setProductos(["/public/kits1.jpg", "/public/kits2.jpg", "/public/kits3.jpg", "/public/kits4.jpg", "/public/kits5.jpg", "/public/kits6.jpg"]);
    }
    else if (catId == 'cart') {
      setProductos(["Carrito vacío"]);
    }
    else {
      setProductos(["/public/notebook1.jpg", "/public/notebook2.jpg", "/public/notebook3.jpg", "/public/notebook4.jpg", "/public/notebook5.jpg", "/public/notebook6.jpg", "/public/periferico1.jpg", "/public/periferico2.jpg", "/public/periferico3.jpg", "/public/periferico4.jpg", "/public/periferico5.jpg", "/public/periferico6.jpg", "/public/kits1.jpg", "/public/kits2.jpg", "/public/kits3.jpg", "/public/kits4.jpg", "/public/kits5.jpg", "/public/kits6.jpg"]);
    }
  },[catId]);


  return (
    <>
      <h1>{title}</h1>
      {productos.map((prod) => (
        <li key={prod}>{prod}</li>
      ))}
    </>
  );
}

export default ItemListContainer;