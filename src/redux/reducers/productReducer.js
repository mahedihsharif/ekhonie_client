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
        state.loader = false;
        state.items = action.payload;
      })
      .addCase(get_products.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default productReducer.reducer;
