import { createSlice } from "@reduxjs/toolkit";

enum todoStatus {
    on, done
}

export interface todoStr {
    id: number,
    data: String,
    status: todoStatus,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: Array<todoStr>()
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        remove: (state, action) => {

        },
        toggleStatus: (state, action) => {

        }
    }

});

export const {add, remove, toggleStatus} = todoSlice.actions;

export default todoSlice.reducer;