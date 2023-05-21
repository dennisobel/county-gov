import { createSlice, configureStore, combineReducers  } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const initialSignupState = {
  userData: {
    personalInformation: { name: '', msisdn: '', email: '' },
    identification: { id: '', kra: '' },
    accountInformation: { userType: '', password: '', confirmPassword: '' },
    locationRole: { countyId: '', roleId: '' },
    reviewAccept: { terms: '' }
  },
  loading: false,
  error: null,
  success: false,
  login:{}
};

const initialOTPState = {
  userData: {
    otp: {
      pin:''
    }
  },
  loading: false,
  error: null,
  success: false,
}

const multiStepSignupSlice = createSlice({
  name: "signup",
  initialState: initialSignupState,
  reducers: {
    updatePersonalInformation: (state, action) => {
      state.userData.personalInformation = {
        ...state.userData.personalInformation,
        ...action.payload,
      };
    },
    updateIdentification: (state, action) => {
      state.userData.identification = {
        ...state.userData.identification,
        ...action.payload,
      };
    },
    updateAccountInformation: (state, action) => {
      state.userData.accountInformation = {
        ...state.userData.accountInformation,
        ...action.payload,
      };
    },
    updateLocationRole: (state, action) => {
      state.userData.locationRole = {
        ...state.userData.locationRole,
        ...action.payload,
      };
    },
    updateReviewAccept: (state, action) => {
      state.userData.reviewAccept = {
        ...state.userData.reviewAccept,
        ...action.payload,
      };
    },
    setLogin: (state,action) => {
      state.login = {
        ...state.login, ...action.payload
      }
    }
  },
});

const otpSlice = createSlice({
  name: "otp",
  initialState: initialOTPState,
  reducers: {
    updateOTPInformation: (state, action) => {
      state.userData.otp = {
        ...state.userData.otp,
        ...action.payload,
      };
    },
  }
})

export const {
  updatePersonalInformation,
  updateIdentification,
  updateAccountInformation,
  updateLocationRole,
  updateReviewAccept,
  setLogin
} = multiStepSignupSlice.actions;

export const {
  updateOTPInformation
} = otpSlice.actions;

const rootReducer = combineReducers({
  multiStepSignup: multiStepSignupSlice.reducer,
  otp: otpSlice.reducer
});

export default rootReducer
