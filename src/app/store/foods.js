import { createAction, createSlice } from "@reduxjs/toolkit";
import foodService from "../services/food.service";

const foodsSlice = createSlice({
    name: "foods",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
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

export const getFoods = () => (state) => state.foods.entities;

export const getFoodsLoadingStatus = () => (state) => state.foods.isLoading;

export const loadFoodsList = () => async (dispatch, getState) => {
    dispatch(foodsRequested());
    try {
        const { content } = await foodService.get();
        dispatch(foodsReceived(content));
    } catch (error) {
        dispatch(foodsRequestFailed(error.message));
    }
};

export const getFoodById = (id) => (state) => {
    return state.foods.entities.find((food) => food._id === id);
};

const { reducer: foodsReducer, actions } = foodsSlice;
const { foodsRequested, foodsReceived, foodsRequestFailed } = actions;

export default foodsReducer;
