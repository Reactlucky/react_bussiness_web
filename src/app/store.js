import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/sign-in/LoginSlice'
import registerReducer from '../pages/sign-up/RegisterSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer
    },
  });