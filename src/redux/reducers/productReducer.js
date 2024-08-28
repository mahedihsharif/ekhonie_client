import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/index";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./../../utils/helpers/localStorage";

export const get_products = createAsyncThunk(
  "products/get_products",
  async () => {
    const data = await getProducts();
    saveToLocalStorage("products", data);
    return data;
  }
);

//initial state
const initialState = {
  items: loadFromLocalStorage("products") || [],
  loader: false,
  errorMessage: "",
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_products.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(get_products.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loader = false;
      })
      .addCase(get_products.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loader = false;
      });
  },
});

export default productReducer.reducer;
