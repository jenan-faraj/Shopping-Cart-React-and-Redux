import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import ProductList from "./components/ProductList";
import Cart from "../src/components/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Shopping Cart</h1>
          <ProductList />
          <Cart />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
