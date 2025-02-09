import React, { useEffect, useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "/api/placeholder/200/150" },
  { id: 2, name: "Smartphone", price: 599.99, image: "/api/placeholder/200/150" },
  { id: 3, name: "Headphones", price: 99.99, image: "/api/placeholder/200/150" },
  { id: 4, name: "Tablet", price: 399.99, image: "/api/placeholder/200/150" },
];

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem
        ? prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return { cart, addToCart, removeFromCart, updateQuantity, cartTotal };
};

const ProductList = ({ addToCart }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {products.map(product => (
      <div key={product.id} className="border rounded-lg shadow-md p-4">
        <img src={product.image} alt={product.name} className="rounded-lg w-full" />
        <h3 className="mt-2 font-bold">{product.name}</h3>
        <p className="text-xl font-semibold">${product.price}</p>
        <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <div className="flex justify-between items-center p-4 border-b">
    <div className="flex items-center gap-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-2 border rounded-md" onClick={() => updateQuantity(item.id, -1)}><Minus /></button>
      <span>{item.quantity}</span>
      <button className="p-2 border rounded-md" onClick={() => updateQuantity(item.id, 1)}><Plus /></button>
      <button className="p-2 bg-red-500 text-white rounded-md" onClick={() => removeFromCart(item.id)}><Trash2 /></button>
    </div>
  </div>
);

const Cart = ({ cart, updateQuantity, removeFromCart, cartTotal }) => (
  <div className="border rounded-lg shadow-md p-4 mt-8">
    <h2 className="flex items-center gap-2 text-lg font-bold">
      <ShoppingCart /> Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
    </h2>
    {cart.length === 0 ? (
      <p className="text-center text-gray-500">Your cart is empty</p>
    ) : (
      <>
        {cart.map(item => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
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

const ShoppingCartApp = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart Demo</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} cartTotal={cartTotal} />
    </div>
  );
};

export default ShoppingCartApp;