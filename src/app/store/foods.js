import { createAction, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import API from "../api";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const foodsSlice = createSlice({
    name: "foods",
    initialState,
    reducers: {
        foodsRequested: (state) => {
            state.isLoading = true;
        },
        foodsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        foodsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: foodsReducer, actions } = foodsSlice;
const { foodsRequested, foodsReceived, foodsRequestFailed } = actions;

export default foodsReducer;
