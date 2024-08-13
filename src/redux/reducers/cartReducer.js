// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

// Helper functions to handle local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = loadFromLocalStorage("cart");
    return serializedCart ? serializedCart : [];
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    saveToLocalStorage("cart", cart);
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

const initialState = {
  items: loadCartFromLocalStorage() || [],
  status: "idle",
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartReducer.actions;

export default cartReducer.reducer;
