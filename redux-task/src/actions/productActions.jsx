import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

  try {
    const response = await axios.get("https://contactus-a9d19-default-rtdb.firebaseio.com/products.json");
    const productArray = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));

    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: productArray });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
  }
};
