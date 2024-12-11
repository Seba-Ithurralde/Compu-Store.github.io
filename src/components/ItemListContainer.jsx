import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';


export default function ItemListContainer ({title}) {

  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    if (catId == 'Notebooks') {
      setProductos(["/public/notebook1.jpg", "/public/notebook2.jpg", "/public/notebook3.jpg", "/public/notebook4.jpg", "/public/notebook5.jpg", "/public/notebook6.jpg"]);
    } 
    else if (catId == 'Perifericos') {
      setProductos(["/public/periferico1.jpg", "/public/periferico2.jpg", "/public/periferico3.jpg", "/public/periferico4.jpg", "/public/periferico5.jpg", "/public/periferico6.jpg"]);
    } 
    else if (catId == 'Kits') {
      setProductos(["/public/kits1.jpg", "/public/kits2.jpg", "/public/kits3.jpg", "/public/kits4.jpg", "/public/kits5.jpg", "/public/kits6.jpg"]);
    } 
    else {
      setProductos(["/public/notebook1.jpg", "/public/notebook2.jpg", "/public/notebook3.jpg", "/public/notebook4.jpg", "/public/notebook5.jpg", "/public/notebook6.jpg", "/public/periferico1.jpg", "/public/periferico2.jpg", "/public/periferico3.jpg", "/public/periferico4.jpg", "/public/periferico5.jpg", "/public/periferico6.jpg", "/public/kits1.jpg", "/public/kits2.jpg", "/public/kits3.jpg", "/public/kits4.jpg", "/public/kits5.jpg", "/public/kits6.jpg"]);
    }
  },[catId]);


  return (
    <>
      <h1>{title}</h1>
    <div className='productos'>
      {productos.map((prod) => (
        <article>
        <img src={prod} alt={prod}/>
        <h4>{prod.name}</h4>
        <p>Precio: ${prod.price}</p>
        <p>Stock: {prod.stock}</p>
        <button className='boton'>
        <Link to={`/item/${prod.id}`}> Ver detalles </Link>
        </button>
        </article>
      ))}
    </div>
    </>
  );
}