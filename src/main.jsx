import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'; // استيراد الـ store
import ShoppingCartApp from './App'; // استيراد الـ App الرئيسي
import './index.css'; // استيراد الـ CSS

// ربط التطبيق مع الـ Redux store
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ShoppingCartApp />
  </Provider>
);
