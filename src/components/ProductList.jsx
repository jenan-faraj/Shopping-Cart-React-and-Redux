
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "https://i.pinimg.com/474x/29/f3/99/29f399aec2699d49113314f1e96d5063.jpg" },
  { id: 2, name: "Smartphone", price: 599.99, image: "https://i.pinimg.com/474x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg" },
  { id: 3, name: "Headphones", price: 99.99, image: "https://i.pinimg.com/474x/29/f1/55/29f15544e947042fdc4d72380061ded2.jpg" },
  { id: 4, name: "Tablet", price: 399.99, image: "https://i.pinimg.com/474x/6c/7f/b1/6c7fb15e15c1e2431c2ddf2c5a7e240b.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="rounded-lg w-full h-[200px]" />
          <h3 className="mt-2 font-bold">{product.name}</h3>
          <p className="text-xl font-semibold">${product.price}</p>
          <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;