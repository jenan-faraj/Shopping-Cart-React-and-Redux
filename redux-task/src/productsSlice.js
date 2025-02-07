// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const firebaseURL =
//   "https://contactus-a9d19-default-rtdb.firebaseio.com/products.json";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(firebaseURL);
//       const tasks = response.data
//         ? Object.keys(response.data).map((key) => ({
//             id: key,
//             ...response.data[key],
//           }))
//         : [];
//       return tasks.filter((product) => product.name);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState: { items: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// // تصدير Reducer
// export default productsSlice.reducer;
