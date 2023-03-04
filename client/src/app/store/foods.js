import { createAction, createSlice } from "@reduxjs/toolkit";
import foodService from "../services/food.service";

const foodsSlice = createSlice({
    name: "foods",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        modalId: null
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
        },
        foodUpdated: (state, action) => {
            const indexFood = state.entities.findIndex(
                (f) => f._id === action.payload._id
            );
            state.entities[indexFood] = action.payload;
        },
        foodRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (f) => f._id !== action.payload
            );
        },
        foodRemovedFailed: (state, action) => {
            state.error = action.payload;
        },
        foodCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        foodCreatedFailed: (state, action) => {
            state.error = action.payload;
        },
        setModal: (state, action) => {
            state.modalId = action.payload;
        }
    }
});

const foodUpdateRequested = createAction("foods/foodUpdateRequested");
const foodUpdateFailed = createAction("foods/foodUpdateFailed");
const foodRemovedRequested = createAction("foods/foodRemovedRequested");
const foodCreatedRequested = createAction("foods/foodCreatedRequested");

export const updateFoodData = (payload) => async (dispatch) => {
    dispatch(foodUpdateRequested());
    try {
        const { content } = await foodService.update(payload);
        dispatch(foodUpdated(content));
    } catch (error) {
        dispatch(foodUpdateFailed(error.message));
    }
};

export const createFoodData = (payload) => async (dispatch) => {
    dispatch(foodCreatedRequested());
    try {
        const { content } = await foodService.create(payload);
        dispatch(foodCreated(content));
    } catch (error) {
        dispatch(foodCreatedFailed(error.message));
    }
};

export const removeFood = (id) => async (dispatch) => {
    dispatch(foodRemovedRequested());
    try {
        await foodService.remove(id);
        dispatch(foodRemoved(id));
    } catch (error) {
        dispatch(foodRemovedFailed(error.message));
    }
};
export const setModalId = (id) => (dispatch) => {
    dispatch(setModal(id));
};

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

export const getModalId = () => (state) => {
    return state.foods.modalId;
};

const { reducer: foodsReducer, actions } = foodsSlice;
const {
    foodsRequested,
    foodsReceived,
    foodsRequestFailed,
    foodUpdated,
    foodRemoved,
    foodRemovedFailed,
    foodCreated,
    foodCreatedFailed,
    setModal
} = actions;

export default foodsReducer;
