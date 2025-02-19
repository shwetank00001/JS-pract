import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    cart: [],
    amount: 0,
    total: 0,
    isLoading: true
}

 const cartSlice = createSlice({
    name: 'cart',
    defaultState
    })

console.log(cartSlice);

export default cartSlice