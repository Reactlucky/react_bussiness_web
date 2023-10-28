import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postLogin } from "./LoginAPI";

const initialState = {
    status: null,
    token: null,
    msg: "",
    isLoading: false
};

export const loginAsync = createAsyncThunk(
    'login/postLogin',
    async (data) => {
        try {
            const response = await postLogin(data);
            if (response.status === 0) return response;
            else return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                console.log("action", action.payload.status)
                if (action.payload.status === 1 ){
                    state.status = action.payload.status;
                    state.isLoading = false
                    let user = action.payload.data;
                    localStorage.setItem('user-token', user.token);
                    localStorage.setItem('user', JSON.stringify(user));
                    state.token = user;
                } else if(action.payload.status === 0){
                    state.status = action.payload.status;
                    state.isLoading = false
                    state.msg = action.payload.message
                }
                else {
                    
                    state.status = null;
                    state.token = null;
                    state.msg = ""
                }
            });
    },
});

export const { loginFormChange } = loginSlice.actions;

export const selectStatus = (state) => state.login.status;
export const selectMsg = (state) => state.login.msg;
export const selectLoading = (state) => state.login.isLoading;
export const selectToken = (state) => localStorage.getItem('user-token');

export default loginSlice.reducer;
