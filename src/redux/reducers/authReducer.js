import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

export const login_user = createAsyncThunk(
  "auth/login_user",
  async (userData) => {
    const users = await loginUser(userData);
    saveToLocalStorage("user", users.user);
    saveToLocalStorage("token", users.jwt);
    return users;
  }
);

//initial state
const initialState = {
  jwt: loadFromLocalStorage("token") || null,
  user: loadFromLocalStorage("user") || {},
  loader: false,
  errorMessage: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.jwt = null;
      state.loader = false;
      state.errorMessage = null;
      saveToLocalStorage("user", state.user);
      saveToLocalStorage("token", state.jwt);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login_user.pending, (state, _) => {
        state.loader = true;
        state.errorMessage = "";
      })
      .addCase(login_user.fulfilled, (state, action) => {
        state.loader = false;
        state.jwt = action.payload.jwt;
        state.user = action.payload.user;
      })
      .addCase(login_user.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { logout } = authReducer.actions;
export default authReducer.reducer;
