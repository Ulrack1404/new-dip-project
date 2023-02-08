import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import basketReducer from "./basket";
import categoriesReducer from "./categories";
import foodsReducer from "./foods";

const rootReducer = combineReducers({
    foods: foodsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    basket: basketReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== "production"
    });
}
