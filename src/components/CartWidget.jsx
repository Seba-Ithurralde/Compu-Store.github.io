import { useContext } from 'react';
import { CartContext } from './CartContext';
import ItemDetail from './ItemDetail';


export default function CartWidget () {
    const [cart, setCart] = useContext(CartContext);

    const deleteProducts = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => { 
           return element !== foundId;
        })

        setCart(newCart);
      };


    return cart.map((product) => {
        return (
            <div key={product.id}>
             <img style={{width: 250}} src={product.image} alt={product.name} />
                <h4>Nombre: {product.name}</h4>
                <p>Precio: ${product.price * product.quanty}</p>
                <p>Stock: {product.stock} </p>
                <ItemDetail />
                <button onClick={() => deleteProducts(product.id)}>❌</button>

                <button>
                <Link to='/checkout'> Proceder al Checkout </Link>
                </button>
            </div>
        )
    })
}
