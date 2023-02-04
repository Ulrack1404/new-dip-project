import { createAction, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import API from "../api";

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
        toysReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        toysRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: toysReducer, actions } = toysSlice;
const { toysRequested, toysReceived, toysRequestFailed } = actions;

// export const loadToysList = () => (dispatch, getState) => {
//     dispatch(toysRequested());
//     try {
//         const { content } =
//         dispatch(toysReceived(content));
//     } catch (error) {
//         dispatch(toysRequestFailed(error.message));
//     }
// };

export default toysReducer;
