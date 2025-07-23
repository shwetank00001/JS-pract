import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList : [],
}

const todoSlice = createSlice({
    name : 'todo',
    initialState
})

console.log(todoSlice.reducer);
export default todoSlice