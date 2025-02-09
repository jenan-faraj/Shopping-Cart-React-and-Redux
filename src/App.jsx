// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const ShoppingCartApp = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart Demo</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default ShoppingCartApp;
