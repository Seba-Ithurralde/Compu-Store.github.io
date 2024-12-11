import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ prod }) {

  return (
    <>
      <article>
        <img style={{ width: 150 }} src={prod.image} alt={prod.title}/>
        <h4>{prod.name}</h4>
        <p>Precio: ${prod.price}</p>
        <p>Stock: {prod.stock}</p>
        <button>
        <Link to={`/item/${prod.id}`}> Ver detalles </Link>
        </button>
      </article>
    </>
  );
}
