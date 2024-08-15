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
      const {
        id,
        attributes: { sellingPrice },
      } = item;
      const existingItem = state.cartItems.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += sellingPrice;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          price: sellingPrice,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += sellingPrice;
      saveToLocalStorage("cartItems", state.cartItems);
      saveToLocalStorage("totalQuantity", state.totalQuantity);
      saveToLocalStorage("totalPrice", state.totalPrice);
    },
    //remove cart
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price;
        state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("totalQuantity", state.totalQuantity);
        saveToLocalStorage("totalPrice", state.totalPrice);
      }
    },
    //increase quantity
    increaseQuantity(state, action) {
      const item = action.payload;
      const {
        id,
        attributes: { sellingPrice },
      } = item;
      const existingItem = state.cartItems.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += sellingPrice;
        state.totalQuantity += 1;
        state.totalPrice += sellingPrice;
        saveToLocalStorage("cartItems", state.cartItems);
        saveToLocalStorage("totalQuantity", state.totalQuantity);
        saveToLocalStorage("totalPrice", state.totalPrice);
      }
    },
    //decrease quantity
    decreaseQuantity(state, action) {
      const item = action.payload;
      const {
        id,
        attributes: { sellingPrice },
      } = item;
      const existingItem = state.cartItems.find((i) => i.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.price -= sellingPrice;
        state.totalQuantity -= 1;
        state.totalPrice -= sellingPrice;
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
