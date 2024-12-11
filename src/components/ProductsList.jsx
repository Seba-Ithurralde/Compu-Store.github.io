import React, { useState, useEffect } from 'react';
import {
  getProducts,
  getSingleProduct,
} from '../firebase/firebase';
import ProductCard from './ProductCard';
import './ProductsList.css';

export default function ProductsList() {

  const [singleProd, setSingleProd] = useState(null);
  const [myProds, setMyProds] = useState([]);

  useEffect(() => {
    getSingleProduct("1").then((product) =>
      setSingleProd(product)
    ); 
    getProducts().then((products) => setMyProds(products)); 
  }, []);


  const updateProduct = (id, update) => {
    setMyProds(myProds.map((prod) => (prod.id === id ? {...prod,...update} : prod)));
  }

  return (
    <section>  
      {myProds &&
        myProds.map((prod) => <ProductCard key={prod.id} prod={prod} onUpdate={updateProduct} />)}
    </section>
  );
}
