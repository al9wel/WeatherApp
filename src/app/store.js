import { configureStore } from "@reduxjs/toolkit";
import wetherReducer from "./weather/weatherSlice"
export const store = configureStore({
    reducer: {
        weather: wetherReducer
    }
})