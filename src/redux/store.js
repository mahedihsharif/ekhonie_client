import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    blogs: blogReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});

export default store;
