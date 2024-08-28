// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

const initialState = {
  cartItems: loadFromLocalStorage("cartItems") || [],
  totalQuantity: loadFromLocalStorage("totalQuantity") || 0,
  totalPrice: loadFromLocalStorage("totalPrice") || 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const { _id, price } = item;
      const existingItem = state.cartItems.find((i) => i._id === _id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
        existingItem.cartPrice += price;
      } else {
        state.cartItems.push({
          ...item,
          cartQuantity: 1,
          cartPrice: price,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += price;
      saveToLocalStorage("cartItems", state.cartItems);
      saveToLocalStorage("totalQuantity", state.totalQuantity);
      saveToLocalStorage("totalPrice", state.totalPrice);
    },
    //remove cart
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);
      if (existingItem) {
        state.totalQuantity -= existingItem.cartQuantity;
        state.totalPrice -= existingItem.cartPrice;
        state.cartItems = state.cartItems.filter((i) => i._id !== item._id);
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("totalQuantity", state.totalQuantity);
        saveToLocalStorage("totalPrice", state.totalPrice);
      }
    },
    //increase quantity
    increaseQuantity(state, action) {
      const item = action.payload;
      const { _id, price } = item;
      const existingItem = state.cartItems.find((i) => i._id === _id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
        existingItem.cartPrice += price;
        state.totalQuantity += 1;
        state.totalPrice += price;
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("totalQuantity", state.totalQuantity);
        saveToLocalStorage("totalPrice", state.totalPrice);
      }
    },
    //decrease quantity
    decreaseQuantity(state, action) {
      const item = action.payload;
      const { _id, price } = item;
      const existingItem = state.cartItems.find((i) => i._id === _id);
      if (existingItem && existingItem.cartQuantity > 1) {
        existingItem.cartQuantity -= 1;
        existingItem.cartPrice -= price;
        state.totalQuantity -= 1;
        state.totalPrice -= price;
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("totalQuantity", state.totalQuantity);
        saveToLocalStorage("totalPrice", state.totalPrice);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveToLocalStorage("cartItems", state.cartItems);
      saveToLocalStorage("totalQuantity", state.totalQuantity);
      saveToLocalStorage("totalPrice", state.totalPrice);
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
