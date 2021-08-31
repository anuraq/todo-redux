import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import todoReducer from './todoSlice'; 

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>