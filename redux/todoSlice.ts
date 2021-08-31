import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoStr {
    id: number,
    data: String,
    status: 'on' | 'done',
};

const initialState: todoStr[] = [
    {id: 1, data: "Task 1", status: 'on'},
    {id: 2, data: "Task 2", status: 'on'},
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<todoStr>) => {
            state.push(action.payload);
            console.log(action.payload)
        },
        remove: (state, {payload}) => {
            const i = state.findIndex((o) => o.id === payload);
            state.splice(i, 1);
        },
        toggleStatus: (state, {payload}) => {
            const i = state.findIndex((o) => o.id === payload);
            state[i].status = state[i].status == 'done' ? 'on' : 'done'
        }
    }

});

export const {add, remove, toggleStatus} = todoSlice.actions;

export default todoSlice.reducer