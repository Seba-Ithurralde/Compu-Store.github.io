import React, { useState } from 'react';
import { sendOrder } from '../../../src/assets/firebase/firebase';

export default function Orders() {
  const [orderId, setOrderId] = useState(null);

  const handleClick = () => {
    const newOrder = {
      buyer: {
        email: 'anto@gmail.com',
        name: 'Anto',
      },
      date: new Date(),
      items: [
        {
          id: 4,
          title: 'Notebook Acer',
          price: 754063,
        },
        {
          id: 7,
          title: 'Teclado y Mouse',
          price: 85990,
        },
      ],
      total: 840053,
    };

    sendOrder(newOrder).then((id) => setOrderId(id));
  };

  return (
    <>
      <button onClick={handleClick}>Enviar nueva orden de pedido</button>
      {orderId && <p>El id de su orden es: {orderId}</p>}
    </>
  );
}
