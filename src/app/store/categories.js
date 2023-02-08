import { createAction, createSlice } from "@reduxjs/toolkit";
import CategoryService from "../services/category.service";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const getCategories = () => (state) => state.categories.entities;

export const getCategoriesLoadingStatus = () => (state) =>
    state.categories.isLoading;

export const loadCategoriesList = () => async (dispatch, getState) => {
    dispatch(categoriesRequested());
    try {
        const { content } = await CategoryService.get();
        dispatch(categoriesReceived(content));
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message));
    }
};

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesReceived, categoriesRequestFailed } = actions;

export default categoriesReducer;
