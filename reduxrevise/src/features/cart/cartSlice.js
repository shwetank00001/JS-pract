import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

 const cartSlice = createSlice({
    name: 'cart',
    defaultState
    })

console.log(cartSlice);
//{name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ, …}

export default cartSlice