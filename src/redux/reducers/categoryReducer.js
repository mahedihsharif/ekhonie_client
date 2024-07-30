import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../api/index";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

export const get_category = createAsyncThunk(
  "categories/get_category",
  async () => {
    const data = await getCategories();
    saveToLocalStorage("categories", data);
    return data;
  }
);

//initial state
const initialState = {
  items: loadFromLocalStorage("categories") || [],
  loader: false,
  errorMessage: "",
};

export const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_category.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(get_category.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loader = false;
      })
      .addCase(get_category.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loader = false;
      });
  },
});

export default categoryReducer.reducer;
