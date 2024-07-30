import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../../api/index";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

export const get_blogs = createAsyncThunk("blogs/get_blogs", async () => {
  const data = await getBlogs();
  saveToLocalStorage("blogs", data);
  return data;
});

//initial state
const initialState = {
  items: loadFromLocalStorage("blogs") || [],
  loader: false,
  errorMessage: "",
};

export const blogReducer = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_blogs.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(get_blogs.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loader = false;
      })
      .addCase(get_blogs.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loader = false;
      });
  },
});

export default blogReducer.reducer;
