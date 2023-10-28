import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postRegister } from './RegisterAPI';

const initialState = {
    status: null,
    msg: "",
    isLoading: false
};

export const registerAsync = createAsyncThunk(
    'register/postRegister',
    async (data) => {
        try {
            const response = await postRegister(data);
            if (response.status === 0) return response;
            else return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                if (action.payload.status === 1){
                    state.status = action.payload.status;
                    state.msg = action.payload.messsage
                    state.isLoading = false
                }
                else {
                    state.status = action.payload.status;
                    state.msg = action.payload.messsage
                    state.isLoading = false
                }
            });
    },
});

export const { registerFormChange } = registerSlice.actions;

export const selectStatus = (state) => state.register.status;
export const selectMsg = (state) => state.register.msg;
export const selectLoading = (state) => state.register.isLoading;

export default registerSlice.reducer;
