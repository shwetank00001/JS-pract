import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}
let modalSlice =  createSlice({
    name: "modal",
    initialState,
    reducers : {
        openModal : (state,action) => {
            state.isOpen = true;
        },
        closeModal : (state,action) => {
            state.isOpen = false;
        },
    }
})

console.log(modalSlice)
export const {openModal, closeModal} = modalSlice.actions

export default modalSlice = modalSlice.reducer