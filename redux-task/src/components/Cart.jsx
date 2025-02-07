
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../actions/cartActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price} x {item.quantity}
          </span>
          <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>+</button>
          <button onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))} disabled={item.quantity === 1}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
