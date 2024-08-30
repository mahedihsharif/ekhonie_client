import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helpers/localStorage";

export const login_user = createAsyncThunk(
  "auth/login_user",
  async (userData, { rejectWithValue }) => {
    try {
      const users = await loginUser(userData);
      saveToLocalStorage("token", users.token);
      saveToLocalStorage("user", users.user);
      return users;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//initial state
const initialState = {
  token: loadFromLocalStorage("token") || null,
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
      saveToLocalStorage("token", state.token);
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
        state.token = action.payload.token;
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
