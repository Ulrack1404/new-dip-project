import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toysReducer from "./toys";

const rootReducer = combineReducers({
    toys: toysReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
