import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";

const basketSlice = createSlice({
    name: "basket",
    initialState: { entities: [] },
    reducers: {
        basketItemCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        basketItemRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (i) => i._id !== action.payload
            );
        }
    }
});
const { reducer: basketReducer, actions } = basketSlice;
const { basketItemCreated, basketItemRemoved } = actions;

export function createBasItem(payload) {
    return async function (dispatch) {
        dispatch(basketItemCreated(payload));
    };
}

export const removeItemBasket = (id) => async (dispatch) => {
    dispatch(basketItemRemoved(id));
};

export const getBasket = () => (state) => state.basket.entities;

export const getBasketItemById = (id) => (state) => {
    return state.basket.entities.find((b) => b._id === id);
};

export const getSummaryBasketCounter = () => (state) => {
    if (state.basket.entities) {
        let sum = 0;
        state.basket.entities.map((item) => (sum += item.basketCounter));
        return sum;
    }
};
export const getSummaryBasketPrice = () => (state) => {
    if (state.basket.entities) {
        let sum = 0;
        state.basket.entities.map((item) => (sum += item.basketPrice));
        return sum;
    }
};

export default basketReducer;
