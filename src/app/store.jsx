import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/sign-in/LoginSlice';
import registerReducer from '../pages/sign-up/RegisterSlice';
import contactListReducer from '../pages/customer/contactList/ContactListSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        contactList: contactListReducer,
    },
  });