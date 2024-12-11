import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function CartTotal () {

    const [cart] = useContext(CartContext)

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0 )
  return (
    <div>
        <h3>Total: {total}</h3>
    </div>
  )
}