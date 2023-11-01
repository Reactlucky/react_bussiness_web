import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { listcontactListCompany } from './ContactListApi';

const initialState = {
    status: null,
    msg: "",
    isLoading: false,
    contactListCompanyList: null,
};

export const listcontactListAsync = createAsyncThunk(
    'listcontactList/get',
    async (data) => {
        try {
            const response = await listcontactListCompany(data);
            if (response.status === 0) return response;
            else return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const contactListSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        clearStatus : (state,action) => {
            state.status = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listcontactListAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(listcontactListAsync.fulfilled, (state, action) => {
                state.status = null;
                if (action.payload.status === 1){
                    state.msg = action.payload.messsage
                    state.isLoading = false
                    state.contactListCompanyList = action.payload.data ;
                }
                else {
                    state.msg = action.payload.messsage
                    state.isLoading = false
                }
            })
            ;
    },
});

export const { clearDataById } = contactListSlice.actions;

export const selectStatus = (state) => state.contactList.status;
export const selectMsg = (state) => state.contactList.msg;
export const selectLoading = (state) => state.contactList.isLoading;

export default contactListSlice.reducer;
