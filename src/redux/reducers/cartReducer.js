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
  totalQuantity: 0,
  status: "idle",
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart
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
      state.totalQuantity++;
      saveCartToLocalStorage(state.items);
    },
    //remove cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }
      saveCartToLocalStorage(state.items);
    },
    //increase quantity
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
      saveCartToLocalStorage(state.items);
    },
    //decrease quantity
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartReducer.actions;

export default cartReducer.reducer;
