import { combineReducers, configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./foods";

const rootReducer = combineReducers({
    foods: foodsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
