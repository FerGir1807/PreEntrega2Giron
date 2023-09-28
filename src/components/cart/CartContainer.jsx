import Cart from "./Cart"
import { useState } from "react";

const CartContainer = () => {

    const [count, setCount] = useState(0)

    return (
        <Cart numeroArticulos={count}></Cart>
    )
}
export default CartContainer