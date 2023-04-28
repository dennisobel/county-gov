// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     mode: "dark",
//     userId: "63701cc1f03239b7f700000e"
// }

// export const globalSlice = createSlice({
//     name: "global",
//     initialState,
//     reducers: {
//         setMode: (state) => {
//             state.mode = state.mode === "light" ? "dark" : "light";
//         }
//     }
// })

// export const { setMode } = globalSlice.actions;

// export default globalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signup: {
    loading: false,
    error: null,
    success: false,
  },
  login: {
    loading: false,
    error: null,
    success: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Signup reducers
    signupRequest: (state) => {
      state.signup.loading = true;
      state.signup.error = null;
      state.signup.success = false;
    },
    signupSuccess: (state) => {
      state.signup.loading = false;
      state.signup.error = null;
      state.signup.success = true;
    },
    signupFailure: (state, action) => {
      state.signup.loading = false;
      state.signup.error = action.payload;
      state.signup.success = false;
    },
    // Login reducers
    loginRequest: (state) => {
      state.login.loading = true;
      state.login.error = null;
      state.login.success = false;
    },
    loginSuccess: (state) => {
      state.login.loading = false;
      state.login.error = null;
      state.login.success = true;
    },
    loginFailure: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
      state.login.success = false;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = authSlice.actions;
export default authSlice.reducer;
