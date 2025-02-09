import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="border rounded-lg shadow-md p-4 mt-8">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <ShoppingCart /> Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 border rounded-md" onClick={() => dispatch(updateQuantity({ id: item.id, delta: -1 }))}><Minus /></button>
                <span>{item.quantity}</span>
                <button className="p-2 border rounded-md" onClick={() => dispatch(updateQuantity({ id: item.id, delta: 1 }))}><Plus /></button>
                <button className="p-2 bg-red-500 text-white rounded-md" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 /></button>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;