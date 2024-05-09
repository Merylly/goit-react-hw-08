import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, () => {
        return INITAL_STATE;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
