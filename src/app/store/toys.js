import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const toysSlice = createSlice({
    name: "toys",
    initialState,
    reducers: {
        toysRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
