import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import blogReducer from "./reducers/blogReducer";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    blogs: blogReducer,
    auth: authReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});

export default store;
